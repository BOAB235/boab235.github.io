from pathlib import Path
import glob
import csv
from PyPDF2 import PdfReader

# Current folder (you can change this if needed)
root_folder = "."

# Get all PDFs recursively
pdf_files = glob.glob(f"{root_folder}/**/*.pdf", recursive=True)

results = []
total_pages = 0

for pdf_path in pdf_files:

    # Skip generated / unwanted files
    if "count_pdf_pages" in pdf_path:
        continue

    try:
        reader = PdfReader(pdf_path)

        # Skip empty or invalid PDFs
        if not reader.pages:
            continue

        nb_pages = len(reader.pages)

        total_pages += nb_pages

        results.append({
            "path": pdf_path,
            "name": Path(pdf_path).name,
            "pages": nb_pages
        })

    except Exception as e:
        print(f"[SKIP] {pdf_path} -> {e}")

# Sort by number of pages (descending)
results.sort(key=lambda x: x["pages"], reverse=True)

# ===== CSV OUTPUT =====
csv_file = "pdf_page_count.csv"

with open(csv_file, "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)

    writer.writerow(["PDF Name", "Pages", "Full Path"])

    for r in results:
        writer.writerow([r["name"], r["pages"], r["path"]])

    writer.writerow([])
    writer.writerow(["TOTAL", total_pages])

# ===== TXT SUMMARY OUTPUT =====
txt_file = "pdf_page_summary.txt"

with open(txt_file, "w", encoding="utf-8") as f:
    for r in results:
        f.write(f"{r['name']}  |  {r['pages']} pages\n")

    f.write("\n")
    f.write(f"TOTAL PAGES = {total_pages}\n")

# ===== PRINT RESULT =====
print("\nDONE")
print(f"Files counted: {len(results)}")
print(f"Total pages: {total_pages}")
print(f"CSV: {csv_file}")
print(f"TXT: {txt_file}")
