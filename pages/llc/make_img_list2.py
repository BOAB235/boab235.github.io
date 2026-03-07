import glob
import os
import re

#folder = os.path.join(".", "imgs", "gal", "f2")
folder = r"imgs\gal\f2"
extensions = ("*.jpg", "*.jpeg", "*.png", "*.gif", "*.webp",
              "*.JPG", "*.JPEG", "*.PNG", "*.GIF", "*.WEBP")

files = []
for ext in extensions:
    files.extend(glob.glob(os.path.join(folder, ext)))

txt= "['"+"',\n'".join(files)+"']"
txt= txt.replace("\\", "//")

file = folder.replace("\\", "_")+".txt"

with open(file, "w") as f:
    f.write(txt)


print(file, "Done")
