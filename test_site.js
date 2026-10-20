const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
console.log('index.html size in characters:', html.length);

const startTag = '<script id="catalogData" type="application/json">';
const endTag = '</script>';
const startIdx = html.indexOf(startTag);
const endIdx = html.indexOf(endTag, startIdx);

if (startIdx === -1 || endIdx === -1) {
  console.error('ERROR: JSON script tag not found');
  process.exit(1);
}

const jsonText = html.substring(startIdx + startTag.length, endIdx);
const items = JSON.parse(jsonText);
console.log('Total items in embedded catalog:', items.length);

let missingCount = 0;
items.forEach(it => {
  const p = 'images/' + it.file;
  if (!fs.existsSync(p)) {
    console.error('Missing file:', p);
    missingCount++;
  }
});

console.log('Missing catalog files count:', missingCount);

// Check section images
const staticImages = [
  'images/WhatsApp Image 2026-10-20 at 3.14.50 PM (1).jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.13.49 PM.jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.13.37 PM.jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.14.47 PM (1).jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.14.53 PM (1).jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.13.39 PM.jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.13.42 PM.jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.14.54 PM.jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.13.38 PM.jpeg',
  'images/WhatsApp Video 2026-10-20 at 3.15.04 PM.mp4',
  'images/WhatsApp Image 2026-10-20 at 3.13.40 PM.jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.13.46 PM.jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.14.07 PM.jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.14.39 PM (1).jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.14.56 PM.jpeg',
  'images/WhatsApp Image 2026-10-20 at 3.14.17 PM.jpeg'
];

let missingStatic = 0;
staticImages.forEach(src => {
  if (!fs.existsSync(src)) {
    console.error('Missing static image:', src);
    missingStatic++;
  }
});
console.log('Missing static images count:', missingStatic);
if (missingCount === 0 && missingStatic === 0) {
  console.log('PERFECT! ALL 91 CATALOG IMAGES AND ALL SECTION MEDIA VERIFIED ON DISK!');
} else {
  console.error('Some images are missing!');
  process.exit(1);
}
