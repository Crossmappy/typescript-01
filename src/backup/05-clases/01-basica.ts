(()=>{




/*
if you put private you can access the property only inside the class, the public its public, also if you dont put anything it is public
a class is not an object but its a template for objects 

new is instacia 

class Ultor {
    private nomen: string;
    private hierichia: string;
    public verumNomen?: string;

    static mediocrisAetas: number = 35;
}

const antman: Ultor = new Ultor();

console.log( antman );
from this console log you can access only to the 'public verumNomen?: string;'
u cannot access to the others because they are privat or static
to access to the static you have to enter through the class and not the 'const antman':
console.log(Ultor.mediocrisAetas)

*/


//A method, like a function, is a set of instructions that perform a task. 
//The difference is that a method is associated with an object, while a function is not

class Ultor {
    public nomen: string;
    public hierichia: string;
    public verumNomen?: string;
    static mediocrisAetas: number = 35;

    constructor( nombre: string, jerarwuia: string, nombreVerdadero?: string) {
        this.nomen = nombre;
        this.hierichia = jerarwuia;
        this.verumNomen = nombreVerdadero;

    }


    
}


const antman: Ultor = new Ultor('Antman', 'Capitan', 'Scott Lang');

console.log( antman );
// now you can access only the constructor
// this.nomen recall the class Ultor nomen while the one after = recalls the one ftom the constructor
// to shorten the constructor you can:
/*
constructor (private nomen: string, public hierichia: string, public verumNomen?: string,) { }
and then eliminate them from the Ultor class (the only one that has to stay there is the static one)
*/



class Ultor2 {

    static mediocrisAetas: number = 35;
    static getMediocrisAetas() {
        return this.name;
    }

    constructor(
        private nomen: string,
        private hierichia: string, 
        public verumNomen?: string,
        ) { }

       

        public bio(): string {
            return `${ this.nomen} (${ this.hierichia})`
        }

    }

const spiderman: Ultor2 = new Ultor2('Spiderman', 'Capitan', 'Scott Lang');

console.log( spiderman.bio() );

//to the statics we can go only throught classes

console.log(Ultor2.getMediocrisAetas());


/*

class Greeter {
  greeting: string;
 
  constructor(message: string) {
    this.greeting = message;
  }
 
  greet() {
    return "Hello, " + this.greeting;
  }
}
 
let greeter = new Greeter("world");


The syntax should look familiar if you’ve used C# or Java before. We declare a new class Greeter. This class has three members: a property called greeting, a constructor, and a method greet.

You’ll notice that in the class when we refer to one of the members of the class we prepend this.. This denotes that it’s a member access.

In the last line we construct an instance of the Greeter class using new. This calls into the constructor we defined earlier, creating a new object with the Greeter shape, and running the constructor to initialize it.




*/

})()