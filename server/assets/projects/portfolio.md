---
title: "This portfolio"
summary: "An editorial portfolio where every page, project and article is a plain YAML or Markdown file."
category: "Web"
year: "2026"
role: "Design and development"
order: 2
thumbnail: ""
link: "/"
source: ""
stack:
  - "Nuxt"
  - "Vue"
  - "TypeScript"
  - "Tailwind CSS"
---

## The idea

A portfolio should be fast to update. Here, nothing is hard-coded in the components: adding a project or an article means adding one file.

## How it works

- `server/assets/site.yml` holds the identity, stack and contact info
- `server/assets/projects/*.md` holds one case study per project
- `server/assets/articles/*.md` holds the articles

A small Nitro API reads these files, `front-matter` extracts their metadata and `marked` renders the Markdown.
