(()=>{



    const nomen = ( preanomen: string, cognomen: string ): string => {
        return `${ preanomen } ${ cognomen }`;
    }
    
    const ironman = nomen('Tony', 'Stark');
    //these funtion expect two parameters, and it has to be two string, you cannot put only one
    
    console.log({ironman});


})()