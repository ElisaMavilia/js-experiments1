'use strict';
/* 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
console.log(jonas.lastName); //dot notation to retrieve the propriety we want
console.log(jonas['lastName']); //bracket notation

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); //bracket notation can be used with expressions that concatenate more properties
console.log(jonas['last' + nameKey]); */


/* let interesedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas[interesedIn]);//bracket notation  */
/* 
if (jonas[interesedIn]){
    console.log(jonas[interesedIn]); // it is true and not undefined
}else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
} */

//ADDING A PROPERTY
/* jonas.location = 'Portugal'; //with a dot notation
jonas['twitter'] = '@jonasshem'; //with a bracket notation
console.log(jonas);

// "Jonas has 3 friends and his best friend is called Michael"

console.log(jonas['firstName'], 'has', jonas['friends'].length, 'friends and his best friend is called', jonas.friends[0]);

// or

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`); */


//OBJECT METHODS

// We can add functions in the object


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

   /*  calcAge: function(birthYear){
        return 2037 - this.birthYear; //this refererres to the object of this method, so we don't need to repeat the name of the object
    } */

        // or
        calcAge: function(){
            this.age = 2037 - this.birthYear;
            return this.age;
        },
// Jonas is a 46 years old teacher, and he has a driver's license
        getSummary: function(){
            return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
        }
};

console.log(jonas.calcAge()); //dot notation
console.log(jonas.age)

console.log(jonas.getSummary());

// Jonas is a 46 years old teacher, and he has a driver's license, with if statement
let hasAlicense = "he has a driver's license"; 
if (jonas.hasDriversLicense){
    console.log(hasDriversLicense);
}else {
    hasAlicense = "he has not a driver's license";
}

console.log(`${jonas.firstName} is a ${jonas.age} years old ${jonas.job} and ${hasAlicense}`);