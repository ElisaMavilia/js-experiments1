'use strict'; // this activates the strict mode for a more secure code and avoides incidental errors and bugs
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //if we introduce a typo the strict mode will detect it in the console
if (hasDriversLicense) console.log('I can drive');

//const interface = 'Audio'; // the word interface is reserved for other features in the future and the strict mode can detect it

//FUNCTIONS

/* function logger(){
    console.log('My name is Elisa');
}

logger(); //calling/invoking/running the function

function fruitProcessor(apples, oranges){
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice; //juice will became the result of this function
}

const appleJuice = fruitProcessor(5, 0); //in order to return the result of the function we need to store the function in a variable
console.log(appleJuice);
//console.log(fruitProcessor(5, 0)); //here we don't store the result in a variable

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

/* Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console. */

function describeCountry (country, population, capitalCity){
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}

const italyDescription = describeCountry('Italy', 60, 'Rome');
const swedenDescription = describeCountry('Sweden', 10, 'Stockholm');
const norwayDeDescription = describeCountry('Norway', 8, 'Oslo');
console.log(italyDescription,'but',swedenDescription, 'and', norwayDeDescription);

function convertStrToNum(string) {
    if (string){
        const conversionNum = Number(string);
        return conversionNum;
    }
    return NaN; //in case 'string' is empty or not valid
}

const newNumber = convertStrToNum('23');
console.log(newNumber, typeof newNumber);

function converNumToStr (num){
    if(num){
        const convertedStr = String(num);
        return convertedStr;
    }
    return NaN; //in case 'num' is empty or not valid
}

const newStr = converNumToStr(43);
console.log(newStr, typeof newStr);


console.log(calcAge(1979));//Declared functions are hoisted, the can be called before their declaration
function calcAge(birthYeah) {
    const age = 2037 - birthYeah;
    return age;
}
/* function calcAge(birthYear){ 
    return 2037 - birthYear; //it is a simpler way to return something
} */
const age1 = calcAge(1984);
console.log(age1);

// FUNCTION EXPRESSION
const calcAge2 = function(birthYear){ //an expression produces a value which will be stored in a variable
    return 2037 - birthYear
}

const age2 = calcAge2(1984);
console.log(age1, age2);

/* The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations). */

//function declaration
/* const worldPopulation = 7900; */
function percentageOfWorld1(population){
    const percentageOfPop = (population/worldPopulation)*100;
    const roundPop = percentageOfPop.toFixed(2);
    return roundPop;
}

const italianPop = percentageOfWorld1(60);
console.log(`Italian population represents the ${italianPop}% of the world`);

const swedishPop = percentageOfWorld1(10);
console.log(`Swedish population represents the ${swedishPop}% of the world`);

const spanishPop = percentageOfWorld1(48);
console.log(`Spanish population represents the ${spanishPop}% of the world`);

//Expression Declaration
const percentageOfWolrd2 = function(population){
    const percentageOfPop = (population/worldPopulation)*100;
    const roundPop = percentageOfPop.toFixed(2);
    return roundPop;
}

const italianPop2 = percentageOfWolrd2(60);
console.log(`Italian population represents the ${italianPop}% of the world`);

const swedishPop2 = percentageOfWolrd2(10);
console.log(`Swedish population represents the ${swedishPop}% of the world`);

const spanishPop2 = percentageOfWolrd2(48);
console.log(`Spanish population represents the ${spanishPop}% of the world`);

// ARROW FUNCTIONS
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1984);
console.log(age3);

const percentageOfWorld3 = population => ((population/worldPopulation)*3).toFixed(2); 
const pop4 = percentageOfWorld3(100);
console.log(pop4);

//How many years has a person left until retirement?
const calcAge4 = birthYear => 2024 - birthYear;
const age4 = calcAge3(1984);
console.log(age4);

/* const retirementAge = 65;
const yearsLeft = (birthYear, firstName) => {
const personalAge = 2024 - (birthYear);
const calculateYears = (retirementAge - personalAge);
return `${firstName} retires in ${calculateYears} years`;
}
const personalYearsLeft = yearsLeft(1984, 'Elisa');
const personalYearsLeft2 = yearsLeft(1995, 'Mark');
console.log(personalYearsLeft);
console.log(personalYearsLeft2); */

//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit){
    return fruit * 4;
}
function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    //console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} pieces of oranges`;
    return juice; //juice will became the result of this function
}
fruitProcessor(2, 3);//It starts with 2 which is the number of apples, but since apples is calling the function cutFruitPieces, the number 2 will be multiplied times 4, and the result will be 8. The same occurs with oranges.
console.log(fruitProcessor(2, 3))

/* Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

Call describePopulation with data for 3 countries of your choice. */

function calculateProcent(population){
    const worldPopulation2 = 7900;
    const percentageOfWorld4 = ((population/worldPopulation2)*100).toFixed(2);
    return percentageOfWorld4;
}
function describePopulation(country, population){
    const populationPercentage = calculateProcent(population);
    return `${country} has a population of ${population} million, which is about ${populationPercentage}% of the world.`
}
const finalPercentageOfItaly = describePopulation('Italy', 60);
console.log(finalPercentageOfItaly);
const finalPercentageOfSweden = describePopulation('Sweden', 10);
console.log(finalPercentageOfSweden);
const finalPercentageOfNorway = describePopulation('Norway', 8);
console.log(finalPercentageOfNorway);

//REVIEWING FUNCTIONS
const calcAge5 = function(birthYear){ //the parameter birthYear here is not the same as the parameter birthYear of the yearsLeft function
    return 2024 - (birthYear);
}
const retirementAge = 65;
const yearsLeft = function(birthYear, firstName) {
const personalAge = calcAge5(birthYear);
const calculateYears = (retirementAge - personalAge);

 if (calculateYears < 0){
    const minusDifference = Math.abs(calculateYears);
    return `${firstName} is already retired from ${minusDifference} years`; //it is a good practice to return a number as in the code below
} else {
    return `${firstName} retires in ${calculateYears} years`;
} 

   

}
const finalResult = yearsLeft(1955, 'Elisa');
console.log(finalResult);


