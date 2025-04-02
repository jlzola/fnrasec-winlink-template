import { readdirSync, copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const sourceDir = './dist';
const targetDir = 'C:\\RMS Express\\Global Folders\\Templates\\FNRASEC_TEST\\';

try {
  console.log(`Deploying...`);

  // Vérifier si le répertoire cible existe, sinon le créer
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
    console.log(`Created target directory: ${targetDir}`);
  }

  // Lire les fichiers dans le répertoire source
  const files = readdirSync(sourceDir, { withFileTypes: true });

  files.forEach(file => {
    if (file.isFile()) {
      const sourcePath = join(sourceDir, file.name);
      const targetPath = join(targetDir, file.name);

      copyFileSync(sourcePath, targetPath);
      console.log(`Copied ${file.name} to ${targetPath}`);
    }
  });

  console.log(`Deployed on ${targetDir}.`);
} catch (error) {
  console.error(`Error processing files: ${error.message}`);
}