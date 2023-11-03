(()=>{



//to define an object you have to put '= {  here the object  }'
//Objects are variables too. But objects can contain many values.

// let flash = {
//     nomen: 'Berry Allen',
//     aetas: 24,
//     facultates: ['Supervelocidad', 'Viajar en el tiempo']
//}

// you divide the parameters with a ','
// in the facultates you put a list inside a [ ..., ....]

let flash: {nomen: string, aetas?: number, facultates: string[], getNomen?: () => string} = {
    nomen: 'Berry Allen',
    aetas: 24,
    facultates: ['Supervelocidad', 'Viajar en el tiempo']
}
// you can also assign a default primitives, that can be optional, and assign a method/function to it


// flash = {
//  nomen2: 'Clark Kent'
// }
//even if its a variable 'let' you cannot define only one of the 3 parameters inside the object. if you want to change only one, you have to write the other ones as it was


flash = {
    nomen: 'Clark Kent',
    aetas: 24,
    facultates: ['Supervelocidad', 'Viajar en el tiempo']
}

flash = {
    nomen: 'Clark Kent',
    aetas: 50,
    facultates: ['Supervelocidad'],
    getNomen() {
        return this.nomen;
    }
}

console.log(flash);

//if you want to access to only one of the properties then you put console.log(flash.aetas);

})()