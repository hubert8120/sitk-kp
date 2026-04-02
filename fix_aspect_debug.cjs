const fs = require('fs');
const path = require('path');
function processDir(dir) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const imgRegex = /<img([^>]+)>/g;
      
      let match;
      while ((match = imgRegex.exec(content)) !== null) {
        console.log(`Found img in ${fullPath}: ${match[1]}`);
      }
    }
  }
}
processDir('src');
