# Maxi Concour

Documentation de mon projet.

## Structure du projet
NODEJSX/
|-- .next/              # Dossier généré par Next.js (à ne pas versionner)
|-- node_modules/       # Dossier node_modules (à ne pas versionner)
|-- public/             # Dossier pour les fichiers statiques (images, etc.)
|-- server/             # Dossier pour le backend (Express.js)
|   |-- config/         # Configuration du serveur
|   |-- controllers/    # Logique métier (gestion des requêtes, etc.)
|   |-- models/         # Modèles de données (interaction avec la base de données)
|   |-- routes/         # Définition des routes Express.js
|   |-- services/       # Services utilitaires (par exemple, services d'authentification)
|   |-- server.js       # Fichier principal du serveur Express.js
|-- src/                # Dossier pour le frontend (Next.js)
|   |-- components/     # Composants réutilisables
|   |-- pages/          # Pages Next.js
|   |-- public/         # Fichiers publics spécifiques au frontend
|   |-- styles/         # Feuilles de style (CSS, SCSS, etc.)
|   |-- utils/          # Utilitaires frontend
|   |-- .env.local      # Variables d'environnement pour le frontend
|-- .env                # Variables d'environnement pour le backend
|-- .gitignore          # Fichier d'ignorance pour Git
|-- next.config.js      # Configuration spécifique à Next.js
|-- package.json        # Fichier de configuration npm
|-- README.md           # Documentation de projet

## package.json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next build && next export",
    "start": "concurrently \"npm:server\" \"npm:frontend\"",
    "server": "cd server && npm start",
    "frontend": "cd src/pages && npm run dev",
    "sass": "sass --watch ./public/scss/style.scss ./public/css/style.css --source-map"
  },