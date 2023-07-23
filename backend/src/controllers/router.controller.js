const express = require('express');
const loginAdmin = require('./login.controller')
const ProdutoControle = require('./produto.controller')
const router = express.Router();


// Rota para processar o login
router.post('/admin/login', (req, res) => {
    loginAdmin(req, res);
});

router.post('/admin/addProduto', (req, res) => {
    ProdutoControle.CreateProduto(req, res);
})

router.get('./admin/gerenciaEstoque',(req, res) => {
    ProdutoControle.AllProdutos(req,res);
    console.log(res)
})



module.exports = router;
