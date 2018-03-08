const http = require('http')
const fs = require('fs')
const port = 3000

const indexFile = fs.readFileSync('index.html', 'utf8');

let jsFile = fs.readFileSync('index.js', 'utf8');

const requestHandler = (request, response) => {
  console.log(request.url)
  if (request.url === '/index.js') {
    return response.end(jsFile);
  }
  return response.end(indexFile);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});

fs.watch('index.js', { encoding: 'buffer' }, (eventType, filename) => {
  jsFile = fs.readFileSync('index.js', 'utf8');
});
