const { io } = require('../server');
const { TicketControl }    = require('../classes/tickets-control');

const ticketControl = new TicketControl();

io.on('connection', ( client ) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario:'Administrador',
        mensaje:'Bienvenido a la Aplicacion'
    })

    client.on('disconnect', () =>{
        console.log('Usuario desconectado');
    })

    //Escuchar Cliente
    client.on('enviarMensaje', ( data, callback) => {

        console.log( data );

        client.broadcast.emit('enviarMensaje' , data);

        // if (mensaje.usuario) {
        // return callback({
        //         resp:'TODO SALIO BIEN'
        //     })
            
        // }
        // callback({
        //    resp:'TODO SALIO MAL'
        // });

    } )
})
