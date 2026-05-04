import os

templates = {
    23: 'LUMEN',
    24: 'OPUS',
    25: 'ZENITH',
    26: 'GRAVITY',
    27: 'FRACTURE',
    28: 'EXTRACT',
    29: 'RITUAL'
}

for num, name in templates.items():
    layout_path = f"src/app/template{num}/layout.tsx"
    os.makedirs(f"src/app/template{num}", exist_ok=True)
    
    content = f"""import type {{ Metadata }} from 'next';

export const metadata: Metadata = {{
  title: '{name}',
}};

export default function Layout({{ children }}: {{ children: React.ReactNode }}) {{
  return children;
}}
"""
    with open(layout_path, "w") as f:
        f.write(content)
        
print("Generated layouts for metadata!")
