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
        this.ultimos4 = [];

        let data     = require('../data/data.json'); // la data que se encuentra en el Json
        
        if(data.hoy === this.hoy) { 
         
            this.ultimo   = data.ultimo;
            this.ultimos4 = data.ultimos4;
            this.tickets  = data.tickets; 
        
        } else{

             this.reiniciarConteo();
        
        }
    }

    siguiente(){

        this.ultimo += 1;

        let ticket = new Ticket( this.ultimo, null );
        this.tickets.push(ticket);

        this.grabarArchivo();
        return `Ticket: ${ this.ultimo }  `
    
    }

    getUltimoTicket(){

        return `Ticket: ${ this.ultimo }`

    }

    getUltimo4Ticket(){

        return this.ultimos4;

    }

    atenderTicket( escritorio ){// Recibo un escritiroi 1,2,3 , el qeu sea

        if ( this.tickets.length === 0 ) {//Aqui verifico ticket que atender
            return 'No hay tickets';   
        }

        let numeroTicket = this.tickets[0].numero;//Extraigo el numero para romper la realcion en Jascript
        this.tickets.shift();// Comando para eliminar la primera posicion del arreglo.

        let atenderTicket = new Ticket( numeroTicket, escritorio );//Luego creo un nuevo ticket qeu el que voy a atender que tiene el numero de ticket y el escritorio.

        this.ultimos4.unshift( atenderTicket ); //intruccion agregando el ticket  al inicio del arreglo.

        if ( this.ultimos4.length > 4 ) {//Aqui verifico que hayan solo 4 tickets en ese arreglo
            this.ultimos4.splice(-1,1)// borra el ultimo.
        }
        console.log('Ultimos 4');
        console.log( this.ultimos4 );

        this.grabarArchivo();

        return atenderTicket;

    }

    reiniciarConteo() {
    
        this.ultimo  = 0;
        this.tickets = [];
        this.ultimos4 = [];
        console.log('Se ha inicializado el Sistema');
        this.grabarArchivo();
    
    }

    grabarArchivo(){

        let jsonData = {

            ultimo  : this.ultimo,
            hoy     : this.hoy,
            tickets : this.tickets,
            ultimos4: this.ultimos4
        }
    
        let jsonDataStrig = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataStrig);

    }
}

module.exports ={

    TicketControl

}