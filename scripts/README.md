# Mathedemic Build Scripts

## Full build (use this before uploading to Hostinger)
```
npm run build:full
```

This runs:
1. Vite build → generates dist/ with pre-rendered HTML
2. generate_markdown_mirrors.py → generates dist/**/index.md files
3. update_llms_mirrors.py → updates public/llms.txt with mirror URLs

## After running build:full
Upload the entire contents of dist/ to public_html/ on Hostinger.
The .htaccess, llms.txt, sitemap.xml, and robots.txt files are
all included in dist/ automatically via the public/ folder.

## Manual mirror regeneration
```
python scripts/generate_markdown_mirrors.py
```

Run this if you need to regenerate mirrors without a full rebuild.
Requires dist/ to already contain pre-rendered HTML from a previous build.

## Manual llms.txt update
```
python scripts/update_llms_mirrors.py
```

Run this to sync the Markdown Mirrors URL list in public/llms.txt with
whatever index.md files currently exist in dist/. Falls back to the
hardcoded known-routes list if dist/ has no .md files yet.

## Dependencies
```
pip install beautifulsoup4 markdownify
```

Both packages are required by generate_markdown_mirrors.py only.
update_llms_mirrors.py uses stdlib only.
