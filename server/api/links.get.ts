import yaml from 'js-yaml'

export default defineEventHandler(async (event) => {
    const content = await useStorage('assets:server:yamlContent').getItem('links.yml')
    
    return yaml.load(content as string)
})