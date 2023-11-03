(()=>{




    type Ultor = {
        nomen: string;
        telum: string;
    }
    
    const ironman: Ultor = {
        nomen: 'Ironman',
        telum: 'Armoursuit'
    }
    
    
    const capitanAmerica: Ultor = {
        nomen: 'Capitan America',
        telum: 'Escudo'
    }
    
    
    const thor: Ultor = {
        nomen: 'Thor',
        telum: 'Mjolnir'
    }
    
    
    const ultores: Ultor[] = [ironman, capitanAmerica, thor];
    
    for (let i=0; i < ultores.length; i++) {
        const elemento = ultores[i];
        console.log(elemento.nomen, elemento.telum);
    }
    //to divide and not sign it as an object we put it on two different elemento.nome
    
    for (const ultor of ultores) {
        console.log(ultor.nomen, ultor.telum);
    }
    
    /*
    The for loop is used to execute a block of code a given number of times, 
    which is specified by a condition.
    
    
    for (first expression; second expression; third expression ) {
        statements to be executed repeatedly
    }
    
    Here, the first expression is executed before the loop starts. 
    second expression is the condition for the loop to execute.
    third expression is executed after the execution of every code block.
    */
    
    
    
    
    
    
    
    
    
    /*
        let i=3
        if i > 0 {
            console.log(ultores[i])
        }
    
        i-=1
        if i > 0 {
            console.log(ultores[i])
        }
    
        i-=1
        if i > 0 {
            console.log(ultores[i])
        }
    
        i-=1
        if i>0 {
            i jest równe -= więc koniec pętli
        }
    
    
    */
    
    // i - 1    ->  2, i=3 
    // i -= 1   ->  i=2
    
    
    
    
    
    //inside the console.log you can put a (elemento.nomen, elemento.telum) so it will be divided by space
    
    
    
    


})()