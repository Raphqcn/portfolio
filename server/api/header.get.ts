import yaml from 'js-yaml'

export default defineEventHandler(async (event) => {
    try {
        const content = await useStorage('assets:server:yamlContent').getItem('pages/index/hero.yml')
        
        // 🚨 SÉCURITÉ : Si le fichier n'est pas trouvé, on ne l'envoie pas à js-yaml
        if (!content) {
            console.error("Le fichier YAML est introuvable !");
            // On renvoie un objet de secours pour éviter que le site crash
            return { 
                title: "En développement (Fallback)", 
                link: "https://github.com/ton-profil" 
            }
        }
    
        return yaml.load(content as string)

    } catch (error) {
        // En cas de gros bug, on renvoie aussi un objet plutôt que de faire planter Nuxt
        return { title: "Erreur de chargement", link: "https://github.com" }
    }
})
