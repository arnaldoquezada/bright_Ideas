const mongoose = require('mongoose');

const IdeasSchema = new mongoose.Schema({
    alias:{
        type: String
    },
    texto:{
        type: String,
        required: [true, 'No puede enviar un comentario vacío'],
        minLength: [10, 'Debe ingresar un comentario con minimo de 10 carácteres '],
        maxLength: [150, 'No debe exeder los 150 carácteres']
    },
    likes:[String]       
})

const Ideas = mongoose.model('Ideas', IdeasSchema);
module.exports = Ideas;