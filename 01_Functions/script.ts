// ======= FUNCTIONS =======
// ======= LVL 1_3 =======
console.log("Lvl 1_3");

function showPersonInfo(name : string, city : string, age : number) : void {
    age = Math.round(age);
    console.log(`Hallo, mein Name ist ${name}. Ich bin ${age} Jahre alt. Ich komme aus ${city}.`);
}
showPersonInfo("SuperCoder", "Düsseldorf", 27.3);

// ======= LVL 1_5 =======
console.log("Lvl 1_5");

function multiplyAndDivide(num1 : number, num2 : number) : void {
    if(num2 == 0) {
        console.log(`Division durch 0 nicht erlaubt`);
    } else {
        console.log(`Multiplikation von ${num1} und ${num2} = ${num1 * num2}`);
        console.log(`Division von ${num1} und ${num2} = ${num1 / num2}`);
    }
}
multiplyAndDivide(10,2);
multiplyAndDivide(30, 20);
multiplyAndDivide(100, 100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);

// ======= Grundlagen LVL 1_1 =======
console.log("Grundlagen Lvl 1_1");

function intro1func(who : string) : void {
    console.log("Hello " + who);
}
intro1func("ppl");

// const intro1 = (who : string) => {
//     console.log(`Hello ${who}`);
// }
// console.log(intro1("gays"));

const intro1arrow = (who : string) => "Hello " + who;
console.log(intro1arrow("gays"));

// ======= Grundlagen LVL 1_4 =======
console.log("Grundlagen Lvl 1_4");

// normale function
function showHero(heroName : string, heroPower : string, heroEnemy : string) : void {
    const nameOutput = `Mein:e Lieblingsheld:in ist: ${heroName}. `
    const powerOutput = `Er/sie hat die Fähigkeit: ${heroPower}. `
    const enemyOutput = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}. `
    console.log(nameOutput + powerOutput + enemyOutput);
}
showHero("Peppa Pig", "Rosa", "Suzy")

// arrow
const heroVar = (heroName : string, heroPower : string, heroEnemy : string) : void => {
    const nameOutput = `Mein:e Lieblingsheld:in ist: ${heroName}. `
    const powerOutput = `Er/sie hat die Fähigkeit: ${heroPower}. `
    const enemyOutput = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}. `
    console.log(nameOutput + powerOutput + enemyOutput);
}

heroVar("Alien", "Alien", "Ripley")

// ======= Grundlagen LVL 1_6 =======
console.log("Grundlagen Lvl 1_6");

function returnOne() {
    return 1;
}
const x = 1;
const y = returnOne();

if(x === y) {
    console.log("Wird das gedruckt?");
}

// ======= Grundlagen LVL 1_7 =======
console.log("Grundlagen Lvl 1_7");

const malZwei = (zahl : number) :number => {
    return zahl * 2;
}
console.log(malZwei(6));

// ======= Grundlagen LVL 1_8 =======
console.log("Grundlagen Lvl 1_8");

function calcAge(birthYear : number) {
    return 2024 - birthYear;
}
console.log(calcAge(1997));

const compareAge = (age1 : number, age2 : number) : number => {
    const altersDifferenz = Math.abs(age1 - age2);
    return altersDifferenz;
}
console.log(compareAge(27,34));

// ======= Grundlagen LVL 1_9 =======
console.log("Grundlagen Lvl 1_9");

function myIntro(
    vorname: string = "Aurora", 
    nachname: string = "Stardust", 
    geburtsort: string = "New York", 
    alter: number = 20, 
    wohnort: string = "Celestia") : void {
    const introText = `Mein Name ist ${vorname} ${nachname}. Ich bin in ${geburtsort} geboren. Ich lerne bei SuperCode. Ich bin ${alter} Jahre alt. Ich wohne in ${wohnort}.`;
    console.log(introText);
}
myIntro();
myIntro("Goo", "Bert", "Woanders", 2, "Nicht hier")