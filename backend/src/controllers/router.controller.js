const express = require('express');
const loginAdmin = require('./login.controller')
const router = express.Router();

// Rota para a página de login
// router.get('/admin/login', (req, res) => {
//     res.sendFile('login.html', { root: __dirname });
// });

// Rota para processar o login
router.post('/admin/login', (req, res) => {
    // loginAdmin(req, res);
    console.log("login efetuado com sucesso")
    // res.sendFile('login.html', { root: __dirname });
    return res.status(200).json({mensagem: 'ola'})
});

module.exports = router;
