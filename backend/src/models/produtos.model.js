const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    index: {
        type: String,
        required: true
    },
    imgs: {
        type: [String],
        required: true
    },
    cor: {
        type: Boolean,
        default: false
    },
    tamanho: {
        type: Boolean,
        default: false
    },
    cores: {
        type: [String],
        default: []
    },
    tamanhos: {
        type: [String],
        default: []
    },
    disponivel: {
        type: Boolean,
        default: false
    },
    quantidade: {
        type: Number,
        default: 0
    },
    custo: {
        type: Number,
        default: 0
    },
    preco: {
        type: Number,
        default: 0
    },
},
    { collection: 'produtos' });

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;

