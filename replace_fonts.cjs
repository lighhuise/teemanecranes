const fs = require("fs");
const path = require("path");

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir("./resources/js", function(filePath) {
    if (filePath.endsWith(".tsx") || filePath.endsWith(".ts")) {
        let content = fs.readFileSync(filePath, "utf8");
        let originalContent = content;

        // Replace `font-black tracking-tighter` or `font-black tracking-tight`
        content = content.replace(/font-black\s+tracking-tight(er)?/g, "font-bold tracking-wider");
        content = content.replace(/prose-headings:font-black\s+prose-headings:tracking-tight(er)?/g, "prose-headings:font-bold prose-headings:tracking-wider");

        // Replace `font-black uppercase`
        content = content.replace(/font-black(\s+uppercase)/g, "font-bold$1 tracking-wider");

        // Replace lone font-black text-foreground
        content = content.replace(/font-black\s+text-foreground/g, "font-bold tracking-wider text-foreground");
        
        // As a catchall for any remaining font-black in headings or floating stats
        content = content.replace(/text-3xl font-black/g, "text-3xl font-bold tracking-wider");
        content = content.replace(/text-4xl lg:text-6xl font-black/g, "text-4xl lg:text-6xl font-bold tracking-wider");
        content = content.replace(/font-black/g, "font-bold");

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, "utf8");
            console.log(`Updated ${filePath}`);
        }
    }
});
