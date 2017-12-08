const http = require('http');

const scraping = require('./routes/scraping');

http.createServer((req, res) => {
  if (req.url.match(/\.(html|css|js|png)$/)) {
    console.log('file')
  } else if (req.url === '/') {
    console.log('main')
  } else if (req.url.startsWith('/parse')) {
    scraping(req, res);
  } else {
    console.log('404')
  }
}).listen(3002, () => console.log('Server start'));