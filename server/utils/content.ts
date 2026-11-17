import fm from 'front-matter'
import { marked } from 'marked'

// Markdown collections stored in server/assets/<collection>/*.md
// The front matter becomes the metadata, the body is rendered to HTML.

const storage = () => useStorage('assets:server')

const SLUG_RE = /^[a-z0-9-]+$/i

function wordCount(body: string) {
  return body.trim().split(/\s+/).filter(Boolean).length
}

async function readEntry<T extends object>(collection: string, slug: string) {
  if (!SLUG_RE.test(slug)) return null

  const raw = await storage().getItem(`${collection}:${slug}.md`)
  if (!raw) return null

  const { attributes, body } = fm<T & { draft?: boolean }>(String(raw))
  if (attributes.draft) return null

  return {
    ...attributes,
    slug,
    readingTime: Math.max(1, Math.round(wordCount(body) / 200)),
    body,
  }
}

async function slugsOf(collection: string) {
  const keys = await storage().getKeys(collection)
  return keys
    .filter((k) => k.endsWith('.md'))
    .map((k) => k.split(':').pop()!.replace(/\.md$/, ''))
}

/** Metadata of every entry of a collection (no body). */
export async function listEntries<T extends object>(collection: string) {
  const entries = await Promise.all(
    (await slugsOf(collection)).map((slug) => readEntry<T>(collection, slug)),
  )
  return entries
    .filter((e) => e !== null)
    .map(({ body, ...meta }) => meta)
}

/** One entry with its Markdown body rendered to HTML. */
export async function getEntry<T extends object>(collection: string, slug: string) {
  const entry = await readEntry<T>(collection, slug)
  if (!entry) return null

  const { body, ...meta } = entry
  return { ...meta, html: await marked.parse(body) }
}

/** YAML dates come back as Date objects: normalise to "YYYY-MM-DD". */
export function toISODate(date: unknown) {
  return new Date(date as string).toISOString().slice(0, 10)
}
