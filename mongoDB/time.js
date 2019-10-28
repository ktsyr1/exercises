let Cfull = (   
6.22 +
8.50 +
4.42 +
13.39 +
11.15 +
8.19 +
7.12 +
12.23 +
3.40 +
7.22 + 
4.06   
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