// Bognár Péter Tamás - Junior Frontend Fejlesztő - #Team12 

function keszito() {
    document.write("<ul><li>Bognár Péter Tamás</li><li>Junior Frontend Fejlesztő</li><li>#Team12</li></ul> ")
}

function hatvanyozo(szam, hatvany) {
    let eredmeny = Math.pow(szam, hatvany);
    //document.write(`A ${szam}<sup>${hatvany}</sup> = ${eredmeny}`);
    return eredmeny;
}

function parosLetrehoz(also, felso) {
    let szamGenerator = Math.round(Math.random() * (felso - also)) + also;
    if (szamGenerator % 2 == 0) {
        szamGenerator;
        return szamGenerator;
    }
    else if (szamGenerator != felso) {
        szamGenerator += 1;
        return szamGenerator;
    }
    else {
        szamGenerator -= 1;
        return szamGenerator;
    }
    //return szamGenerator;
}

function testTomegIndex(testtomeg,magassag) {
    let bmiIndex = (testtomeg / (magassag ** 2));
    if (bmiIndex < 16) {
        return "sulyosSovanysag";
    }
    else if (bmiIndex < 17) {
        return "mersekeltSovanysag ";
    }
    else if (bmiIndex < 18.5) {
        return "enyheSovanysag ";
    }
    else if (bmiIndex < 25) {
       return "normalisTestsuly ";
    }
    else if (bmiIndex < 30) {
        return "tulsulyos ";
    }
    else if (bmiIndex < 35) {
        return "IfokuElhizas ";
    }
    else if (bmiIndex < 40) {
        return "IIfokuElhizas ";
    }
    else {
        return "IIIfokuElhizas ";
    }
}

function egeszOsztoE(szam, oszto) {
    if (szam % oszto == 0) {
        return true;
    }
    else {
        return false;
    }
}


document.write("1. Feladat: <br>");
keszito();
document.write("<hr>");


document.write("2. Feladat: <br>");
let szam = 2;
let hatvany = 3;
document.write(`A ${szam}<sup>${hatvany}</sup> = ${hatvanyozo(szam, hatvany)}`);
document.write("<hr>");


document.write("3. Feladat: <br>");
let alsoSzam = 1;
let felsoSzam = 100;
let generaltSzam = parosLetrehoz(alsoSzam, felsoSzam);
document.write(`Generált páros szám a(z) ${alsoSzam}-${felsoSzam} intervallumban: ${generaltSzam}`);
document.write("<hr>");


document.write("4. Feladat: <br>");
let magassag=1.2;
let testtomeg=25;
let bmiEredmeny = testTomegIndex(testtomeg,magassag);
document.write(`Magassag: ${magassag} m és ${testtomeg} kg, az BMI Index szerint: ${bmiEredmeny}`);

document.write("<hr>");


document.write("5. Feladat: <br>");
let egeszOsztoESzam = 25;
let osztoESzam = 5;
if (egeszOsztoE(egeszOsztoESzam, osztoESzam) == true) {
    document.write(`${egeszOsztoESzam} : ${osztoESzam}, a maradék nulla lesz. `);
}
else {
    document.write(`${egeszOsztoESzam} : ${osztoESzam}, a maradék NEM nulla lesz. `);
}



