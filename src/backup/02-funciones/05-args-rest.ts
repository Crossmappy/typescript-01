(()=>{








    const nomen = ( preanomen: string, ...restArgs: string[] ): string => {

        return `${preanomen} ${ restArgs.join(' ') }`;
    
    }
    
    const ironman = nomen('Clark', 'Joseph', 'Kent');
    
    
    // the first one is normal but the rest of the words should be divided by estArgs.join(' ') (ex: a space, a - etc.)
    
    console.log({ironman});


    


})()