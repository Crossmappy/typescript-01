


interface duaAddedNumeri {
    (a: number, b: number): number;
}

let addeNumeriFunction: duaAddedNumeri;

addeNumeriFunction = (a: number, b: number ) => {
    return a+b;
}


console.log (addeNumeriFunction(2,6))
