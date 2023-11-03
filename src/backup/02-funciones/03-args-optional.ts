(()=>{




// i want the second argument to be OPTIONAL -> i put a '?' behind the name of the argument

const nomen = ( preanomen: string, cognomen?: string ): string => {

    return `${ preanomen } ${ cognomen || '----' }`;
}

//what if you dont has a second argument then || -> this will happen

const ironman = nomen('Tony');

//in this case there can be only one parameter because the other one is optional

console.log({ironman});




})()