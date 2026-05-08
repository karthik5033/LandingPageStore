import os
import re
import glob

def find_ids_in_file(filepath):
    if not os.path.exists(filepath):
        return []
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    return re.findall(r'id="([^"]+)"', content)

def fix_navbars():
    template_pages = glob.glob('src/app/template*/page.tsx')
    
    for page_path in template_pages:
        with open(page_path, 'r', encoding='utf-8') as f:
            page_content = f.read()
        
        # Find navbar import
        match = re.search(r'import\s+\w+\s+from\s+[\'"]@/components/([^/]+)/Navbar[\'"]', page_content)
        if not match:
            continue
        
        component_folder = match.group(1)
        navbar_path = f'src/components/{component_folder}/Navbar.tsx'
        
        if not os.path.exists(navbar_path):
            continue
            
        # Gather all IDs
        all_ids = []
        all_ids.extend(find_ids_in_file(page_path))
        
        for comp_file in glob.glob(f'src/components/{component_folder}/*.tsx'):
            all_ids.extend(find_ids_in_file(comp_file))
            
        # Filter and unique
        valid_ids = []
        for id_val in all_ids:
            if id_val not in valid_ids and id_val != 'hero':
                valid_ids.append(id_val)
                
        # Read Navbar
        with open(navbar_path, 'r', encoding='utf-8') as f:
            navbar_content = f.read()
            
        # Find links
        links = re.findall(r'<a\s+href="#([^"]+)"([^>]*)>([^<]+)</a>', navbar_content)
        
        if not links:
            continue
            
        print(f"Template: {page_path} (Folder: {component_folder})")
        print(f"  Valid IDs: {valid_ids}")
        print(f"  Navbar Links: {[(l[0], l[2]) for l in links]}")
        
        mismatched = any(l[0] not in valid_ids for l in links)
        if mismatched:
            print("  MISMATCH DETECTED!")
            
            # Create a mapping
            new_content = navbar_content
            for i, (old_id, rest, old_text) in enumerate(links):
                if i < len(valid_ids):
                    new_id = valid_ids[i]
                    new_text = new_id.capitalize()
                    
                    # Regex to replace just this specific link's href and text
                    # We have to be careful with replace
                    pattern = r'<a\s+href="#' + re.escape(old_id) + r'"' + re.escape(rest) + r'>' + re.escape(old_text) + r'</a>'
                    replacement = f'<a href="#{new_id}"{rest}>{new_text}</a>'
                    new_content = re.sub(pattern, replacement, new_content)
                else:
                    print(f"  WARNING: Not enough valid IDs to replace '{old_id}'")
            
            with open(navbar_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("  -> FIXED!")
        print("-" * 40)

if __name__ == "__main__":
    fix_navbars()
