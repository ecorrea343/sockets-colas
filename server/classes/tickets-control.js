const fs = require('fs');


class TicketControl{

    constructor(){

        this.ultimo = 0;
        this.hoy = new Date().getDate();

        let data = require('../data/data.json');

        //console.log(data);
        
        if (data.hoy === this.hoy) {
            
        }else{
            this.reiniciarConteo();
        }

    }

    reiniciarConteo() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy:this.hoy
        }
    
        let jsonDataStrig = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataStrig);

        console.log('Se inicializado el sistema');
    }
}

module.exports ={
    TicketControl
}