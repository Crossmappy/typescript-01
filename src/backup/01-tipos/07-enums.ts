(()=>{



//you can put every name, it doesnt matter 

enum SonusGradu {
    min,
    medium,
    maxium
}

let sonusNunc: SonusGradu = SonusGradu.medium;
// i want let to be of a type enum 'SonusGradu' with assigned values
//if i dont put a number value it will be '0,1,2', or if you assign numbers only at the first one the others will give you +1

console.log(sonusNunc)


// An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric
// STRING ENUMS:
//enum CardinalDirections {
    //  North = 'North',
    // East = "East",
    // South = "South",
    // West = "West"
    //};
    // logs "North"
    // console.log(CardinalDirections.North);


})()