const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getDims(filepath) {
  try {
    const out = execSync(`sips -g pixelWidth -g pixelHeight "${filepath}"`, { encoding: 'utf8' });
    const wMatch = out.match(/pixelWidth:\s*(\d+)/);
    const hMatch = out.match(/pixelHeight:\s*(\d+)/);
    if (wMatch && hMatch) return { w: wMatch[1], h: hMatch[1] };
  } catch (e) {}
  return null;
}

const fileMap = {};
for (const file of fs.readdirSync('src/assets')) {
  if (['.jpg', '.png', '.jpeg'].some(ext => file.endsWith(ext))) {
    const dims = getDims(path.join('src/assets', file));
    if (dims) fileMap[file] = dims;
  }
}

function processDir(dir) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const importMap = {};
      const importRegex = /import\s+(\w+)\s+from\s+['"].*?assets\/([^'"]+)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        importMap[match[1]] = match[2];
      }

      let newContent = content;
      const imgRegex = /<img([^>]+)>/g;
      
      newContent = newContent.replace(imgRegex, (fullTag, attrs) => {
        let width = null, height = null;
        
        const srcVarMatch = attrs.match(/src=\{([^}]+)\}/);
        
        if (srcVarMatch) {
          const varName = srcVarMatch[1];
          if (importMap[varName] && fileMap[importMap[varName]]) {
            ({w: width, h: height} = fileMap[importMap[varName]]);
          }
        } 
        
        if (width && height && !/\bwidth=/.test(attrs)) {
          console.log(`Adding width=${width} height=${height} to img in ${fullPath}`);
          return fullTag.replace('<img', `<img width={${width}} height={${height}}`);
        }
        
        return fullTag;
      });

      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

processDir('src');
