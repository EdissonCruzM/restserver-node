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
        urlDB = 'mongodb+srv://edicruz9813:pxZFji02c9iaq8h4@cluster0.x22n7.mongodb.net/cafe?retryWrites=true&w=majority';
    } catch (error) {
        console.log(error);
    }
}

process.env.URLDB = urlDB;