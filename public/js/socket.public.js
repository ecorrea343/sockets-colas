var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1,lblTicket2,lblTicket3,lblTicket4];
var lblEscritorios = [lblEscritorio1,lblEscritorio2,lblEscritorio3,lblEscritorio4];

socket.on('estadoActual', function(data){
    
    console.log(data);

    actualizaHTML(data.ultimos4);

    // lblTicket1.text( data.actual);
    // lblEscritorio1.text( 'Escritorio ' + data.ultimos4[0].escritorio )

    // lblTicket2.text( 'Ticket '+data.ultimos4[1].numero);
    // lblEscritorio2.text('Escritorio '+ data.ultimos4[1].escritorio);

    // lblTicket3.text( 'Ticket '+data.ultimos4[2].numero);
    // lblEscritorio3.text('Escritorio '+ data.ultimos4[2].escritorio);
    
    // lblTicket4.text( 'Ticket '+data.ultimos4[3].numero);
    // lblEscritorio4.text('Escritorio '+ data.ultimos4[3].escritorio);


})

function actualizaHTML(ultimos4){

    for (let i = 0; i <= ultimos4.length -1; i++) {
        
        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
        
    }

}