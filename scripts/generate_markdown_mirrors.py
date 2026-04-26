# Required packages: beautifulsoup4, markdownify
# Install with: pip install beautifulsoup4 markdownify

import os
import re
import sys
from datetime import date

# --- Dependency check ---
try:
    from bs4 import BeautifulSoup
except ImportError:
    print("Missing required package: beautifulsoup4. Run: pip install beautifulsoup4 markdownify")
    sys.exit(1)

try:
    from markdownify import markdownify as md
except ImportError:
    print("Missing required package: markdownify. Run: pip install beautifulsoup4 markdownify")
    sys.exit(1)


SITE_URL = "https://www.mathedemic.com"
TODAY = date.today().isoformat()

# Class substrings whose containing elements should be stripped before conversion
STRIP_CLASS_FRAGMENTS = [
    "navbar", "nav-", "footer", "announcement-bar", "whatsapp-float",
    "back-to-top", "cookie", "modal", "overlay", "drawer", "hamburger",
    "announcement", "whatsapp", "backToTop",
]

# Tags to remove entirely regardless of class
STRIP_TAGS = ["nav", "footer", "script", "style", "noscript", "iframe", "link"]


def has_strip_class(tag):
    classes = tag.get("class", [])
    if isinstance(classes, str):
        classes = [classes]
    class_str = " ".join(classes)
    return any(frag in class_str for frag in STRIP_CLASS_FRAGMENTS)


def has_strip_id(tag):
    tag_id = tag.get("id", "")
    return "backToTop" in tag_id or "back-to-top" in tag_id


def canonical_from_path(html_path, dist_root):
    rel = os.path.relpath(html_path, dist_root)
    # dist/index.html → /
    # dist/about/index.html → /about
    parts = rel.replace("\\", "/").split("/")
    if parts[-1] == "index.html":
        parts = parts[:-1]
    if not parts or parts == [""]:
        return SITE_URL + "/"
    return SITE_URL + "/" + "/".join(parts)


def strip_title_suffix(title):
    for suffix in [" | Mathedemic", " — Mathedemic", " - Mathedemic"]:
        if title.endswith(suffix):
            return title[: -len(suffix)]
    return title


def clean_markdown(text):
    lines = text.splitlines()
    cleaned = []
    for line in lines:
        # Remove trailing whitespace
        line = line.rstrip()
        # Remove standalone empty image syntax
        if re.match(r"^!\[\]\(.*\)$", line.strip()):
            continue
        # Remove lines that are only a bare number (e.g. "01", "1.", "2.")
        if re.match(r"^\s*\d+\.?\s*$", line):
            continue
        # Remove bullet points that contain only separators/special chars
        if re.match(r"^\s*[-*]\s*[—|•\-\s]*$", line):
            continue
        # Remove lines that are only whitespace
        if line and not line.strip():
            continue
        cleaned.append(line)

    # Collapse 3+ consecutive blank lines to 2
    result = []
    blank_count = 0
    for line in cleaned:
        if line == "":
            blank_count += 1
            if blank_count <= 2:
                result.append(line)
        else:
            blank_count = 0
            result.append(line)

    return "\n".join(result)


def html_to_markdown(soup):
    # Remove strip-tags
    for tag_name in STRIP_TAGS:
        for el in soup.find_all(tag_name):
            el.decompose()

    # Remove elements by class or id (collect first, then decompose to avoid mutation during iteration)
    to_remove = [
        el for el in soup.find_all(True)
        if el.attrs is not None and (has_strip_class(el) or has_strip_id(el))
    ]
    for el in to_remove:
        el.decompose()

    # Remove empty divs/spans (only whitespace)
    to_remove_empty = [
        el for el in soup.find_all(["div", "span"])
        if el.attrs is not None and not el.get_text(strip=True)
    ]
    for el in to_remove_empty:
        el.decompose()

    # Get the body content (or full soup if no body)
    body = soup.find("body") or soup

    # img not listed → stripped automatically; we re-add meaningful ones after
    raw_md = md(
        str(body),
        heading_style="ATX",
        bullets="-",
        convert=["h1", "h2", "h3", "h4", "p", "ul", "ol", "li", "a", "strong", "b", "em", "i", "br", "blockquote"],
    )

    # Re-add images that have meaningful alt text
    for img in soup.find_all("img"):
        alt = img.get("alt", "").strip()
        src = img.get("src", "").strip()
        if alt and alt.lower() not in ("image", "") and not re.search(r"\.\w{2,5}$", alt):
            raw_md += f"\n![{alt}]({src})\n"

    return clean_markdown(raw_md)


def build_frontmatter(title, description, url):
    clean_title = strip_title_suffix(title or "")
    desc = (description or "").replace("\n", " ").strip()
    return (
        "---\n"
        f"title: {clean_title}\n"
        f"description: {desc}\n"
        f"url: {url}\n"
        f"site: Mathedemic\n"
        f"site_url: {SITE_URL}\n"
        f"last_updated: {TODAY}\n"
        "---"
    )


def process_file(html_path, dist_root):
    with open(html_path, encoding="utf-8", errors="replace") as f:
        raw_html = f.read()

    # Skip noindex pages
    if re.search(r'<meta\s[^>]*name=["\']robots["\'][^>]*content=["\'][^"\']*noindex',
                 raw_html, re.IGNORECASE):
        return None, "noindex"

    soup = BeautifulSoup(raw_html, "html.parser")

    # Extract metadata
    title_tag = soup.find("title")
    title = title_tag.get_text(strip=True) if title_tag else ""

    desc_tag = soup.find("meta", attrs={"name": "description"})
    description = desc_tag.get("content", "").strip() if desc_tag else ""

    canonical_tag = soup.find("link", attrs={"rel": "canonical"})
    url = canonical_tag.get("href", "").strip() if canonical_tag else ""
    if not url:
        url = canonical_from_path(html_path, dist_root)

    frontmatter = build_frontmatter(title, description, url)
    content_md = html_to_markdown(soup)

    output = frontmatter + "\n\n" + content_md.strip() + "\n"

    out_path = os.path.join(os.path.dirname(html_path), "index.md")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(output)

    return out_path, content_md


def main():
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    dist_root = os.path.join(project_root, "dist")

    # Step 1 — Validate dist/ exists
    if not os.path.isdir(dist_root) or not any(
        fname == "index.html"
        for _, _, files in os.walk(dist_root)
        for fname in files
    ):
        print("dist/ folder not found or empty. Run npm run build first, then re-run this script.")
        sys.exit(1)

    # Step 2 — Walk and collect index.html files
    html_files = []
    for dirpath, _, filenames in os.walk(dist_root):
        for fname in filenames:
            if fname == "index.html":
                full_path = os.path.join(dirpath, fname)
                # Skip 404 paths
                if "404" in full_path.replace("\\", "/"):
                    continue
                html_files.append(full_path)

    html_files.sort()
    total_found = len(html_files)

    converted = []
    skipped = []
    short_pages = []

    for html_path in html_files:
        rel = os.path.relpath(html_path, project_root).replace("\\", "/")
        out_path, result = process_file(html_path, dist_root)

        if result == "noindex":
            print(f"  [SKIP — noindex]  {rel}")
            skipped.append(rel)
            continue

        content_len = len(result.strip())
        size_kb = os.path.getsize(out_path) / 1024
        print(f"  [OK]  {rel}  ->  {os.path.relpath(out_path, project_root).replace(chr(92), '/')}  ({size_kb:.1f} KB)")
        converted.append((out_path, size_kb))

        if content_len < 200:
            short_pages.append(rel)

    # Summary
    print()
    print("=" * 60)
    print(f"  Total HTML files found : {total_found}")
    print(f"  Converted to markdown  : {len(converted)}")
    print(f"  Skipped (noindex/404)  : {len(skipped)}")
    print()
    print("  Output files:")
    for path, kb in converted:
        print(f"    {os.path.relpath(path, project_root).replace(chr(92), '/')}  ({kb:.1f} KB)")

    if short_pages:
        print()
        print("  [WARN] Potentially not pre-rendered (content < 200 chars):")
        for p in short_pages:
            print(f"    {p}")
    print("=" * 60)


if __name__ == "__main__":
    main()
