---
title: "Building this portfolio with Nuxt 4"
description: "Why every page of this site is driven by YAML and Markdown files, and how a tiny Nitro API serves them."
date: 2026-11-17
tags:
  - Nuxt
  - Devlog
thumbnail: ""
draft: false
---

This site is a portfolio and a blog in one place, built with **Nuxt 4**, **Tailwind CSS** and a handful of content files.

## Content first

Nothing is hard-coded in the components. Everything lives in `server/assets`:

- `site.yml` for the identity, stack and contact info
- `projects/*.md` with one case study per project
- `articles/*.md` for articles like this one

## A tiny API

Each Markdown file goes through `front-matter` to extract its metadata, then `marked` turns the body into HTML:

```ts
const { attributes, body } = fm(raw)
return { ...attributes, html: await marked.parse(body) }
```

> Adding a project or an article is just adding a file.

## What's next

More projects, more articles.
