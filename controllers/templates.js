import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class TemplatesService {
  constructor() {
  }


  // charge les templates depuis le fichier JSON    
  /**
   * Charge les templates depuis le fichier JSON
   * @returns {Array} Les templates chargés
   */
  _loadTemplates() {
    return JSON.parse(
      fs.readFileSync(
        path.join(__dirname, '../models/templates.json'),
        'utf8'
      )
    );
  }

  /**
   * Crée les noms de fichiers pour un template
   * @private
   * @param {Object} template - Le template
   * @param {string} templateName - Le nom du template
   * @returns {Object} Les noms des fichiers
   */
  _createTemplateFiles(template, templateName) {
    return {
      txt: `${template.title}.txt`,
      initial: `${templateName}-initial.hbs`,
      viewer: `${templateName}-viewer.hbs`
      // ,
      // help: `${templateName}-help.hbs`
    };
  }

  /**
   * Récupère toutes les informations d'un template
   * @param {string} templateName - Le nom du template à récupérer
   * @returns {Object} Les informations du template
   */
  getTemplateInfo(templateName) {

    // recharger les templates
    const templates = this._loadTemplates();

    // Recherche le template dans le tableau templates
    const template = templates.find(t => t.name === templateName);

    // Vérifie si le template existe
    if (!template) {
      throw new Error(`Template ${templateName} non trouvé`);
    }

    // Retourne l'objet complet avec toutes les informations
    return {
      ...template,
      files: this._createTemplateFiles(template, templateName)
    };
  }

  /**
   * Récupère tous les templates disponibles
   * @returns {Array} Un tableau contenant tous les templates avec leurs informations
   */
  getTemplates() {

    // recharger les templates
    const templates = this._loadTemplates();

    return templates.map(template => ({
      ...template,
      files: this._createTemplateFiles(template, template.name)
    }));
  }

  /**
   * Enregistre un template dans le fichier templates.json
   * @param {Object} template - Le template à enregistrer
   */
  saveTemplate(template) {

    // recharger les templates
    const templates = this._loadTemplates();

    // Vérifie si le template existe déjà
    const existingTemplate = templates.find(t => t.name === template.name);
    if (existingTemplate) {
      // Si le template existe, on le met à jour
      Object.assign(existingTemplate, template);
    } else {
      // Si le template n'existe pas, on l'ajoute
      templates.push(template);
    }
    // Enregistre le fichier templates.json
    fs.writeFileSync(
      path.join(__dirname, '../models/templates.json'),
      JSON.stringify(templates, null, 2)
    );
  }

  /**
   * Récupère le contenu du fichier help d'un template
   * @param {string} templateName - Le nom du template à récupérer
   * @returns {string|null} Le contenu du fichier help ou null si le fichier n'existe pas
   */
  // getHelpContent(templateName) {
  //   try {
  //     // récupère les informations du template
  //     const template = this.getTemplateInfo(templateName);
  //     if (!template) {
  //       throw new Error(`Template ${templateName} non trouvé`);
  //     }

  //     // construit le chemin du fichier help
  //     const helpFilePath = path.join(__dirname, '../views/templates/', templateName, template.files.help);
  //     console.log(helpFilePath);


  //     // Vérifie si le fichier d'aide existe
  //     if (!fs.existsSync(helpFilePath)) {
  //       return null;
  //     }

  //     // Retourne le contenu du fichier
  //     return fs.readFileSync(helpFilePath, 'utf8');
  //   } catch (error) {
  //     console.error(`Erreur lors de la lecture du fichier d'aide pour ${templateName}:`, error);
  //     return null;
  //   }
  // }

  /**
   * Incrémente la version patch d'un template
   * @param {string} templateName - Le nom du template à mettre à jour
   * @returns {Object} Le template mis à jour avec la nouvelle version
   */
  incrementBuildVersion(templateName) {
    // recharger les templates
    const templates = this._loadTemplates();

    const template = templates.find(t => t.name === templateName);
    const [major, minor, build] = template.version.split('.').map(Number);

    // Incrémenter le troisième chiffre (build)
    const newVersion = `${major}.${minor}.${build + 1}`;
    template.version = newVersion;

    // Enregistrer le template mis à jour
    this.saveTemplate(template);

    return {
      ...template,
      files: this._createTemplateFiles(template, templateName)
    };

  }

}

export default new TemplatesService(); 