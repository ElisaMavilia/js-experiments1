const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Steven';

/* const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); */

/* const years = new Array(1991, 1984, 2008, 2020); //constructor: it is anther way to create an array

console.log(friends[0]); //is used to retrieve a specific element from an array
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); //this expression is used to retrieve the last element of an array because the length property is not zero-based.

friends[2] = 'Jay'; //replace a specific element of the array
console.log(friends); 

const firstName = 'Jonas'
const jonas = [firstName, 'Shmedman', 2024 - 1991, 'teacher', friends]; //we can store inside an array all types of data (variables, strings, expressions, other arrays)
console.log(jonas, jonas.length);
*/
//Exercise
/* function calcAge(birthYear){ 
    return 2037 - birthYear; //it is a simpler way to return something
}
const years2 = [1990, 1967, 2002, 2010, 2018];

calcAge(years2); //we cannot pass the entire array as a parameter because the function expects a single value
console.log(calcAge(years2)); //the result is NaN because the function expects a number as a parameter

const ageresult1 = calcAge(years2[0]);
const ageresult2 = calcAge(years2[1]);
const ageresult3 = calcAge(years2[years.length -1]);
console.log(ageresult1, ageresult2, ageresult3);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years.length -1])];
console.log(ages); */

// ARRAY METHODS

//push
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); //add an element to the end of the array and returns the length of the array
console.log(friends, newLength);

//unshift
friends.unshift('John'); //add an element to the beginning of the array and returns the length of the array
console.log(friends);

//pop
friends.pop();// removes the last element of an array, it doesn't need any argument to be passed because its functionality is specifically designed to remove the last element of an array and return that removed element.
const popped = friends.pop();
console.log(popped);

//shift
friends.shift(); //removes the first element of an array, it doesn't need any argument to be passed because its functionality is specifically designed to remove the first element of an array and return that removed element.
const shifted = friends.shift();
console.log(shifted);

//indexOf
console.log(friends.indexOf('Steven')); //it returns the index of the element
console.log(friends.indexOf('Bob')); // it returns -1 which is a common way in programming to indicate that the specified element was not found in the array.

//includes
friends.push(23);
console.log(friends.includes('Steven')); //returns true or false
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); //it returns false because the string is not the same as the number (no type coercion);

if (friends.includes('Steven')){
    console.log('You have a friend called Steven');
} else{
    console.log('Sorry, no friends matching that name');
}

/* Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

Log to the console whether the array has 4 elements or not (true or false).

Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

 */

const populations = [];
const percentages = []
const worldPopulation = 7900;

function calcPercentage(population){
    const percentageOfWorld = (population / worldPopulation)*100;
    return percentageOfWorld.toFixed(2);
}
function pushPopulation (population){
    if (population){
        populations.push(population);
       const percentageResult = calcPercentage(population);
       percentages.push(percentageResult);
       return {populations, percentages};
    } else {
        return 'No population provided';
    }
}

const italy = pushPopulation(60);
const sweden = pushPopulation(10);
const norway = pushPopulation(8);
const china = pushPopulation(1412);
const nowhere = pushPopulation();
console.log('populations:', populations);
console.log('percentages:', percentages);
console.log(nowhere); //returns 'No population provided'

/* Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

If the neighbours array does not include the country 'Germany', log to the console: Probably not a central european country' :D'.

Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'. */


const italyNeighbour = ['Switzerland', 'France', 'Austria', 'Slovenia'];
italyNeighbour.push('Utopia');
console.log(italyNeighbour);
italyNeighbour.pop();
console.log(italyNeighbour);

function findACountry(name){
   if (italyNeighbour.includes(name)) {
    return console.log(`${name} is a neighbour Country of Italy`)
   }else {
    return console.log(`${name} is not a neighbour Country of Italy`);
    }
}
let newCountry = findACountry('France');
newCountry = findACountry('Germany');

function findAndReplace (countryOut,  countryIn){
    const index = italyNeighbour.indexOf(countryOut);
   if (index !== -1){ //if the index is found
    italyNeighbour[index] = countryIn;
   }
   
}

const replaceCountry = findAndReplace('France', 'Republic of France');
console.log(italyNeighbour);

const replaceCountry2 = findAndReplace('Austria', 'Republic of Austria');
console.log(italyNeighbour);