import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

export default defineEventHandler(async (event) => {
    const filePath = path.join(process.cwd(), 'content', 'ui', 'header.yml')
    const content = fs.readFileSync(filePath, 'utf-8')
    return yaml.load(content)
})