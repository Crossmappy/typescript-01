(()=>{




//interfaces are similar to classes but you cannot use methods
//also similar to types but this are extendible (check on types)

interface Heros {
    nomen: string;
    aetas?: number;
    facultates: number[];
    getNomen?: () => string;
}


let flash: Heros = {
    nomen: 'Barry Allen',
    facultates: [1, 2]
}
flash

let superman:Heros = {
    nomen: 'Clark Kent',
    aetas: 60,
    facultates: [1],
    getNomen() {
        return this.nomen;
    }
}

superman



})()