(()=>{





type Ultores = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    potentia: number;
}

const ultores: Ultores = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    potentia: 1500.123123
}

const { potentia, vision } = ultores;

potentia
vision
// console.log(potentia.toFixed(2), vision.toUpperCase());

// const printUltor = ( ultores: Ultores ) => {
// console.log(ultores.vision)
// }
// printUltor(ultores);
// you could do it also that way

const printUltor = ( { vision }: Ultores ) => {
console.log(vision);
}
printUltor(ultores);

//you can pick different parameters from the 'const ultores', and if you put',...rest' itll give you all the rest so you dont have to name it
//and then console.log(rest)




//DESTRUCTURSTION OF LISTS

const ultoresArr: string[] = ['Capitan America', 'Ironman', 'Hulk'];

const [ , kupa, ] = ultoresArr

console.log( {kupa}, ultoresArr[1]);


//when you want to pick one element of the list you have to write something inside the const (the one where you choose the element) 
//and write only on the place of the element leaving the other once empty
//you can aswell write down the name of the main const and iside the '[]' write the position

})()