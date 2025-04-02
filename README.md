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
- Formulaire "Etat des Réseaux"
- Formualire "Accusé de Réception"

## 🔧 Prérequis

- Node.js v22.14.0
- inliner 1.13.1 : pour la construction d'une page html sans dépendance : pas d'image ni aucun autre fichier. tout est inclus dans le fichir html.   Voir http://github.com/remy/inliner/
- npm
- dotenv
- express
- express-handlebars


## 🚀 Installation

```bash
# Cloner le dépôt
git clone https://github.com/jlzola/fnrasec-winlink-template.git

# Installer les dépendances
npm install

# Lancer le serveur
npm start
```

## 💻 Utilisation

```bash
# Build avec inliner
npm run build

# Deploiement 
npm run deploy
Permet de copier les fichiers de ./dist vers C:\RMS Express\Global Folders\Templates\FNRASEC_TEST\


```

## 📂 Structure du Projet

```
todo
```

## 🤝 Contribuer

1. Forker le projet
2. Créer une branche (`git checkout -b feature/ma-nouvelle-fonctionnalité`)
3. Committer les changements (`git commit -am 'Ajout d'une super fonctionnalité'`)
4. Pousser la branche (`git push origin feature/ma-nouvelle-fonctionnalité`)
5. Ouvrir une Pull Request

## 📄 Licence

Distribué sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📧 Contact

- Jean-Louis Zola - [https://jlz.free.fr](https://jlz.free.fr) - jlz@free.fr

- F4IXH Jean-Louis - [https://qrz.com/db/f4ixh](https://qrz.com/db/f4ixh)
- [FNRASEC Winlink Templates](https://github.com/jlzola/fnrasec-winlink-template)


