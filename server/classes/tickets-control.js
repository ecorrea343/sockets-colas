const fs = require('fs');

class Ticket{

    constructor( numero, escritorio ){

        this.numero     = numero;
        this.escritorio = escritorio

    }

}

class TicketControl{

    constructor(){
        //Inicializacion de elementos al iniciar el servidor 
        this.ultimo  = 0; // Utimo ticket 
        this.hoy     = new Date().getDate(); // la fecha de hoy 
        this.tickets = [];

        let data     = require('../data/data.json'); // la data que se encuentra en el Json
        
        if(data.hoy === this.hoy) { 
         
            this.ultimo  = data.ultimo;
            this.tickets = data.tickets; 
        
        } else{

             this.reiniciarConteo();
        
        }
    }

    siguiente(){

        this.ultimo += 1;

        let ticket = new Ticket( this.ultimo, null );
        this.tickets.push(ticket);

        this.grabarArchivo();
        return `Ticket ${ this.ultimo }  `
    
    }

    getUltimoTicket(){

        return `Ticket ${ this.ultimo }`

    }

    reiniciarConteo() {
    
        this.ultimo  = 0;
        this.tickets = [];
        console.log('Se ha inicializado el Sistema');
        this.grabarArchivo();
    
    }

    grabarArchivo(){

        let jsonData = {

            ultimo  : this.ultimo,
            hoy     : this.hoy,
            tickets : this.tickets
        }
    
        let jsonDataStrig = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataStrig);

    }
}

module.exports ={

    TicketControl

}