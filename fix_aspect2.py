import os
import re
import subprocess

def get_dimensions(filepath):
    try:
        out = subprocess.check_output(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', filepath], universal_newlines=True)
        w = re.search(r'pixelWidth:\s*(\d+)', out)
        h = re.search(r'pixelHeight:\s*(\d+)', out)
        if w and h:
            return w.group(1), h.group(1)
    except:
        pass
    return None, None

images = {}
for file in os.listdir('src/assets'):
    if file.endswith(('.jpg', '.png', '.jpeg')):
        path = os.path.join('src/assets', file)
        w, h = get_dimensions(path)
        if w and h:
            images[file] = (w, h)

print(f"Found dimensions: {images}")

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()

            new_content = content
            # find all imports from assets
            import_regex = re.compile(r'import\s+(\w+)\s+from\s+[\'"].*?assets/([^(\'|")]+)[\'"]', re.MULTILINE)
            for match in import_regex.finditer(content):
                var_name = match.group(1)
                img_file = match.group(2)
                
                if img_file in images:
                    w, h = images[img_file]
                    # Find <img ... src={var_name} ...>
                    # using regular expressions
                    pattern = r'(<img\b(?![^>]*\bwidth=)[^>]*?\bsrc=\{' + var_name + r'\}[^>]*)(>)'
                    # add width and height before the closing bracket
                    replacement = r'\1 width={' + w + '} height={' + h + '} \2'
                    
                    old_content = new_content
                    new_content = re.sub(pattern, replacement, new_content)
                    
                    if old_content != new_content:
                        print(f"Updated {filepath} for variable {var_name}")

            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)

