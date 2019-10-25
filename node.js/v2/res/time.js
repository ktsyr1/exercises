let Cfull = (    
15.24+
14.02+
2.15 
);
function CfullT() {
    const s = " ساعة", b = "باقي لنهاية الكورس ";
    var v = Cfull,
    c = v ;
        v = document.write(
 b + Math.floor(v / 60) + '.' +
 Math.floor(v % 60) + s);
 console.log( b + Math.floor(c / 60) + '.' +
 Math.floor(c % 60) + s);
 
};
CfullT(); 