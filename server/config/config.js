// 
// PUERTO
//
process.env.PORT = process.env.PORT || 3000;

// 
// ENTORNO
// 
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// 
// BASE DE DATOS
// 
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {

    try {
        urlDB = process.env.MONGO_URI;
    } catch (error) {
        console.log(error);
    }
}
process.env.URLDB = urlDB;


// 
// Vencimiento del token
// 
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// 
// SEED de autenticacion
//

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';