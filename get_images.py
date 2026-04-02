import os
import re

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
                
            img_tags = re.findall(r'<img[^>]*>', content)
            if img_tags:
                print(f"--- {filepath} ---")
                for tag in img_tags:
                    print(tag)
