

(()=>{

    const batman: string = 'Batman';

    // you could put it as any but it is simpler if you add the 'string'.
    //for example if in console.log you can put some styles to the strings (ex: toUppercase):
    //console.log( batman.toUpperCase() );

    const viridisLucerna: string = "Linterna Verde";

    const nigrumVolcano: string = `Heroe`;
    nigrumVolcano

    let aetas: number = 25;
    
    // use string interpolation to put the const or let inside 
    console.log(`I'm ${ viridisLucerna } y tengo ${ aetas } anos.`);
    

    //put the 10th letter and if it doesnt exist put the text. for example I can put 'console.log( batman[1]?toUppercase() );'
    console.log(batman[10] || 'Ese caracter no se encuentra');
    
})()  