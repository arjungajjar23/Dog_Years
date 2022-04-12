//enter your age in myAge variable.
const myAge = 28;

//first two years of dog's life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;

//Each year later (After first two years) equates to 4 dog years.
//we already counted first two years, so let's substract it from myAge.
let laterYears = myAge - 2;
//now equating the rest with 4 dog years each.
laterYears *= 4;
//console.log(earlyYears);
//console.log(laterYears);
//Now adding both early and later years together to find total dog years.
let myAgeInDogYears = earlyYears + laterYears;
const myName = "Arjun".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);