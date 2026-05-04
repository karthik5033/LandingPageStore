import os
import glob
import re

components = ['zenith', 'gravity', 'fracture', 'extract', 'ritual']

for comp in components:
    process_file = f"src/components/{comp}/Process.tsx"
    if os.path.exists(process_file):
        with open(process_file, "r") as f:
            content = f.read()
        # e.g. via-[#0a0908]/90 to-[#0a0908] -> via-[#0a0908]/60 to-[#0a0908]/80
        # Also handle cases where to- doesn't have an opacity yet
        content = re.sub(r'via-(\[#[A-Fa-f0-9]+\])/\d+\s+to-(\[#[A-Fa-f0-9]+\])(["\s])', r'via-\1/60 to-\2/80\3', content)
        with open(process_file, "w") as f:
            f.write(content)
            
    products_file = f"src/components/{comp}/Products.tsx"
    if os.path.exists(products_file):
        with open(products_file, "r") as f:
            content = f.read()
        # e.g. from-[#0a0908] to-[#0a0908]/40 -> from-[#0a0908]/80 to-[#0a0908]/20
        content = re.sub(r'from-(\[#[A-Fa-f0-9]+\])\s+to-(\[#[A-Fa-f0-9]+\])/\d+', r'from-\1/80 to-\2/20', content)
        with open(products_file, "w") as f:
            f.write(content)
            
print("Done fixing gradients!")
