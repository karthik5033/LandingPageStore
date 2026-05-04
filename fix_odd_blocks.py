import os
import re

components = ['lumen', 'opus', 'zenith', 'gravity', 'fracture', 'extract', 'ritual']

# 1. Fix Footers
for comp in components:
    footer_file = f"src/components/{comp}/Footer.tsx"
    if os.path.exists(footer_file):
        with open(footer_file, 'r') as f:
            content = f.read()
            
        def replacer(match):
            cls = match.group(1)
            cls = re.sub(r'bg-\[#[A-Fa-f0-9]+\](?:/\d+)?', 'bg-transparent', cls)
            cls = re.sub(r'backdrop-blur-(?:sm|md|lg|xl)', '', cls)
            cls = re.sub(r'border-t(?:-4)?\s+border-\[#[A-Fa-f0-9]+\](?:/\d+)?', 'border-none', cls)
            cls = cls.replace('py-20', 'py-12')
            cls = re.sub(r'\s+', ' ', cls)
            return f'<footer className="{cls.strip()}">'
            
        content = re.sub(r'<footer className="(.*?)">', replacer, content, count=1)
        content = content.replace('mb-24', 'mb-16')
        
        with open(footer_file, 'w') as f:
            f.write(content)

# 2. Fix CTAs in page.tsx
for i in range(23, 30):
    page_file = f"src/app/template{i}/page.tsx"
    if os.path.exists(page_file):
        with open(page_file, 'r') as f:
            content = f.read()
            
        content = re.sub(
            r'<section className="h-\[80vh\] flex flex-col items-center justify-center px-8 text-center.*?">',
            r'<section className="h-[80vh] flex flex-col items-center justify-center px-8 text-center bg-transparent border-none">',
            content
        )
        
        with open(page_file, 'w') as f:
            f.write(content)

# 3. Fix Opus Features background
opus_features = "src/components/opus/Features.tsx"
if os.path.exists(opus_features):
    with open(opus_features, 'r') as f:
        content = f.read()
    content = content.replace('bg-[#050505]/90 backdrop-blur-md', 'bg-transparent')
    with open(opus_features, 'w') as f:
        f.write(content)

print("Done fixing odd blocks!")
