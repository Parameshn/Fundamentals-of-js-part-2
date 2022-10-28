'use strict';

//let hassDriversLiscence = false;
//const passTest

/*function logger() {
    console.log('my name is jonas')
}

//calling / running / invoking function
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const orangejuice = fruitProcessor(6, 0);
console.log(orangejuice);*/


// function decleration
/*function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2)
*/
// Arrow function
/*const calccAge3 = birthYear => 2037 - birthYear;
const age3 = calccAge3(1991);
console.log(age3)

const yearsuntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsuntilRetirement(1991, 'jonas'));
console.log(yearsuntilRetirement(1980, 'bob'));


const gpusales = (gamingRevenue, nonGamingRevenue2) => {
    const loss = 3500 - gamingRevenue;
    const nonGamingRevenue = gamingRevenue - nonGamingRevenue2;
    return `${loss} is the loss of revenue of nivida in 2019 & nongamingrevenue is  ${nonGamingRevenue2} `
}
console.log(gpusales(2300, 700))*/

// Function calling and other functions : DATA FLOW
/*function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));*/

/* const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsuntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsuntilRetirement(1991, 'jonas')); console.log(yearsuntilRetirement(1950, 'bob'));

*/

/*JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores */
/*const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins!(${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins!(${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log('no teams wins..!');
    }

}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

//test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas)*/


/*const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(friends.length - 1);

friends[2] = 'jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'schmedtman', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//EXERCISE
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(age);

*/
/*
const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('jhon');
console.log(friends);

//Remove elements
friends.pop();//Last element
const popped = friends.pop()
console.log(popped);
console.log(friends);

friends.shift();//First
console.log(friends)

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('you have a friend called Steven');
}
*/

/*Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) */

/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]]

console.log(bill, tips, total) ;
*/


/*


//Object
const jonas = {
    firstName: 'jonas',
    lastName: 'schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['michale', 'peter', 'steven'],
    hasDriverLiscence: true,
};
//Dot and bracket notation
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to aboout jonas choose between firstName,lastName,age,job, and friends');
//console.log(jonas.interestedIn);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request! choose between firstName,lastName,age,job, and friends ');
}

jonas.location = 'portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas)

//challenge
//jonas has 3 friends, and his bestfriend is called michale

console.log(` ${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]} `);
*/

/*
const jonas = {
    firstName: 'jonas',
    lastName: 'schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['michale', 'peter', 'steven'],
    hasDriverLiscence: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getsSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriverLiscence ? 'a' : 'no'} driver's liscense.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


//Challenge
//'jonas is a 40 year old teacher, and he has no drivers liscence'


console.log(jonas.getsSummary())

*/
/*
//Coding Challenge #3

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};

const jhon = {
    firstName: 'Jhon',
    lastName: 'Miller',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};



mark.calcBMI();
jhon.calcBMI();

console.log(mark.bmi, jhon.bmi)

if (mark.bmi > jhon.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${jhon.firstName}'s (${jhon.bmi})`);
} else if (jhon.bmi > mark.bmi) {
    console.log(`${jhon.firstName}'s BMI (${jhon.bmi})is higher than ${mark.firstName}'s (${mark.bmi})`);
}
*/


// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');console.log('Lifting weights repetition 3');console.log('Lifting weights repetition 4');console.log('Lifting weights repetition 5');console.log('Lifting weights repetition 6');console.log('Lifting weights repetition 7');console.log('Lifting weights repetition 8');console.log('Lifting weights repetition 9');console.log('Lifting weights repetition 10');

// for loop keeps while condition is true

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }
/*

const jonas = [
    'jonas',
    'schmedtman',
    2037 - 1991,
    'teacher',
    ['michale', 'peter', 'steven'],
    true

];
const types = [];


//console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[] not exist

for (let i = 0; i < jonas.length; i++) {
    //Reading from jona array
    console.log(jonas[i], typeof jonas[i]);

    //Filling type array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'number') continue;

    console.log(jonas[i], typeof jonas[i]);
}


//looping backwards and loops in loops
const jonas = [
    'jonas',
    'schmedtman',
    2037 - 1991,
    'teacher',
    ['michale', 'peter', 'steven'],
    true

];

//0,1,2,...4
//4,3,...0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: lifting weights ${rep}`);
    }
}
*/
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }
/*
let rep = 1;
while (rep <= 10) {
    // console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to end .')
}

for (let ki = 5; ki <= 5; ki++) {
    console.log(`king has queens ${ki}`);
}

let ko = 6
while (ko <= 6) {
    console.log(`king has ${ko} queen `);
    ko++;
}



for( let king=6;king<=6;king--){
    console.log(`king is weak ${king} no of times`);
}

//REPETITION
function calcAge(birthYear) {
    return 2037 - birthYear;
}
 const age1 = calcAge(1991);


const calcAge2= function (birthYear) {
    return 2037 - birthYear
 }
 const age2 = calcAge2(1991)
 console.log(age1,age2);


 function timeLapse(lapse) {
    return 600 - lapse ;
 }
 const calcLapse = timeLapse(50);

 const timeLapse2 = function (lapse){
    return 600 - lapse;
 }
 const calcLapse2= timeLapse2(100);
 console.log(calcLapse,calcLapse2);
 */

function cutFruitPieces(fruit) {
    return fruit * 4;
}

 function fruitProcessor(apples,oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apples and ${oranges} piece of oranges.`;
    return juice;
 }
 console.log(fruitProcessor(2,3));
const calcAverage = (a,b,c) => (a+b+c) / 3; 

 const scoreDolphins = calcAverage(22,23,71);
 const scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDoplhins,scoreKoalas);

const checkWinner = function (avgDolphins,avgKoalas){
    if(avgDolphins > avgKoalas){
        console.log(`Dolphins are the winners!`);
    } else {
        console.log(`Koalas are the winners!`);
    }
}
console.log(checkWinner(scoreDolphins,scoreKoalas));