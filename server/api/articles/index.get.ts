interface ArticleAttributes {
  date: string | Date
}

// Every published article, newest first
export default defineEventHandler(async () => {
  const articles = await listEntries<ArticleAttributes>('articles')
  return articles
    .map((a) => ({ ...a, date: toISODate(a.date) }))
    .sort((a, b) => b.date.localeCompare(a.date))
})
