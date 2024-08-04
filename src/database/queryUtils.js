import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readQueries = (filePath = 'init.sql') => {
  const importPath = path.resolve(__dirname, filePath);
  return fs.readFileSync(importPath).toString();
};

export { readQueries };