const Pedido = require('../models/pedido.model');

const AllPedidos = async (req, res) => {
    try {
        let pedidos = await Pedido.find({});
        return res.status(200).json(pedidos);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const UpdatePedido = async (req, res) => {
    try {
        // Considera que o id está no parâmetro da rota (/rota/:id) e o novo estado está em req.body.status
        await Pedido.findByIdAndUpdate(req.params.id, { estado: req.body.estado });
        return res.status(200).json(req.body.estado);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { AllPedidos, UpdatePedido };