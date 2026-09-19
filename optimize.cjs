const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) { 
        results = results.concat(walk(file));
      } else if (file.match(/\.(png|jpe?g|webp)$/i)) { 
        results.push(file);
      }
    });
    return results;
  }
  
  const images = [...walk('public/storage'), ...walk('resources/images')];
  
  for (let imgPath of images) {
    try {
        const fileBuffer = fs.readFileSync(imgPath);
        const metadata = await sharp(fileBuffer).metadata();
        const stat = fs.statSync(imgPath);
        
        if (metadata.width > 1920 || metadata.height > 1920 || stat.size > 1024 * 1024) {
            console.log(`Optimizing: ${imgPath} (${metadata.width}x${metadata.height}, ${(stat.size/1024/1024).toFixed(2)}MB)`);
            
            let pipeline = sharp(fileBuffer);
            
            if (metadata.width > 1920 || metadata.height > 1920) {
                pipeline = pipeline.resize({
                    width: 1920,
                    height: 1920,
                    fit: 'inside',
                    withoutEnlargement: true
                });
            }
            
            if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
                pipeline = pipeline.jpeg({ quality: 80 });
            } else if (metadata.format === 'png') {
                pipeline = pipeline.png({ compressionLevel: 8 });
            } else if (metadata.format === 'webp') {
                pipeline = pipeline.webp({ quality: 80 });
            }
            
            const newBuffer = await pipeline.toBuffer();
            fs.writeFileSync(imgPath, newBuffer);
            
            const newStat = fs.statSync(imgPath);
            console.log(` -> Done. New size: ${(newStat.size/1024/1024).toFixed(2)}MB`);
        }
    } catch (e) {
        console.error(`Failed to process ${imgPath}:`, e.message);
    }
  }
}

optimizeImages();
