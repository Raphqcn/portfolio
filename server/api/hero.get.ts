import yaml from 'js-yaml'

export default defineEventHandler(async (event) => {
    const content = await useStorage('assets:server:yamlContent').getItem('pages/index/hero.yml')
    
    return yaml.load(content as string)
})