const content = `import heroAbout from "@/assets/hero-about.jpg";

                <img loading="lazy"
                  src={heroAbout} srcSet={\`\${heroAbout} 1x, \${heroAbout} 2x\`}
                  alt="Historia"
                  className="w-full"
                />`;

const importRegex = /import\s+(\w+)\s+from\s+['"].*?assets\/([^'"]+)['"]/g;
const importMap = {};
let match;
while ((match = importRegex.exec(content)) !== null) {
  importMap[match[1]] = match[2];
}
console.log('importMap:', importMap);

const imgRegex = /<img\b([^>]+)>/g;
let newContent = content.replace(imgRegex, (fullTag, attrs) => {
  console.log('Found img!', attrs);
  if (/\b(?:width|height)=/.test(attrs)) {
    console.log('already has width or height');
    return fullTag;
  }
  
  const srcVarMatch = attrs.match(/src=\{([^}]+)\}/);
  if (srcVarMatch) {
    console.log('srcVarMatch:', srcVarMatch[1]);
  }
  return fullTag;
});
