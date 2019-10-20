
// ------------------------- crypto
// const crypto = require('crypto');
// const secret = 'ktsyr1';
// const hash = crypto.createHmac('sha256', secret)
//     .update('my app nodeJS').digest('hex');
// console.log(hash);

const crypto = require('crypto');
const cipher = crypto.createCipheriv("aes192", 'ktsyr1');
var encrypted = cipher.update("my app nodeJS", 'utf8', 'hax');
encrypted += cipher.final('hex');
console.log(encrypted);

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
