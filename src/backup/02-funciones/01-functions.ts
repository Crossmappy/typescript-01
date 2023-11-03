(()=>{


//a function is a block of code designed to perform a particular task.
//The code inside the function will execute when "something" invokes (calls) the function: When an event occurs (when a user clicks a button, When it is invoked (called) from a code, Automatically (self invoked)
//Functions often compute a return value. The return value is "returned" back to the "caller"

//With functions you can reuse code/ You can use the same code with different arguments, to produce different results.

//The () operator invokes (calls) the function:
//Accessing a function with incorrect parameters can return an incorrect answer:
//Accessing a function without () returns the function and not the function result:
//toCelsius refers to the function object, and toCelsius() refers to the function result.


const heros: string = 'Flash';

function returnNomen(): string {
    return heros;
}

console.log(returnNomen());
//to call a result you just put it with it function

//in typescript there can be a RETURN TYPE (the return is expilicity defined) or VOID RETURN TYPR (when function doesnt return any value)

const activateBatSignum = (): string => {
 return 'Batisenal activada';
}

activateBatSignum();
//its a different way of writing down a function but here the funtion doesnt has a name. it is a const with a function

const heroNomen = returnNomen();
console.log(heroNomen);
//this const will make the function of 'returnNomen()' and give back the answer on the console


})()