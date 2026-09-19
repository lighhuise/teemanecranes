const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('C:/www/clients/teemanecranes/resources/js/pages', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find <Head title=\"...\" /> or <Head title={...} />
    const headRegex = /<Head\s+title=({[^}]+}|"[^"]+"|'[^']+')\s*\/>/;
    const match = content.match(headRegex);
    
    if (match) {
        const titleVal = match[1];
        // Remove <Head title=... />
        content = content.replace(headRegex, '');
        // Inject title= into <AppLayout>
        content = content.replace(/<AppLayout([^>]*)>/, `<AppLayout title=${titleVal}$1>`);
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated ' + filePath);
    }
  }
});
