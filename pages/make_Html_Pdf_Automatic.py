import os
import glob

htmltemplate = """ 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PDF Viewer</title>
<style>
  html, body {
    height: 100%;
    margin: 0;
  }
  embed {
    width: 100%;
    height: 99%;
    border: none;
  }
</style>
<script>
  // On page load, replace .html with .pdf in current page URL
  window.onload = function() {
    const embed = document.getElementById('pdfEmbed');
    const currentFile = window.location.pathname.split('/').pop(); // get filename
    const pdfFile = currentFile.replace(/\.html$/i, '.pdf');
    embed.src = pdfFile;
  }
</script>
</head>
<body>
  <embed id="pdfEmbed" type="application/pdf" />
</body>
</html>
"""

# Get all PDF files in current folder and subfolders
pdf_files = glob.glob("**/*.pdf", recursive=True)

for pdf_path in pdf_files:
    # Replace .pdf with .html
    html_path = pdf_path[:-4] + ".html"
    print(html_path)

    
    # Write the HTML template to the new HTML file
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(htmltemplate)

print(f"Generated {len(pdf_files)} HTML files.")
