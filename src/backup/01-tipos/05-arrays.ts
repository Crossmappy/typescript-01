(()=>{




        // a list of numbers
        const numeri: number[] = [1, 2, 3, 4, 5];
        numeri

        const quali: (string | number | boolean)[] = [1, '2', 3, 4, false];

        quali.push(true);
        //push() method appends the given elements in the last of the arrays and returns the lenght of the new array
        //let numbers = new Array(1, 4, 9); 
        //let length = numbers.push(10); 
        //console.log("new numbers is : " + numbers ); RESULT: new numbers is : 1,4,9,10

        console.log(quali);


        //forEach() method calls a function for each element in the array.
        quali.forEach( element => console.log(element) );





        const scelerati: string[] = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
        scelerati.forEach( v => console.log(v.toUpperCase) );









    let stringArr = ['one', 'hey', 'Dave']

    let guitars = ['Start', 'Les Paul', 5150]
    
    let mixedData = ['EVH', 1984, true ]
    mixedData

    // first one is only array, the other two are combined but the 'guitars' 
    // has only string and number and mixedData has boolean aswell 
    
    stringArr[0] = 'John'
    stringArr.push('hey')
    
    // inside the 'guitars' the number or string are not assigned to a specific position
    
    guitars[0] = 1984
    guitars.unshift('Jim')
    
    // if you're not sure about the primitive then just put [] (any)
    //let test = []
    
   
    
    //you can make an empty array and asign it a type aswell and then push data inside
    let bands: string[] = []
    bands.push('Van Halen')
    
    

})()