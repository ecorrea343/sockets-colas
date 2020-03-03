const fs = require('fs');

class TicketControl{

    constructor(){
        //Inicializacion de elementos al iniciar el servidor 
        this.ultimo = 0; // Utimo ticket 
        this.hoy    = new Date().getDate(); // la fecha de hoy 
        let data    = require('../data/data.json'); // la data que se encuentra en el Json
        
        (data.hoy === this.hoy) ? this.ultimo = data.ultimo : this.reiniciarConteo();
        

    }

    siguiente(){

        this.ultimo += 1;
        this.grabarArchivo();
        return `Ticket ${ this.ultimo }  `
    
    }

    getUltimoTicket(){

        return `Ticket ${ this.ultimo }`

    }

    reiniciarConteo() {
    
        this.ultimo = 0;
        console.log('Se ha inicializado el Sistema');
        this.grabarArchivo();
    
    }

    grabarArchivo(){

        let jsonData = {
            ultimo: this.ultimo,
            hoy   : this.hoy
        }
    
        let jsonDataStrig = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataStrig);

    }
}

module.exports ={
    TicketControl
}