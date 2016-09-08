/**
 * Created by Branden on 2016-09-08.
 */
// link to the node filesytem library to read the text files
var fs = require('fs');

// open & read food list
var food = fs.readFileSync("Food.txt", 'utf8');

// print food heading
console.log('FOOD');

// print food list here
console.log(food);

// open & read drink list
var drink = fs.readFileSync("drinks.txt", 'utf8');

// print drink heading
console.log('\nDRINKS');

// print drink list here
console.log(drink);