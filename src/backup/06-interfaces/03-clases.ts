(()=>{




    interface Xmen {
        nomen: string;
        verumNomen: string;
        potentiaMutante( id: number): string;
    }
    
    interface Humanum {
        aetas: number;
    }
    
    class Mutante implements Xmen, Humanum {
        public aetas: number;
        
        nomen: string;
        verumNomen: string;
        potentiaMutante( id: number) {
            return `La potencia de ${this.nomen }, cuyo nombre es ${ this.verumNomen }, es de ${id}`
        }
        
    }
    
    const magento: Mutante = new Mutante();
    magento.nomen = 'Magneto';
    magento.verumNomen = 'Max Eisenhart';
    magento.aetas = 31;
    
    console.log(magento)
    
    console.log(magento.potentiaMutante( 1200 ));

    ///classes imprements interface



})()