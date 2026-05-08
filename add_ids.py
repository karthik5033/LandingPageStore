import os
import glob
import re

def main():
    component_files = glob.glob('src/components/*/*.tsx')
    
    for file_path in component_files:
        basename = os.path.basename(file_path).replace('.tsx', '').lower()
        if basename in ['navbar', 'footer']:
            continue
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Check if there is a <section> tag
        # Find the first <section> tag
        match = re.search(r'<section\s+([^>]+)>', content)
        if match:
            attrs = match.group(1)
            if 'id=' not in attrs:
                # Add id="..."
                new_attrs = f'id="{basename}" ' + attrs
                new_content = content.replace(f'<section {attrs}>', f'<section {new_attrs}>', 1)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Added id='{basename}' to {file_path}")

if __name__ == "__main__":
    main()
