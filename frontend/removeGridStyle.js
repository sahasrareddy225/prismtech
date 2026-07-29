const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDir = path.join(__dirname, 'src');

const regex = /<div style=\{\{\s*position:\s*'absolute',\s*inset:\s*0,\s*backgroundImage:\s*'linear-gradient\(rgba\(255,255,255,0\.0(?:18|25)\)\s*1px,\s*transparent\s*1px\),\s*linear-gradient\(90deg,\s*rgba\(255,255,255,0\.0(?:18|25)\)\s*1px,\s*transparent\s*1px\)',\s*backgroundSize:\s*'52px\s*52px'\s*\}\}\s*\/>\s*/g;

let count = 0;

walkDir(targetDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    const originalContent = fs.readFileSync(filePath, 'utf8');
    const newContent = originalContent.replace(regex, '');
    if (originalContent !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Removed grid from:', filePath);
      count++;
    }
  } else if (filePath.endsWith('globals.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove grid-pattern
    content = content.replace(/\.grid-pattern\s*\{[\s\S]*?\}\s*/g, '');
    // Remove dot-pattern
    content = content.replace(/\.dot-pattern\s*\{[\s\S]*?\}\s*/g, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Removed patterns from globals.css');
  }
});

console.log('Total files modified:', count);
