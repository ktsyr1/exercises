var add = [
    "Qotaiba","mohammad","ali"
]; 
var adc = [
    "Qotaiba 3","noor 3","alaa 3"
];
document.getElementById("all")
  .innerHTML = "name ["+ add+"]";
function sff(){ 
  var sf = add.lastIndexOf(prompt() );
   
  if (add[sf]){
    document.getElementById("it")
    .innerHTML = sf;
    document.getElementById("iy")
    .innerHTML = add[sf];
}  
   }
 
  