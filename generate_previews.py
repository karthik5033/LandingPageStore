import os
import re
import shutil
import glob

public_dir = "d:/coding_files/Projects/Landing-Page-Store/public"
previews_dir = os.path.join(public_dir, "previews")
app_dir = "d:/coding_files/Projects/Landing-Page-Store/src/app"

os.makedirs(previews_dir, exist_ok=True)

# Loop through template 1 to 29
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
            else:
                print(f"Warning: No folderPath found in template{i}")
                
    if folder_path:
        # Find first image in public/folder_path
        src_folder = os.path.join(public_dir, folder_path)
        if os.path.exists(src_folder):
            images = glob.glob(os.path.join(src_folder, "*.*"))
            # Filter for jpg, jpeg, png, webp
            images = [img for img in images if img.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
            if images:
                # Sort to get the first frame (usually 000 or 001)
                images.sort()
                # Actually, sometimes we might want the 10th frame because the first is black. Let's just grab the 10th if it exists.
                if len(images) > 10:
                    first_img = images[10]
                else:
                    first_img = images[0]
                
                # Copy to previews
                ext = os.path.splitext(first_img)[1]
                dest_path = os.path.join(previews_dir, f"template{i}{ext}")
                shutil.copy2(first_img, dest_path)
                print(f"Template {i}: Copied {os.path.basename(first_img)} to previews/template{i}{ext}")
            else:
                print(f"Warning: No images found in {src_folder} for template{i}")
        else:
            print(f"Warning: Source folder {src_folder} does not exist for template{i}")
            
print("Done creating preview thumbnails!")
