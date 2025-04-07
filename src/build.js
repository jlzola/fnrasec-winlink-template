import { execSync } from 'child_process';
import { existsSync, copyFileSync, mkdirSync } from 'fs';
import templatesService from '../controllers/templates.js';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const distDir = './dist';
const baseURL = 'http://localhost:' + process.env.PORT;
console.log(baseURL);
const templatesDir = './views/templates';


try {

  console.log('Pensez à lancer le serveur local avec la commande : "npm start &" avant de lancer le build. (puis fg pour remttre le processus en avant plan)');
  console.log('Building...');

  // Vérifier si le répertoire cible existe, sinon le créer
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true });
    console.log(`dist/ folder created : ${distDir}`);
  }

  // Récupérer les templates
  const templates = templatesService.getTemplates();
  //  console.log(templates);


  // pour chaque template, on va lire les fichiers
  templates.forEach(template => {

    // incrémenter la version
    template = templatesService.incrementBuildVersion(template.name);

    // afficher le nom du template et la version
    console.log(`Build template "${template.name}" version : ${template.version}\n`);

    // création de l'URL du template et dosser destination
    const templateURL = `${baseURL}/FNRASEC_${template.name}`;
    const distPath = `${distDir}/FNRASEC_${template.name}`;

    // inliner le fichier initial    
    const initialHBS = `${templatesDir}/${template.name}/${template.files.initial}`;
    if (existsSync(initialHBS)) {
      const initialURL = `${templateURL}_Initial`;
      const initialDistPath = `${distPath}_Initial.html`;
      const cmd = `inliner ${initialURL} > ${initialDistPath}`;
      console.log('>> ' + cmd);
      execSync(cmd, { stdio: 'inherit' });
    } else {
      console.log(`${initialHBS} not found`);
    }

    // inliner le fichier viewer
    const viewerHBS = `${templatesDir}/${template.name}/${template.files.viewer}`;
    if (existsSync(viewerHBS)) {
      const viewerURL = `${templateURL}_Viewer`;
      const viewerDistPath = `${distPath}_Viewer.html`;
      const cmd = `inliner ${viewerURL} > ${viewerDistPath}`;
      console.log('>> ' + cmd);
      execSync(cmd, { stdio: 'inherit' });
    } else {
      console.log(`${viewerHBS} not found`);
    }

    // copie le fichier txt
    const txtFile = `${templatesDir}/${template.name}/${template.files.txt}`;
    const txtFileVersion = `${distDir}/FNRASEC ${template.title} ${template.version}.txt`;
    if (existsSync(txtFile)) {
      console.log(`Copy ${txtFile} to ${txtFileVersion}`);
      copyFileSync(txtFile, txtFileVersion);
      console.log(`${txtFileVersion} copied.`);
    } else {
      console.log(`${txtFile} not found`);
    }

  });

  console.log(`Builded.`);

} catch (error) {
  console.error(`Error processing files: ${error.message}`);
}

