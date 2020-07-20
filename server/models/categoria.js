const mongoose = require('mongoose');
const schema = mongoose.Schema;

let categoriaSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'La descripcion es necesaria']
    },
    usuario: {
        type: schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

module.exports = mongoose.model('Categoria', categoriaSchema);