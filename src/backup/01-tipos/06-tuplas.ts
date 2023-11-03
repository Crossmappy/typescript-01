(()=>{



const heroum: [string, number, boolean] = ['Dr Strange', 100, true];

console.log(heroum[0]);

//you cannot change or assign other value to a different value ex: heroum[1] = true   it will not work because [1] its a number






//A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
let myTuple: [string, number, boolean] = ['Dave', 42, true]

//it looks like an array but it has specificly assigned elements so you cannot do 'myTuple = mixed' but it can be 'mixed = myTuple'
let mixed = ['John', 1, false]
mixed

//the element can be assign only at it place on the origin. you cannot myTuple[3] =42
myTuple[1] = 42

})()