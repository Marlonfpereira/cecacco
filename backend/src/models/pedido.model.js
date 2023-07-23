const mongoose = require('mongoose');

// Crie um subesquema para representar as variações de um produto
const variacoesSchema = new mongoose.Schema({
    cores: { type: String, required: true },
    tamanhos: { type: String, required: true },
    // Outras variações que você deseja incluir
});

// Crie um subesquema para representar um produto no pedido
const productSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'produtos', required: true },
    quantidade: { type: Number, required: true },
    preco: { type: Number, required: true },
    variations: [variacoesSchema], // Array de variações do produto
});

// Crie o esquema de pedidos
const pedidoSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    totalPreco: { type: Number, required: true },
    produtos: [productSchema], 
    Data: { type: Date, default: Date.now },
}, { collection: 'pedidos' });

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido