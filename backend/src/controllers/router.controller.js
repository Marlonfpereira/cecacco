const express = require('express');
const loginAdmin = require('./login.controller')
const CreateProduto = require('./produto.controller')
const router = express.Router();


// Rota para processar o login
router.post('/admin/login', (req, res) => {
    loginAdmin(req, res);
});

router.post('/admin/addProduto', (req, res) => {
    CreateProduto(req, res);
    console.log("login efetuado com sucesso");
})

module.exports = router;
