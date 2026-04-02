import os
import re

images = {'about-engineers-discussion.jpg': ('1024', '672'), 'construction-work.jpg': ('1024', '1024'), 'hero-highway.jpg': ('1920', '1080'), 'hero-services.jpg': ('1920', '768'), 'engineering-infrastructure.jpg': ('1024', '768'), 'about-construction-site.jpg': ('1024', '672'), 'about-journey.jpg': ('1024', '768'), 'bridge-project.jpg': ('1024', '1024'), 'sitk-logo.png': ('604', '615'), 'team-meeting.jpg': ('1024', '768'), 'cta-professionals.jpg': ('1920', '1024'), 'hero-membership.jpg': ('1920', '1080'), 'hero-news.jpg': ('1920', '1080'), 'hero-training.jpg': ('1920', '768'), 'about-office.jpg': ('1920', '1080'), 'about-team-planning.jpg': ('1024', '1024'), 'hero-about.jpg': ('1920', '1080'), 'forum-1.jpg': ('1920', '1080'), 'forum-main.jpg': ('1920', '1080'), 'forum-poster.jpg': ('1024', '1024'), 'forum-program-day1.jpg': ('1024', '1024'), 'forum-program-day2.jpg': ('1024', '1024'), 'forum-program-day3.jpg': ('1024', '1024'), 'makroregion-day1.jpg': ('1024', '1024'), 'makroregion-day2.jpg': ('1024', '1024'), 'makroregion-day3.jpg': ('1024', '1024'), 'makroregion-karykatury.jpg': ('1024', '1024'), 'makroregion-main.jpg': ('1920', '1080'), 'paris-montmartre.jpg': ('1024', '1024'), 'paris-versailles.jpg': ('1024', '1024'), 'vienna-church.jpg': ('1024', '1024'), 'vienna-schoenbrunn.jpg': ('1024', '1024')}

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()

            new_content = content
            import_regex = re.compile(r'import\s+(\w+)\s+from\s+[\'"].*?assets/([^(\'|")]+)[\'"]', re.MULTILINE)
            for match in import_regex.finditer(content):
                var_name = match.group(1)
                img_file = match.group(2)
                
                if img_file in images:
                    w, h = images[img_file]
                    # Direct string replace
                    # if we have `src={var_name}`, add width and height there
                    search_str = f'src={{{var_name}}}'
                    # only replace if width width= is not already present nearby
                    replace_str = f'src={{{var_name}}} width={{{w}}} height={{{h}}}'
                    
                    if search_str in new_content and f'width={{{w}}}' not in new_content:
                        new_content = new_content.replace(search_str, replace_str)
                        print(f"Updated {filepath} for {var_name}")

            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)

