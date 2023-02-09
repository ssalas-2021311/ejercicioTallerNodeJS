const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre_categoria: {
        type: String,
        required: [true, 'El nombre para la categoria es obligatorio']
    },

    nombre_subcategoria: {
        type: String
    },

    img: {
        type: String
    },

    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Categoria', CategoriaSchema)