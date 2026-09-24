const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, 'public/img/properties'),
  path.join(__dirname, 'public/img/team'),
  path.join(__dirname, 'public/img/brand'),
];

const maxWidth = 1600;
const quality = 75;

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const tempPath = filePath + '.tmp';
  const originalSize = fs.statSync(filePath).size;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth });
    }

    if (ext === '.png') {
      await pipeline.png({ quality, compressionLevel: 9 }).toFile(tempPath);
    } else {
      await pipeline.jpeg({ quality, mozjpeg: true }).toFile(tempPath);
    }

    const newSize = fs.statSync(tempPath).size;
    fs.renameSync(tempPath, filePath);

    console.log(
      `${path.basename(filePath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB`
    );
  } catch (err) {
    console.error(`Failed on ${filePath}:`, err.message);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

async function run() {
  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      await compressImage(path.join(dir, file));
    }
  }
  console.log('Done!');
}

run();
