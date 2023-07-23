const mongoose = require('mongoose');
const Pedido = require('./models/pedido.model');
const Produto = require('./models/produtos.model');

async function inserirProdutosNoPedido() {
    try {
        // Crie alguns objetos de produto usando o modelo Produto


        // Crie um objeto de pedido com alguns produtos usando o modelo Pedido
        const pedido = new Pedido({
            customerName: 'João',
            email: 'joao@example.com',
            telefone: '(99) 99999-9999',
            totalPreco: 70.0,
            produtos: [
                {
                    productId: '64bda1db281d4ea90d8af607', // Use o ID do produto criado anteriormente
                    quantidade: 2,
                    preco: produto1.preco,
                    variations: [
                        { cores: 'Azul', tamanhos: 'M' },
                        { cores: 'Vermelho', tamanhos: 'L' },
                    ],
                },
                {
                    productId: '64bda1db281d4ea90d8af607', // Use o ID do outro produto criado anteriormente
                    quantidade: 1,
                    preco: produto2.preco,
                    variations: [
                        { cores: 'Preto', tamanhos: 'Único' },
                    ],
                },
            ],
        });

        // Salve o pedido no banco de dados
        await pedido.save();

        console.log('Produtos e pedido inseridos com sucesso!');
    } catch (error) {
        console.error('Erro ao inserir produtos e pedido:', error);
    } finally {
        // Encerre a conexão com o banco de dados
        mongoose.disconnect();
    }
}


module.exports = inserirProdutosNoPedido;