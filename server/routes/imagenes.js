const express = require('express');
const path = require('path');
const fs = require('fs');

const { verificaTokenUrl, verificaToken } = require('../middlewares/autenticacion');

let app = express();


app.get('/imagen/:tipo/:img', verificaTokenUrl, (req, res) => {

    let tipo = req.params.tipo;
    let img = req.params.img;

    let pathImage = path.resolve(__dirname, `../../uploads/${tipo}/${img}`);

    if (fs.existsSync(pathImage)) {
        res.sendFile(pathImage);
    } else {
        let noImagePath = path.resolve(__dirname, '../assets/no-image.jpg');
        res.sendFile(noImagePath);
    }
});





module.exports = app;