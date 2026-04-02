import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # If it doesn't have loading="lazy", add it to <img...
    def add_lazy(match):
        full_match = match.group(0)
        if 'loading=' in full_match:
            return full_match
        return full_match.replace('<img', '<img loading="lazy"')

    new_content = re.sub(r'<img[^>]*>', add_lazy, content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))
