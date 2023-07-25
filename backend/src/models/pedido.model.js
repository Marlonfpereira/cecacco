const mongoose = require('mongoose');

// Crie um subesquema para representar as variações de um produto
const variacoesSchema = new mongoose.Schema({
    cores: { type: String, required: true, default: "" },
    tamanhos: { type: String, required: true, default: ""},
    // Outras variações que você deseja incluir
});

// Crie um subesquema para representar um produto no pedido
const productSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'produtos', required: true },
    quantidade: { type: Number, required: true },
    preco: { type: Number, required: true },
    variations: variacoesSchema, // Array de variações do produto
});

// Crie o esquema de pedidos
const pedidoSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    totalPreco: { type: Number, required: true },
    produtos: [productSchema],
    Data: { type: Date, default: Date.now },
    // Estados possíveis:
    // 0 - Cancelado
    // 1 - Pendente
    // 2 - Comunicado
    // 3 - Pago
    // 4 - Entregue
    estado: { type: Number, min: 0, max: 4, required: true},
}, { collection: 'pedidos' });

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido