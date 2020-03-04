const { io } = require('../server');
const { TicketControl }    = require('../classes/tickets-control');

const ticketControl = new TicketControl();


io.on('connection', (client) =>{
    
    //Funcion que permite ver el siguiente ticket en pantalla
    client.on('siguienteTicket', (data, callback) => {
        let siguiente =  ticketControl.siguiente();
        console.log(siguiente);
        callback(siguiente);
    })

    //Emitir un evento de Estado Actual
    client.emit('estadoActual', {

         actual :ticketControl.getUltimoTicket(),
         ultimos4 :ticketControl.getUltimo4Ticket(),
        
    })

       //Funcion  para atender cliente
       client.on('atenderTicket', (data, callback) =>{

        if ( !data.escritorio ) {
            return callback({
                ok:false,
                message:'El escritorio es necesario'
            })
        }

        let atender = ticketControl.atenderTicket( data.escritorio );
        console.log(atender);
        callback(atender);

        // Actualziar / notificar cambios en los ultimos 4

        

    })

})
