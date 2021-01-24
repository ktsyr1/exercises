
var ktsyri = {
  ktsyr1:"app 1",
  ktsyr2:"app 2",
  ktsyr3:"app 3",
}
localStorage.setItem("ktsyr1","app 12")
localStorage.setItem("ktsyr2","app 13")
localStorage.setItem("ktsyr3",JSON.stringify(ktsyri))
document.getElementById('home').innerHTML= localStorage.getItem("ktsyr3")
console.log(JSON.parse(localStorage.getItem("ktsyr3")));
if (localStorage.length < 0 ) { console.log(localStorage.length)}

localStorage.clear()
if (localStorage.length > 0 )  {console.log('no data')}

