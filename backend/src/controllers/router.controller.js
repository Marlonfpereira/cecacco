const express = require('express');
const loginAdmin = require('./login.controller')
const ProdutoControle = require('./produto.controller')
const PedidoControle = require('./pedidos.controller');
const router = express.Router();


// Rota para processar o login
router.post('/admin/login', loginAdmin);

router.post('/admin/addProduto',  ProdutoControle.CreateProduto)

router.get('/catalogo', ProdutoControle.AllProdutos)

router.get('/admin/gerenciaEstoque', ProdutoControle.AllProdutos)

router.get('/admin/pedidos', PedidoControle.AllPedidos);
router.patch('/admin/pedidos/:id', PedidoControle.UpdatePedido);

module.exports = router;
