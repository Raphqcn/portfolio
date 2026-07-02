import yaml from 'js-yaml'

export default defineEventHandler(async (event) => {
    const content = useStorage('assets:server')
    const file = await content.getItem('ui/header.yml')

    if (!file) {
        throw createError({
            statusCode: 404,
            statusMessage: 'File not found'
        })
    }

    const data = yaml.load(file as string)
    return data
})