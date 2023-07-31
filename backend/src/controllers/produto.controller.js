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


const AllProdutos = async (req, res)=>{
    try {
        let produtos = await Produto.find({});
        return res.status(200).json(produtos)
    } catch (error) {
        res.send(error);
    }
}

const deleteProduto = async (req, res) => {

    let id = req.params.id;
    if (!id) {
        id = req.body.id;
    }
    try {
        await Link.findByIdAndDelete(id)
    } catch (error) {
        res.send(error);
    }
}

const getProdutoById = async (req, res) => {
  
    let id = req.params.id
    if (!id) {
        id = req.body.id;
    }
    try {
        await Link.findById(id)
    } catch (error) {
        res.send(error);
    }
}


module.exports = {CreateProduto, AllProdutos,getProdutoById , deleteProduto};