var Cfull = (  
12.02+
12.22+
5.36+
6.57+
5.55+
4.43+
5.27+
9.22+
12.31+
5.54+
15.24+
14.02+
2.15 
);
function CfullT() {
    const s = " ساعة", b = "باقي لنهاية الكورس ";
    var v = Cfull;
        v = document.write(
 b + Math.floor(v / 60) + '.' +
 Math.floor(v % 60) + s);
 console.log(v);
 
};
CfullT(); 