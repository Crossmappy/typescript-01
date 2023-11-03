(()=>{


    let supermanEst: boolean = true;
    
    console.log(supermanEst);
    

    // you can put number value of 'true/false' instead of the word: true/false 
    let batmanEst: boolean = 5 > 6;


    // because it is a let (variable) you can change it 
    supermanEst = false;


    // supermanEst = ( batmanEst === true ) ? 'ABC' : 'XYZ'; if batmanEst is true so put ABC and if it is not true put XYZ, but supermanEst is not a string so we cannot put a ABC
    //if ( batmanEst === true ) is true, execute 'ABC'


    // STRING VERSION: you can also put      let supermanEst: string = 'Hola';      let batmanEst: boolean = 5 > 6;
    // than put supermanEst = ( batmanEst === true ) ? 'ABC' : 'XYZ'  if you want to shorten: supermanEst = ( batmanEst ) ? 'ABC' : 'XYZ' (for true)
    // or for a false supermanEst = ( !batmanEst ) ? 'ABC: 'XYZ' (and you dont have to put parentesis)

    let resul: string = batmanEst ? 'ABC' : 'XYZ';
    console.log ( resul );
    
   
    

})()