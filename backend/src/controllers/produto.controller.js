const express = require('express');
const Produto = require('../models/produtos.model');
const router = express.Router();


const CreateProduto = async (req, res) => {

    let produto = new Produto(req.body)

    try {
        console.log(produto);
        let doc = await produto.save()
        return res.status(200).json({ message: 'Produto cadrastrado' });
    } catch (error) {
        console.error('Erro no servidor:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

module.exports = CreateProduto;