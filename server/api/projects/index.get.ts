interface ProjectAttributes {
  order?: number
}

// Every project, sorted by its "order" field
export default defineEventHandler(async () => {
  const projects = await listEntries<ProjectAttributes>('projects')
  return projects.sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
})
