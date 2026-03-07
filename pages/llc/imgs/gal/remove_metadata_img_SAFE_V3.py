import os
import glob
from PIL import Image
import numpy as np

# Input and output directories
input_dir = r'Photos'
output_dir = r'Photos_no_Meta'

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Get all JPG and PNG files
image_paths = glob.glob(os.path.join(input_dir, '*.jpg')) + glob.glob(os.path.join(input_dir, '*.png'))
image_paths.sort()
dic={}
k=0
# Process each image
for img_path in image_paths:
    print(img_path) 
    # Open image
    img = Image.open(img_path)
    
    # Convert to numpy array
    arr = np.array(img)
    
    # Recreate image from array
    img_no_meta = Image.fromarray(arr)
    
    # Build output path
    base_name = os.path.basename(img_path)

    ext= base_name .split(".")[-1]
    
    #out_path = os.path.join(output_dir, base_name)
    new_base=f"img_{k}.{ext}"
    out_path = os.path.join(output_dir, new_base)
    dic[new_base]= base_name
    
    # Save image — no metadata included
    img_no_meta.save(out_path)
    k=k+1


import json


# Save dictionary
with open("dict.json", "w") as f:
    json.dump(dic, f)
    
print(f"Processed {len(image_paths)} images. All saved in '{output_dir}'.")
