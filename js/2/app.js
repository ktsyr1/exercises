var Cfull = (2.28 +
    2.07 +
    3.27 +
    6.24 +
    7.28 +
    7.04 +
    7.47 +
    3.17
    + 10.51
    + 4.33
    + 4.26
    + 5.14
    + 4.25
    + 4.57
    + 6.16 +
    7.31
    + 5.22 +
    25.08
);
function CfullT() {
    const s = " ساعة", b = "باقي لنهاية الكورس ";
    var v = Cfull,
        v = document.write(
            b + Math.floor(v / 60) + '.' +
            Math.floor(v % 60) + s);
};
CfullT();

