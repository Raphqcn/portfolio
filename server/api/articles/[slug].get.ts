interface ArticleAttributes {
  date: string | Date
}

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug') ?? ''
  const article = await getEntry<ArticleAttributes>('articles', slug)

  if (!article) {
    throw createError({ statusCode: 404, statusMessage: `Article "${slug}" not found.` })
  }

  return { ...article, date: toISODate(article.date) }
})
