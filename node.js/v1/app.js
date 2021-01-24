const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3003;
function route( page , res) {
    fs.readFile(page,(err , data) => {
    res.statusCode = 200;
     res.setHeader('Content-Type', 'text/html');
     res.write(data)
     res.end();
})}
const server = http.createServer( (req, res) => { 
    page = req.url ;
    switch(page) {
        case '/':
            route('index.html', res) 
            break;
        case '/about':
            route('about.html', res) 
            break;
        default :
                route('index.html', res) 
                break;
    }
    fs.readFile('index.html' , (err , data) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.write('data')
     res.end('sfdf fddsf\n');
    })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});