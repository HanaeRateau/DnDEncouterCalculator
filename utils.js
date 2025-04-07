const XPthresholds = [[25, 50, 75, 100,], [50, 100, 150, 200,], [75, 150, 225, 400,], [125, 250, 375, 500,], [250, 500, 750, 1100,], [300, 600, 900, 1400,], [350, 750, 1100, 1700,], [450, 900, 1400, 2100,], [550, 1100, 1600, 2400,], [600, 1200, 1900, 2800,], [800, 1600, 2400, 3600,], [1000, 2000, 3000, 4500,], [1100, 2200, 3400, 5100,], [1250, 2500, 3800, 5700,], [1400, 2800, 4300, 6400,], [1600, 3200, 4800, 7200,], [2000, 3900, 5900, 8800,], [2100, 4200, 6300, 9500,], [2400, 4900, 7300, 10900,], [2800, 5700, 8500, 12700,],];
const monstersCRtoXP = {
"0":10,
"1/8":25,
"1/4":50,
"1/2":100,
"1":200,
"2":450,
"3":700,
"4":1100,
"5":1800,
"6":2300,
"7":2900,
"8":3900,
"9":5000,
"10":5900,
"11":7200,
"12":8400,
"13":10000,
"14":11500,
"15":13000,
"16":15000,
"17":18000,
"18":20000,
"19":22000,
"20":25000,
"21":33000,
"22":41000,
"23":50000,
"24":62000,
"25":75000,
"26":90000,
"27":105000,
"28":120000,
"29":135000,
"30":155000,
};

function getXP(cr){
    if (monstersCRtoXP[cr] !== undefined) return monstersCRtoXP[cr];
    return 0;
}


function getMultiplier(numberOfMonsters){
    if (numberOfMonsters <= 1) return 1;
    if (numberOfMonsters > 1 && numberOfMonsters < 3) return 1.5;
    if (numberOfMonsters > 2 && numberOfMonsters < 7) return 2;
    if (numberOfMonsters > 6 && numberOfMonsters < 11) return 2.5;
    if (numberOfMonsters > 10 && numberOfMonsters < 15) return 3;
    if (numberOfMonsters >= 15) return 4;
}

 function getThresholds(partyAvgLevel){
    console.log(partyAvgLevel);
    return XPthresholds[partyAvgLevel - 1] || XPthresholds[0];
 }

 function getCRList(maxChallengeRating){
    // CR list can only contain integers from 0 to 30 with 0.125, 0.25 and 0.5
    let CRList = [];
    const CRListDecimals = [0, 0.125, 0.25, 0.5];
    for(let i=0; i<CRListDecimals.length; i++){
        if(CRListDecimals[i] > maxChallengeRating) break;
        CRList.push(CRListDecimals[i]);
    }
    for (let i = 1; i <= maxChallengeRating; i++){
        CRList.push(i);
    }
    return CRList;
 }