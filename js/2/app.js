var Cfull = (


    11.24 + 9.58 + 8.44 + 20.39 + 7.27 +
    8.45 + 17.09 + 7.33 + 8.00 + 5.39 +
    8.22 + 14.49 + 4.17 + 7.28 + 6.14 +
    6.37 + 6.01 + 14.03 + 11.27 + 5.39 +
    10.55 + 12.05 + 4.38 + 2.39 + 2.08

);
function CfullT() {
    var v = Cfull,
        v1 = Math.floor(v / 60),
        v2 = v % 60,
        v3 = Math.floor(v % 60)
    v4 = v3 - v2;
    var v5 = v4.toString().slice(3, 5),
        v6 = v1 + "." + v3 + "." + v5;
    document.write("باقي لنهاية الكورس  . " + v6);
     
};

CfullT();

