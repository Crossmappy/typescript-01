(()=>{

//UNION TYPE is when you put toghether different types

    type Heros = {
        nomen: string; 
        aetas?: number; 
        facultates: number[]; 
        getNomen?: () => string;
    }
    
    //you can assign to this variable different type and one of them can actually be a type allias that you created 
    
    let meusVariable: string | number | Heros = 'Fernando';
    //console.log(meusVariable);
    
    //you can also change this variable
    meusVariable = 20;
    
    //and check its console and type that its made of
    //console.log(typeof meusVariable);
    
    
    meusVariable = {
        nomen: 'Bruce',
        aetas: 43,
        facultates: [1]
    }
    
    console.log(meusVariable);
    console.log(typeof meusVariable);
    
    //in Javascript there is no type, you cannot personalize it


})()