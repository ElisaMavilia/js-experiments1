'use strict'; 

/* console.log('Lifting weights repetition 1');
 */
//for loop keeps runnig while the condition is TRUE
for(let rep = 1; rep <= 10; rep ++){
    console.log(`Lifting weights repetition ${rep}`); 
};
// rep ++ entails rep = rep +1;

// Looping Arrays (reading array amd creating a new one)

const types = []; 

const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for(let i = 0; i < jonasArray.length ; i++){
    console.log(jonasArray[i], typeof jonasArray[i]);

   /*  types[i] = typeof jonasArray[i]; */ //Filling types array with the typeof of jonasArray
    types.push(typeof jonasArray[i]); //Filing types with the push method

}

console.log(types);

const years =[
    1991,
    2007,
    1969,
    2020
]

const ages = [];

for(let i = 0; i < years.length; i++){
   ages.push (2037 - years[i]);
}

console.log(ages);

// continue and break
// continue is to exit the current iteration of the loo and continue to the next one
// break is to completely terminate the whole loop

console.log('--- ONLY STRINGS ---');
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'string') continue;
     //continue will print just the strings
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < jonasArray.length; i++){
    if(typeof jonasArray[i] !== 'number') break;
     //continue will print just the strings
    console.log(jonasArray[i], typeof jonasArray[i]);
}



