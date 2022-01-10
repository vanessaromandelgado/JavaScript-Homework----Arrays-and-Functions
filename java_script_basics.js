
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["max","HAS","PuRple","dog"];

// input: a string and an array
// process: loop the array and search the string for each word in the array
//          use the string.search() method to search the dog_string for each dog name
// output: "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"


let findWords= (str, names) => {
    // Your code goes here
    let matched = false;
    for (let i=0; i<names.length; i++){
        if (str.search(names[i]) != -1){ // if return value is not -1, success for search result
            console.log(`Matched dog_name ${names[i]}.`);
            matched = true;
        }
    }
    if (matched === false){
        console.log('No matches.');
    }
}

//Call function
findWords(dog_string, dog_names);

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

// input: array, arr1
// process: starting at even index, go through array and removing by adding each even index with "even index"
//          arr.splice(<index to start at>, <number of items to remove>, <items to add>);
//          arr.splice(<any even index>, 1, 'even index')
//          for loop, start at index 0, through even indexes

// output: ...

function replaceEvens(arr){
    //code goes here
    for(let i=0; i<arr.length; i+=2){
        arr.splice(i, 1, 'even index');
    }
}

// function call
replaceEvens(arr1); 
console.log(arr1);

// output: ...
//       ["even index","Baseball","even index","Goku","even index","Rodger"]

