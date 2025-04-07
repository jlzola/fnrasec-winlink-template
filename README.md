# Modèles Winlink pour FNRASEC

![Badge de Statut](https://img.shields.io/badge/statut-en%20d%C3%A9veloppement-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

LEs modèles de formulaire FNRAEC pour Winlink + VARA.

## 📋 Table des matières

- [Fonctionnalités](#%E2%9C%A8-fonctionnalit%C3%A9s)
- [Prérequis](#%F0%9F%94%A7-pr%C3%A9requis)
- [Installation](#%F0%9F%9A%80-installation)
- [Utilisation](#%F0%9F%92%BB-utilisation)
- [Structure du Projet](#%F0%9F%93%82-structure-du-projet)
- [Contribuer](#%F0%9F%A4%9D-contribuer)
- [Licence](#%F0%9F%93%84-licence)
- [Contact](#%F0%9F%93%A7-contact)

## ✨ Fonctionnalités

- Formulaire "Message Exercice" 
- Formulaire "Message de commandement" 
- Formulaire "Etat des Réseaux"  (à venir)
- Formualire "Accusé de Réception"

## 🔧 Prérequis

- Node.js v22.14.0
- inliner 1.13.1 : pour la construction d'une page html sans dépendance : pas d'image ni aucun autre fichier. tout est inclus dans le fichir html.   Voir http://github.com/remy/inliner/
- dotenv
- express
- express-handlebars


## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/jlzola/fnrasec-winlink-template.git

# Installer les dépendances
npm install

# installer inliner
npm install -g inliner

# Lancer le serveur
npm start
```

## 💻 Utilisation

> ⚠️ ATTENTION : Pensez à lancer l'application avant d'exécuter la commande.

```bash
# Build avec inliner
npm run build

# Deploiement 
# Permet de copier les fichiers de ./dist vers C:\RMS Express\Global Folders\Templates\FNRASEC_TEST\
npm run deploy
```

## 📂 Structure du Projet

```
/fnrasec-winlink-template
├───config
├───controllers
├───dist
├───models
├───node_modules
├───public
│   ├───css
│   ├───img
│   └───js
├───routes
├───src
└───views
    ├───errors
    ├───layouts
    ├───partials
    └───templates
```

## 🤝 Contribuer

1. Cloner le projet
2. Créer une branche (`git checkout -b feature/ma-nouvelle-fonctionnalité`)
3. Committer les changements (`git commit -am 'Ajout d'une super fonctionnalité'`)
4. Pousser la branche (`git push origin feature/ma-nouvelle-fonctionnalité`)
5. Ouvrir une Pull Request


## 📄 Licence

Distribué sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📧 Contact

- F1COB Jean-Michel - [https://qrz.com/db/f1cob](https://qrz.com/db/f1cob) 
- F4IXH Jean-Louis - [https://qrz.com/db/f4ixh](https://qrz.com/db/f4ixh)


