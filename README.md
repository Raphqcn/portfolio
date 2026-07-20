# Portfolio

> ⚠️ **Projet en cours de développement (WIP)** — Des fonctionnalités, ajustements visuels et contenus sont régulièrement ajoutés.

Un portfolio moderne, minimaliste et 100% responsive, conçu pour présenter mes projets et expérimentations. Le contenu est piloté de manière dynamique par des fichiers **YAML**, ce qui permet d'ajouter ou modifier des projets facilement.

---

## ✨ Fonctionnalités

- **📱 Fully Responsive :** Interface fluide adaptée à tous les écrans (mobile, tablette, desktop).
- **🗂️ Contenu piloté par YAML :** Données des projets centralisées en YAML et chargées via API/Server routes.
- **🏷️ Filtrage dynamique :** Tri des projets par catégories.
- **🎨 UI Moderne :** Glassmorphism, animations fluides, badges de stacks

---

## 🛠️ Tech Stack

### Core
- **Framework :** [Nuxt 4](https://nuxt.com/) (`v4.4`) & [Vue 3](https://vuejs.org/) (`v3.5`)
- **Langage :** [TypeScript](https://www.typescriptlang.org/)

### Style & UI
- **CSS Framework :** [Tailwind CSS v4](https://tailwindcss.com/) & `@tailwindcss/vite`
- **Gestion des classes :** `clsx` & `tailwind-merge`

### Écosystème Nuxt & Modules
- `@nuxt/icon` (Packs `Lucide` & `Simple Icons`), `@nuxt/image` & `@nuxt/fonts`

---

## 📁 Structure du Projet

```text
├── app/                  # Application Nuxt (Frontend)
│   ├── assets/           # Composables & fichiers CSS
│   ├── components/       # Composants Vue organisés par domaines (index, ui, work)
│   ├── layouts/          # Layouts globaux
│   ├── pages/            # Routes principales (articles, index.vue, work.vue)
│   ├── types/            # Déclarations & interfaces TypeScript
│   ├── utils/            # Utilitaires globaux en auto-import (cn.ts)
│   ├── app.vue           # Composant racine
│   └── error.vue         # Page d'erreur
├── public/               # Assets statiques
└── server/               # Backend & APIs Nuxt
    ├── api/              # Routes d'API internes
    └── assets/           # Fichiers de données YAML (pages/work, blog, ui, links.yml)
