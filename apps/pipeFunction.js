//Function to pipe three functions [we can expand on below functions if needed]

function getName(person) {
    return person;
}

function upperCase(string){
    return string.toUpperCase();
}

function get6Characters(string){
    return string.substring(0, 6);
}

function lowerCase(string){
    return string.toLowerCase();
}

//Pipe function
//Utilize _pipe that accept only two functions
const _pipe = (operation1, operation2) => (arg) => operation2(operation1(arg));

//The rest parameters creates an array of operations
pipe = (...functions) => functions.reduce(_pipe);

//
const operationName = pipe(getName, upperCase, get6Characters, lowerCase);
console.log(`${operationName('jonathan')}`);

module.exports={
    getName, 
    upperCase, 
    get6Characters, 
    lowerCase, _pipe, 
    pipe, 
    operationName};

