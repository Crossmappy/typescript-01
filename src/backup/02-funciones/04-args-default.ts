(()=>{







//you can direcxtly define a value to an arugment inside the function
// For parameters with default values, the default value goes after the type annotation


const nomen = ( preanomen: string, cognomen?: string, upper: boolean = false ): string => {

    if ( upper ) {
        return `${ preanomen } ${ cognomen || '----' }`.toUpperCase();
    } else {
        return `${ preanomen } ${ cognomen || '----' }`;
    }

   
}

// if ( upper === true ) upper is true this will happen = return `${ preanomen } ${ cognomen || '----' }`.toUpperCase() (all the string will go uppercase)
// else =  return `${ preanomen } ${ cognomen || '----' }`; so the upper case will not work.


//The default value can be change after -> 

const ironman = nomen('Tony', 'Stark', true);

console.log({ironman});





})()