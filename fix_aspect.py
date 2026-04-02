import os
import re
import subprocess

def get_dimensions(filepath):
    try:
        # e.g.:
        #   pixelWidth: 1920
        #   pixelHeight: 1080
        out = subprocess.check_output(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', filepath], universal_newlines=True)
        w = re.search(r'pixelWidth:\s*(\d+)', out)
        h = re.search(r'pixelHeight:\s*(\d+)', out)
        if w and h:
            return int(w.group(1)), int(h.group(1))
    except:
        pass
    return None, None

def read_imports(content):
    # import imgName from '@/assets/img.png'
    # returns dict of var_name -> file path relative to src/
    imports = {}
    import_regex = re.compile(r'import\s+(\w+)\s+from\s+[\'"]([^(\'|")]+)[\'"]')
    for match in import_regex.finditer(content):
        var_name = match.group(1)
        path = match.group(2)
        if path.startswith('@/assets/'):
            path = path.replace('@/', 'src/')
        elif path.startswith('../assets/'): # handle relative
            pass # simplified for now
        imports[var_name] = path
    return imports

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            imports = read_imports(content)
            
            # Simple regex to find <img ... > handling newlines
            img_blocks = re.finditer(r'<img\b[^>]*>', content)
            
            new_content = content
            offset = 0
            
            for match in img_blocks:
                full_img = match.group(0)
                if 'width=' in full_img and 'height=' in full_img:
                    continue
                
                # Check if src={varName}
                src_match = re.search(r'src=\{([^}]+)\}', full_img)
                if src_match:
                    var_name = src_match.group(1)
                    if var_name in imports:
                        img_path = imports[var_name]
                        # Fix up relative paths
                        if img_path.startswith('../'):
                            # rough relative resolution
                            rel_ups = img_path.count('../')
                            dir_parts = root.split('/')
                            # e.g. root='src/components', img_path='../assets/img.jpg'
                            # -> 'src/assets/img.jpg'
                            base_dir = '/'.join(dir_parts[:-rel_ups])
                            resolved_path = os.path.join(base_dir, img_path.replace('../'*rel_ups, ''))
                        else:
                            resolved_path = img_path
                            
                        w, h = get_dimensions(resolved_path)
                        if w and h:
                            replacement = full_img.replace('<img ', f'<img width={{{w}}} height={{{h}}} ')
                            
                            idx = match.start() + offset
                            old_len = len(full_img)
                            new_content = new_content[:idx] + replacement + new_content[idx+old_len:]
                            offset += len(replacement) - old_len
                            print(f'Updated {filepath} -> {var_name} ({w}x{h})')
            
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)

