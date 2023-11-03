(()=>{



    let ultores: number = 10; 
    console.log(ultores)
    
    //it will be undefined couse doesnt has any value
    
    const scelerati: number = 20;
    
    
    //CONDITIONAL: 
    //let ultores; 
    
    //if ( ultores < scelerati ) {
    //   console.log('Es en problemas');
    //} else {
    //    console.log('Nos salvamos');}
    // but in this case it will give it as an error because 'let ultores' its undefined 
    
    
    if ( ultores < scelerati ) {
          console.log('Es en problemas');
        } else {
           console.log('Nos salvamos');
        }
    
    // the conditional is before the change of the value in 'let' so the result is consideraing the first value
    
    ultores = 123;
    
    // if you put 'ultores = '55'' it will give you an error, so to change it but keep the '' you can put 'ultores = Number('55')
    
    console.log({ultores});



})()