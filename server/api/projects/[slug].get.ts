interface ProjectAttributes {
  title: string
  order?: number
}

// One project + the next one (for the "Next project" link)
export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug') ?? ''
  const project = await getEntry<ProjectAttributes>('projects', slug)

  if (!project) {
    throw createError({ statusCode: 404, statusMessage: `Project "${slug}" not found.` })
  }

  const all = (await listEntries<ProjectAttributes>('projects')).sort(
    (a, b) => (a.order ?? 99) - (b.order ?? 99),
  )
  const index = all.findIndex((p) => p.slug === slug)
  const next = all.length > 1 ? all[(index + 1) % all.length] : null

  return { ...project, next: next ? { slug: next.slug, title: next.title } : null }
})
