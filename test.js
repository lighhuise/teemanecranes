const https = require('https');
https.get('https://teemanecranes.test', { rejectUnauthorized: false }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/data-page="([^"]+)"/);
    if(match) {
        const decoded = match[1].replace(/&quot;/g, '"');
        console.log(decoded);
    }
  });
});
