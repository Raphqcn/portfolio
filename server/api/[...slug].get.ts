import yaml from 'js-yaml'

export default defineEventHandler(async (event) => {
    const slug = getRouterParam(event, 'slug')

    if (!slug) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Slug missing.'
        })
    }

    const content = useStorage('assets:server')

    const file = await content.getItem(`${slug}.yml`)

    if (!file) {
        throw createError({
            statusCode: 404,
            statusMessage: `File "${slug}.yml" not found.`
        })
    }

    const data = yaml.load(file as string)

    return data
})