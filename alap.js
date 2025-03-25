//1. feladat
let user = prompt("Add meg a neved");
console.log(`(Szia, ${user}! Örülök, hogy itt vagy!`)

//2. feladat
const veletlenszam = Math.floor(Math.random() * 10)+1
console.log(veletlenszam);

//3. feladat
const veletlenszam2 = Math.floor(Math.random() * 6)+1
console.log(veletlenszam2);

//4. feladat
const lowerBound = parseInt(prompt("Add meg az alsó határt:"), 10);
const upperBound = parseInt(prompt("Add meg a felső határt:"), 10);

if (!isNaN(lowerBound) && !isNaN(upperBound) && lowerBound < upperBound) {
    const randomNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
    console.log(`A generált véletlenszám: ${randomNumber}`);
} else {
    console.log("rossz");
}


//5. feladat
let eletkor = prompt("Add meg az életkorodat?: ")
if (eletkor <= 6){console.log("gyerek")}
else if (eletkor <=7 || eletkor  <= 18){console.log("iskolás")}
else if (eletkor <= 19 || eletkor <= 60){console.log("dolgozó")}
else if(eletkor >= 61){console.log("nyugdíjas")}

//6. feladat
let szam = prompt("Kérek egy számot");
switch(szam)
{
    case 0:
        console.log("nulla");
        break;
    case szam<0:
        console.log("a szám negativ");
        break;
    case szam>0:
        console.log("a szám pozitiv");
        break;
}