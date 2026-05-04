import os
import glob
import re

def remove_scroll_indicator(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    start_pattern = r'<motion\.div[^>]*className="[^"]*absolute bottom-\d+[^"]*"[^>]*>'
    
    modified = False
    offset = 0
    while True:
        match = re.search(start_pattern, content[offset:])
        if not match:
            break
            
        start_idx = offset + match.start()
        
        depth = 0
        end_idx = -1
        
        tag_pattern = r'</?motion\.div[^>]*>'
        
        for m in re.finditer(tag_pattern, content[start_idx:]):
            tag_text = m.group(0)
            if tag_text.startswith('</'):
                depth -= 1
            else:
                if not re.search(r'/\s*>$', tag_text):
                    depth += 1
                    
            if depth == 0:
                end_idx = start_idx + m.end()
                break
                
        if end_idx != -1:
            # We unconditionally remove the "absolute bottom-" motion.div block
            # because in these templates, this is ALWAYS the scroll indicator.
            content = content[:start_idx] + content[end_idx:]
            modified = True
            # We don't increment offset because we shrunk the string
        else:
            break

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Processed {filepath}')

files = glob.glob('src/app/template*/page.tsx')
for file in files:
    remove_scroll_indicator(file)
