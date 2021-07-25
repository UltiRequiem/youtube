const fs = require("fs").promises;

async function getTotalFiles(dirPromise) {
  const files = await dirPromise;
  return files.length;
}

async function printFiles() {
  const totalFiles = await getTotalFiles(fs.readdir(process.cwd()));
  console.log(`En este directorio hay ${totalFiles} archivos.`);
}

printFiles()
