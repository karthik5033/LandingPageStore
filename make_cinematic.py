import os
import re

components = ['lumen', 'opus', 'zenith', 'gravity', 'fracture', 'extract', 'ritual']

for comp in components:
    for file_name in ['Features.tsx', 'Products.tsx', 'Process.tsx']:
        filepath = f"src/components/{comp}/{file_name}"
        if os.path.exists(filepath):
            with open(filepath, 'r') as f:
                content = f.read()
                
            def clean_section(match):
                tag = match.group(0)
                # Remove bg-[#...] and bg-[#...]/...
                tag = re.sub(r'\bbg-\[#[A-Fa-f0-9]{6}\](?:/\d+)?\b', 'bg-transparent', tag)
                # Remove bg-gradient-to-...
                tag = re.sub(r'\bbg-gradient-to-[trbl]\b', '', tag)
                # Remove from-, via-, to-
                tag = re.sub(r'\bfrom-\[#[A-Fa-f0-9]{6}\](?:/\d+)?\b', '', tag)
                tag = re.sub(r'\bvia-\[#[A-Fa-f0-9]{6}\](?:/\d+)?\b', '', tag)
                tag = re.sub(r'\bto-\[#[A-Fa-f0-9]{6}\](?:/\d+)?\b', '', tag)
                # Remove backdrop-blur-...
                tag = re.sub(r'\bbackdrop-blur-[a-z]+\b', '', tag)
                # Remove border-t
                tag = re.sub(r'\bborder-t\b', 'border-none', tag)
                tag = re.sub(r'\bborder-\[#[A-Fa-f0-9]{6}\](?:/\d+)?\b', '', tag)
                
                # Cleanup double spaces
                tag = re.sub(r'\s+', ' ', tag)
                return tag
                
            # Match <section ... >
            content = re.sub(r'<section\b[^>]*>', clean_section, content)
            
            with open(filepath, 'w') as f:
                f.write(content)
                
print("Done making sections fully cinematic!")
