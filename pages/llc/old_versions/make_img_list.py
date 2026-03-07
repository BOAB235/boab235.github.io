import glob
import os
import re

folder = os.path.join(".", "imgs", "gal", "f1")
extensions = ("*.jpg", "*.jpeg", "*.png", "*.gif", "*.webp",
              "*.JPG", "*.JPEG", "*.PNG", "*.GIF", "*.WEBP")

files = []
for ext in extensions:
    files.extend(glob.glob(os.path.join(folder, ext)))

# Normalize paths, deduplicate, sort numerically
seen = set()
unique = []
for f in files:
    name = os.path.basename(f).lower()
    if name not in seen:
        seen.add(name)
        unique.append(f)

unique.sort(key=lambda f: int(m.group()) if (m := re.search(r'\d+', os.path.basename(f))) else 0)

# Write JS-ready list
with open("imgs_gal.txt", "w") as out:
    lines = []
    for f in unique:
        path = f.replace("\\", "/")
        lines.append(f'          "{path}"')
    out.write(",\n".join(lines) + "\n")

print(f"Found {len(unique)} images -> imgs_gal.txt")
