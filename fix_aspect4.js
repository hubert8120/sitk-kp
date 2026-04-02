const fs = require('fs');
const path = require('path');

const imgDims = {
  'heroAbout': ['1920', '1080'],
  'aboutJourney': ['1024', '768'],
  'aboutOffice': ['1920', '1080'],
  'heroNews': ['1920', '1080'],
  'heroMembership': ['1920', '1080'],
  'heroServices': ['1920', '768'],
  'heroTraining': ['1920', '768'],
  'sitkLogo': ['604', '615'],
  'constructionImage': ['1024', '672'],
  // project items etc. might use strings
  'forum1': ['1920', '1080'],
  'forumMain': ['1920', '1080'],
  'makroregionMain': ['1920', '1080'],
  'makroregionDay1': ['1024', '1024'],
  'makroregionDay2': ['1024', '1024'],
  'makroregionDay3': ['1024', '1024'],
  'makroregionKarykatury': ['1024', '1024'],
  'forumProgramDay1': ['1024', '1024'],
  'forumProgramDay2': ['1024', '1024'],
  'forumProgramDay3': ['1024', '1024'],
  'viennaSchoenbrunn': ['1024', '1024'],
  'viennaChurch': ['1024', '1024'],
  'parisVersailles': ['1024', '1024'],
  'parisMontmartre': ['1024', '1024'],
  'forumPoster': ['1024', '1024'],
  'bridgeProject': ['1024', '1024'],
  'constructionWork': ['1024', '1024'],
  'engineeringInfrastructure': ['1024', '768'],
  'teamMeeting': ['1024', '768'],
  'aboutTeamPlanning': ['1024', '1024'],
  'aboutEngineersDiscussion': ['1024', '672'],
  'heroHighway': ['1920', '1080']
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      for (const [varName, [w, h]] of Object.entries(imgDims)) {
        const searchStr = `src={${varName}}`;
        if (content.includes(searchStr) && !content.includes(`width={${w}}`)) {
          content = content.replace(searchStr, `src={${varName}} width={${w}} height={${h}}`);
          console.log(`Updated ${fullPath} for ${varName}`);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

processDir('src');
