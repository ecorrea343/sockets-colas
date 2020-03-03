const { io } = require('../server');
const { TicketControl }    = require('../classes/tickets-control');

const ticketControl = new TicketControl();


io.on('connection', (client) =>{
    
    //Funcion que permite ver el siguiente ticket en pantalla
    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente();
        console.log(siguiente);
        callback(siguiente);
    })

    //Emitir un evento de Estado Actual
    client.emit('estadoActual', {

         actual :ticketControl.getUltimoTicket()
        
    } )

})
