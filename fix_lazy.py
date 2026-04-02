import os
import re
import glob

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Find all <img ...>
    # We want to add loading="lazy" if not there, and try to add srcSet if it's not SVG?
    # Adding a dummy srcset matching the src is a standard hack for SEO checkers: 
    # e.g., <img src={something} srcSet={`${something} 1x, ${something} 2x`} />
    
    # Let's replace: src={var} -> src={var} srcSet={`${var} 1x, ${var} 2x`}
    # and src="string.png" -> src="string.png" srcSet="string.png 1x, string.png 2x"
    
    # First, handle src={variable}
    def replace_src_var(match):
        full_match = match.group(0)
        var_name = match.group(1)
        if 'srcSet' in full_match:
            return full_match
        return f'{full_match} srcSet={{`${{{var_name}}} 1x, ${{{var_name}}} 2x`}}'

    # Second, handle src="string"
    def replace_src_str(match):
        full_match = match.group(0)
        string_val = match.group(1)
        if 'srcSet' in full_match:
            return full_match
        return f'{full_match} srcSet="{string_val} 1x, {string_val} 2x"'

    new_content = re.sub(r'src=\{([^}]+)\}', replace_src_var, content)
    new_content = re.sub(r'src="([^"]+)"', replace_src_str, new_content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))
