const net = require('net');
var server = net.createServer((socket) => {
    socket.end('vns divb dssn snoslns od nodnd n : ');
}).on('error', (err) => {
    throw err;
});
server.listen(() => {
    address = server.address();
    console.log('listening on port : ',address);
    
})