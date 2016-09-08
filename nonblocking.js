/**
 * Created by Branden on 2016-09-08.
 */

// link to the node filesytem library to read the text files
var fs = require('fs');

// load food asyncronously
var Food = fs.readFile('Food.txt','utf8', function (err, Food) {
    //display food
    if (err){
        console.log(err);
    }
    else {
        // print food heading
        console.log('FOOD')
        console.log(Food)
    }

});

// load food asyncronously
var drinks = fs.readFile('drinks.txt','utf8', function (err, drinks) {
    //display food
    if (err){
        console.log(err);
    }
    else {
        // print food heading
        console.log('DRINKS')
        console.log(drinks)
    }

});
