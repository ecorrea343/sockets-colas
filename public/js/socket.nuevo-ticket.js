
//CoMANDO PARA ESTABLECER LA CONEXION
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
})

socket.on('estadoActual' , function(respuesta){
    label.text(respuesta.actual)
    console.log(respuesta);
})

socket.on('disconnect', function(){
    console.log('Desconectado del Servidor ');
})


$('button').on('click', function (){
    socket.emit('siguienteTicket',null , function(siguienteTicket){
      
        label.text(siguienteTicket);
        
    });
})
