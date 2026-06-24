import yaml from 'js-yaml'

export default defineEventHandler(async (event) => {
    const content = await useStorage('assets:server').getItem('pages/index/tiles.yml')
    return yaml.load(content as string)
})
