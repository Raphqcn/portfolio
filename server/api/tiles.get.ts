import yaml from 'js-yaml'

export default eventHandler(async (event) => {
    const content = await useStorage('assets:server:yamlContent').getItem('pages/index/tiles.yml')
    
    return yaml.load(content as string)
})