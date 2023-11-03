(()=>{







// type aliases can define composite types such as objects and unions as well as primitive types such as numbers and strings or tuple; 
//interface, however, can only define objects. 


type Heros = {
    nomen: string; 
    aetas?: number; 
    facultates: number[]; 
    getNomen?: () => string;
}


let flash: Heros = {
    nomen: 'Berry Allen',
    facultates: [1, 2]
}
flash

let superman: Heros = {
    nomen: 'Clark Kent',
    aetas: 50,
    facultates: [1],
    getNomen() {
        return this.nomen;
    }
}
superman
//it became a type you can reuse in different objects





/*
DIFFERENCE BETWEEN TYPES ALIASES AND INTERFACE

1) Interface define shapes of data, like an object. 
   `type aliases can define objects, primitives, unions etc
2) If you declare two INTERFACES with the same name it can marge 

        interface Person {
        name: string
        }

        interface Person {
        age: number
        }

        const john: Person = {
        name: "John",
        age: 26,
        }
   If you declare two TYPE aliases with the same name it will give you an error
3) The interfaces can be extended with type or by type alias. In interfaces it is easy to extend classses
   We can also combine two interfaces to create a new INTERSECTION TYPE (not an intersection of interfaces) by using the & keyword.
        interface PersonNameInterface { name: string }
        interface Person1 extends PersonNameInterface { age: number }
    TYPE cannot extend a class. However, we can combine numerous types into one type to form an intersection type
*/
})()