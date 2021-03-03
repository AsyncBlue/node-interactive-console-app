const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = ( data  ) => {

    fs.writeFileSync( archivo, JSON.stringify( data ) ); // JSON.stringify transforma en un string valido la data

}

const leerDB = () => {

    if( !fs.existsSync( archivo ) ) {
        return null;
    }

    const info = fs.readFileSync( archivo, { encoding: 'utf-8' } );
    const data = JSON.parse( info ); // JSON.parse proceso opuesto a stringify, transforma el string a un objeto

    return data;

}

module.exports = {
    guardarDB,
    leerDB
}