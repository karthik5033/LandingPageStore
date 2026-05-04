import os
import re
import glob
import json

app_dir = "d:/coding_files/Projects/Landing-Page-Store/src/app"
public_dir = "d:/coding_files/Projects/Landing-Page-Store/public"
output = {}

for i in range(1, 30):
    page_path = os.path.join(app_dir, f"template{i}", "page.tsx")
    if not os.path.exists(page_path):
        continue
        
    folder_path = ""
    if i == 1:
        folder_path = "frames"
    else:
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
            match = re.search(r'folderPath="/([^"]+)"', content)
            if match:
                folder_path = match.group(1)
                
    if folder_path:
        src_folder = os.path.join(public_dir, folder_path)
        if os.path.exists(src_folder):
            images = glob.glob(os.path.join(src_folder, "*.*"))
            images = [img for img in images if img.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
            if images:
                images.sort()
                first_img = os.path.basename(images[0])
                ext = os.path.splitext(first_img)[1]
                match_prefix = re.match(r'(.*?)\d+', first_img)
                prefix = match_prefix.group(1) if match_prefix else ""
                
                output[str(i)] = {
                    "folder": folder_path,
                    "ext": ext,
                    "prefix": prefix,
                    "count": len(images)
                }

ts_content = "export const templateFolders: Record<string, { folder: string; ext: string; prefix: string; count: number }> = " + json.dumps(output, indent=2) + ";\n"

with open("d:/coding_files/Projects/Landing-Page-Store/src/lib/folders.ts", "w") as f:
    f.write(ts_content)
    
print("Created src/lib/folders.ts")
