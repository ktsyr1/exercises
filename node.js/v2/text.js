 
// -------------------------  Stream file system
// -------------------------  Stream file system
// -------------------------   Sync file system
const fs = require('fs'); 
// fs.open('res/input.txt','r+',(err,fd)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log('true code'); 
// })
fs.stat('res/input.txt','r+',(err,stats)=>{
    if(err){
        console.error(err);
    }
    console.log(stats); 
    console.log(stats.isFile());
    
})
// -------------------------  Sync file system
// //  const fs = require('fs'); 
// fs.readFile('res/input.txt',(err,data)=>{
// if(err){
//     return console.error(err);
// }
// console.log('as . read '+ data.toString());
// })
// const data = fs.readFileSync('res/input.txt');
// console.log('s . read '+ data.toString());

// -------------------------  zlib file system
//  const fs = require('fs'); 
// const zlib = require('zlib'); 
// const rs = fs.createReadStream('res/input1.txt');// ------  API Pipe file system  
// const ws = fs.createWriteStream('data/output1.txt');
// rs.pipe(ws);
// fs.createReadStream('data/output1.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('data/output1.txt.gz')); 
// fs.createReadStream('data/output1.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('data/output2.txt'));

// -------------------------  Stream file system
// const fs = require('fs');
// var data = 'ktsyr1 2345 app';
// var ws = fs.createWriteStream('res/output.txt');
// ws.write(data,'UTF8');
// ws.end();
// ws.on('finish',()=> { 
// console.log('app done ! :)');
// });
 

// ws.on('error',function(err) {
//     console.log(err.stack);
// });
// console.log('app finish');
// ------------------------- File System
// const fs = require('fs');
// var data = '';
// var rs = fs.createReadStream('res/input.txt');
// rs.setEncoding('UTF8');
// rs.on('data',function(chunk) {
//     data +=chunk;
// });

// rs.on('end',function() {
//     console.log(data);
    
// });

// rs.on('error',function(err) {
//     console.log(err.stack);
// });
// console.log('app finish');

// fs.rename('res/output1.txt', 'res/output2.txt', (err) => {
//     if (err) throw err;
//   });
//   fs.unlink( 'data/output2.txt', (err) => {
//     if (err) throw err;
//   });


// ------------------------- Buffer
// const buf = Buffer.alloc(26);
// for (var x = 0; x > 26; x++) {
//     buf[x] = x + 100;
// }
// console.log(buf.toString('utf8', 0, 6));
// console.log(buf.toString('ascii', 0, 6));
// console.log(buf.toString('ascii'));

// ------------------------- process
// console.log(process.arch);
// console.log(process.pid);
// console.log(process.platform);
// console.log(process.version);
// console.log(process.cwd());
// console.log(process.uptime());
// console.log(process.hrtime());
// console.log(process.kill(pid[12, signal]));  
// console.log(`uptime ${process.uptime()}`);
// console.log(`hrtime ${process.hrtime()}`);
// process.argv.forEach((value, index, array) => {
//     console.log(`${index} : ${value}`);

// })
// ------------------------- crypto
// const crypto = require('crypto');
// const secret = 'ktsyr1';
// const hash = crypto.createHmac('sha256', secret)
//     .update('my app nodeJS').digest('hex');
// console.log(hash);


// ------------------------- dns
// const dns = require('dns');
// dns.lookup('pesktop.com',(err,addresses,family)=>{
//     console.log('addresses: ',addresses);
//     console.log('family: ',family);
// })
// const dns = require('dns');
// dns.resolve4('pesktop.com',(err,addresses)=>{
//     if (err) throw err;

//     console.log(`addresses: ${JSON.stringify(addresses)}`);
//     addresses.forEach((a)=>{
//         dns.reverse(a,(err,hostnames)=>{
//             if (err) {throw err;}
//             console.log(`reverse for ${a}:${JSON.stringify(hostnames)}`);
// })})})
// const dns = require('dns');
// dns.lookupService('pesktop.com',(err,addresses)=>{
// });
// ------------------------- timer
// setInterval(() => {
//     console.log("hi")
// }, 1000)
// var recursive = function () {
//     console.log("ktsyr1");
//     setTimeout(recursive, 1000);
// }
//  function ktsyr1() {
//     console.log("ktsyr1"); 
// }
// var kt =setTimeout(ktsyr1,1000),
//     syr1 =setInterval(ktsyr1,1000);
//     clearTimeout(kt); //يبقى يعمل
//     clearInterval(syr1); // يعمل مرة واحدة
// --------------------------------- OS
// const os = require('os');
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.endianness());
// console.log(os.loadavg());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.tmpdir());
// console.log(os.cpus());
// console.log(os.type());
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.networkInterfaces());  
