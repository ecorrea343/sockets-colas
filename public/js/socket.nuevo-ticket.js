
//COMANDO PARA ESTABLECER LA CONEXION
var socket = io();

//Al usar cosntantemente un elemento de html , node recomienda hacerle una referencia como lo estamos haciendo ahora de un elemento
var label = $('#lblNuevoTicket');

//Socket que permite saber cuandoe estamoas conectados al servidor
socket.on('connect', function(){
    console.log('Conectado al servidor');
})

//Socket que permite ver el ultimo Ticket emitido y almacenado en  data.json
socket.on('estadoActual' , function(respuesta){
    label.text(respuesta.actual)
    console.log(respuesta);
})

//Socket que permite ver cuando un ususario esta desconectado 
socket.on('disconnect', function(){
    console.log('Desconectado del Servidor ');
})

// btono que llama a los eventows para crear nuevos tickets
$('button').on('click', function (){
    socket.emit('siguienteTicket',null , function(siguienteTicket){
      
        label.text(siguienteTicket);
        
    });
})
