# Required packages: (none beyond stdlib)
# Run from the project root: python scripts/update_llms_mirrors.py

import os
import re
import sys

SITE_URL = "https://www.mathedemic.com"

# Fallback list used when dist/ has no .md files yet (pre-rendering incomplete)
KNOWN_ROUTES = [
    "/",
    "/about",
    "/services",
    "/contact",
    "/fee-structure",
    "/tutors",
    "/faq",
    "/terms",
    "/teaching-methods",
    "/resources",
    "/subjects/maths",
    "/subjects/english",
    "/subjects/science",
    "/subjects/science-subjects",
    "/test-prep",
    "/test-prep/sat-act",
]

SECTION_HEADER = "## Markdown Mirrors (Clean AI-Readable Versions)"
SECTION_INTRO = (
    "\nEvery page on this site has a plain-text markdown mirror containing the full page content "
    "without navigation, scripts, or layout. AI tools and crawlers can read these directly.\n"
    "\nAdd /index.md to any page URL to get the clean content version.\n"
)


def find_md_files(dist_root):
    """Return URLs for all index.md files found in dist/, excluding 404 paths."""
    urls = []
    for dirpath, _, filenames in os.walk(dist_root):
        for fname in filenames:
            if fname != "index.md":
                continue
            full_path = os.path.join(dirpath, fname)
            norm = full_path.replace("\\", "/")
            if "404" in norm:
                continue
            rel = os.path.relpath(full_path, dist_root).replace("\\", "/")
            # dist/index.md → /
            # dist/about/index.md → /about
            parts = rel.split("/")
            if parts[-1] == "index.md":
                parts = parts[:-1]
            route = "/" + "/".join(parts) if parts else "/"
            url = SITE_URL + route + "/index.md"
            # Normalise double-slash for root
            url = url.replace("//index.md", "/index.md")
            urls.append(url)
    return sorted(urls)


def build_section(urls):
    lines = [SECTION_HEADER, SECTION_INTRO]
    for url in urls:
        lines.append(f"- {url}")
    lines.append("")
    return "\n".join(lines)


def update_llms(llms_path, urls):
    with open(llms_path, encoding="utf-8") as f:
        content = f.read()

    new_section = build_section(urls)

    # Replace existing section if present (from header up to next ## heading or end of file)
    pattern = re.compile(
        r"## Markdown Mirrors \(Clean AI-Readable Versions\).*?(?=\n## |\Z)",
        re.DOTALL,
    )
    if pattern.search(content):
        updated = pattern.sub(new_section, content)
    else:
        # Insert before "## What Makes Mathedemic Different" if section doesn't exist yet
        insert_before = "## What Makes Mathedemic Different"
        if insert_before in content:
            updated = content.replace(insert_before, new_section + "\n" + insert_before)
        else:
            # Append at end as last resort
            updated = content.rstrip() + "\n\n" + new_section + "\n"

    with open(llms_path, "w", encoding="utf-8") as f:
        f.write(updated)

    return len(urls)


def main():
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    dist_root = os.path.join(project_root, "dist")
    llms_path = os.path.join(project_root, "public", "llms.txt")

    if not os.path.isfile(llms_path):
        print(f"Error: {llms_path} not found.")
        sys.exit(1)

    # Build the canonical URL list:
    # Always include all known routes (authoritative list), then add any extra
    # .md files discovered in dist/ that are not already covered.
    known_urls = [
        (SITE_URL + (route if route != "/" else "") + "/index.md").replace("//index.md", "/index.md")
        for route in KNOWN_ROUTES
    ]
    discovered = find_md_files(dist_root)
    # Merge: known routes first, then any extras found in dist/ not already listed
    known_set = set(known_urls)
    extras = [u for u in discovered if u not in known_set]
    urls = known_urls + extras

    if discovered:
        source = f"known routes + {len(discovered)} found in dist/ ({len(extras)} extra)"
    else:
        source = "known routes (dist/ has no .md files yet)"

    count = update_llms(llms_path, urls)
    print(f"Updated {llms_path}")
    print(f"  Source  : {source}")
    print(f"  Written : {count} mirror URL(s)")


if __name__ == "__main__":
    main()
