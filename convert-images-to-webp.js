import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, 'public', 'images');
const QUALITY = 60; // Adjust as needed

function getAllImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImageFiles(filePath));
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      results.push(filePath);
    }
  });
  return results;
}

async function convertToWebP(file) {
  const outFile = file.replace(/\.(jpe?g|png)$/i, '.webp');
  if (fs.existsSync(outFile)) {
    console.log(`Skipping (already exists): ${outFile}`);
    return;
  }
  try {
    await sharp(file).webp({ quality: QUALITY }).toFile(outFile);
    console.log(`Converted: ${file} → ${outFile}`);
  } catch (err) {
    console.error(`Error converting ${file}:`, err);
  }
}

async function main() {
  const files = getAllImageFiles(IMAGES_DIR);
  for (const file of files) {
    await convertToWebP(file);
  }
  console.log('Done!');
}

main();
