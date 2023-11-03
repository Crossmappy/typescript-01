(()=>{






//const addereNumeros = (a: number, b: number ): number => {
//   return a + b;
//}
//you have to put a number of arbuments and the type inside the first parentesis -> addereNumeros = (a: number, b: number ),  so it does know how many argument you can put in

const addereNumeros = (a: number, b: number ): number => a + b;
//you can shorten it like that

console.log(addereNumeros(2,7));


const salutant = (nomen: string) => `Hola ${ nomen }`;

const salvareMundo = () => 'El mundo esta salvado!';

let functionMeun;

functionMeun = 10;
console.log(functionMeun);
// because functionMeun is a variable you can change it and also put a function

functionMeun = addereNumeros;
console.log(functionMeun(1, 2));

functionMeun = salutant;
console.log(functionMeun('Fernando'));

functionMeun = salvareMundo;
console.log(functionMeun());

//it gives me back different results, but the parameters inside the console.log has to correspond to the value of the const/function



let aliaFunctionMeua: () => string;
//this let has a defined return that has to be a string, not as before. but it dosent has any function assigned
// you cannot put that aliaFunctionMeua = 'Hola' because it will define the function
aliaFunctionMeua = salvareMundo;
//but you can put salvareMundo function as a function because it has the same entry  parameters (empty parentesis())
console.log(aliaFunctionMeua());

let aliaFunctionMeua2: (y:string) => string;
aliaFunctionMeua2 = salutant;
//salutat has the same parameters of function and return so it can be used 
console.log( aliaFunctionMeua2('Fernando'));


//(y:string) => string; this is like a sign of a function and it has to has one ( so similar entry and return if you want to use them)



    
})()