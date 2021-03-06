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
process.env.CADUCIDAD_TOKEN = '72h';

// 
// SEED de autenticacion
//
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// 
// Google client ID
//
process.env.CLIENT_ID = process.env.CLIENT_ID || '854996978971-1ass5aeqs7b67paciquukigoq2rdem3e.apps.googleusercontent.com';