(()=>{



interface Emptor {
    nomen: string;
    aetas?: number;
}

interface Emptor {
    inscription: {
    id: number;
    zip: string;
    city: string;}
}


const emptor: Emptor = {
    nomen: 'Fernando',
    aetas: 25,
    inscription: {
        id: 124,
        zip: 'KY2 SUD',
        city: 'Ottawa'
    }
}
emptor

//inside of this object you can have an object 'inscription'
// it cannot be of the Emptor type becase doesnt has a inscription
// but you can create a different interface (it can also be with the same name or you can put it later inside the main interface)


interface Emptor2 {
    nomen: string;
    aetas?: number;
    inscription: Inscription;
    getPlenumInscription( id: number ): string;
}


//I can get a function aswell

interface Inscription {
    id: number;
    zip: string;
    city: string;
}


const emptores: Emptor2 = {
    nomen: 'Fernando',
    aetas: 25,
    inscription: {
        id: 124,
        zip: 'KY2 SUD',
        city: 'Ottawa'
    },
    getPlenumInscription(id: number) {
        if( id === this.inscription.id ) {
            return 'No existe el id'
        }
        return this.inscription.city;
    }
}
emptores


const emptores2: Emptor2 = {
    nomen: 'Maribel',
    aetas: 30,
    inscription: {
        id: 124,
        zip: 'KY2 SUD',
        city: 'Toronto'
    },
    getPlenumInscription(id: number) {
        if( id === this.inscription.id ) {
            return 'No existe el id'
        }
        return this.inscription.city;
    }
}
emptores2

console.log(emptores2.getPlenumInscription(123));
//have to put a number inside the ()

})()