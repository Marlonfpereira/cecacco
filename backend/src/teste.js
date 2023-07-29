const mongoose = require('mongoose');
const Pedido = require('./models/pedido.model');
const Produto = require('./models/produtos.model');

// URL de conexão com o MongoDB
const dbUrl = 'mongodb://localhost:27017/ceccaco';

// Dados de exemplo para os produtos
const produtosExemplo = [
    {
        nome: 'Produto 1',
        descricao: 'Descrição do Produto 1',
        imgs: ['imagem1.jpg', 'imagem2.jpg'],
        disponivel: true,
        quantidade: 100,
        custo: 50,
        preco: 100,
    },
    {
        nome: 'Produto 2',
        descricao: 'Descrição do Produto 2',
        imgs: ['imagem3.jpg', 'imagem4.jpg'],
        cor: true,
        cores: ['vermelho', 'azul', 'verde'],
        disponivel: true,
        quantidade: 50,
        custo: 30,
        preco: 80,
    },
    // Adicione mais produtos de exemplo aqui, se necessário
];

// Dados de exemplo para os pedidos
const pedidosExemplo = [
    {
        customerName: 'Cliente 1',
        email: 'cliente1@example.com',
        telefone: '123456789',
        totalPreco: 150,
        produtos: [
            {
                productId: '', // Aqui você deve colocar o ObjectId do produto correspondente
                quantidade: 2,
                preco: 100,
                variations: {
                    cores: 'azul',
                    tamanhos: 'M',
                },
            },
        ],
        estado: 1,
    },
    {
        customerName: 'Cliente 2',
        email: 'cliente2@example.com',
        telefone: '987654321',
        totalPreco: 160,
        produtos: [
            {
                productId: '', // Aqui você deve colocar o ObjectId do produto correspondente
                quantidade: 2,
                preco: 80,
                variations: {
                    cores: 'verde',
                    tamanhos: 'G',
                },
            },
        ],
        estado: 2,
    },
    // Adicione mais pedidos de exemplo aqui, se necessário
];

async function populateDatabase() {
    try {
        // Conecta ao MongoDB
        await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

        // Insere os produtos de exemplo no banco de dados
        const produtosInseridos = await Produto.insertMany(produtosExemplo);

        // Atualiza os objetos do pedido de exemplo com os ObjectIds dos produtos inseridos
        pedidosExemplo[0].produtos[0].productId = produtosInseridos[0]._id;
        pedidosExemplo[1].produtos[0].productId = produtosInseridos[1]._id;

        // Insere os pedidos de exemplo no banco de dados
        await Pedido.insertMany(pedidosExemplo);

        console.log('Dados de exemplo inseridos com sucesso!');
    } catch (error) {
        console.error('Erro ao inserir dados de exemplo:', error);
    } finally {
        // Fecha a conexão com o MongoDB
        mongoose.connection.close();
    }
}

// Executa o script para popular o banco de dados
populateDatabase();
