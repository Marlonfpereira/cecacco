const Pedido = require('../models/pedido.model');

const AllPedidos = async (req, res) => {
    try {
        let pedidos = await Pedido.find({});
        res.status(200).json(pedidos);
        return res;
    } catch (error) {
        return res.status(500).json(error);
    }
}

const UpdatePedido = async (req, res) => {
    try {
        // Considera que o id está no parâmetro da rota (/rota/:id) e o novo estado está em req.body.status
        console.log("OLá",req.body.estado)

        await Pedido.findByIdAndUpdate(req.params.id, { estado: req.body.estado });
        return res.status(200).json(req.body.estado);
    } catch (error) {
        return res.status(500).json(error);
    }
}



const CreatePedido = async (req, res) => {
    let pedido = new Pedido(req.body)
    console.log(pedido);

    try {
        let doc = await pedido.save()
        return res.status(200).json({ message: 'Produto cadrastrado' });
    } catch (error) {
        console.error('Erro no servidor:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
};

const getPedidoById = async (req, res) => {

   let idPedido = req.params.id
    try {
        let pedido = await Pedido.findById(idPedido);
        return res.status(200).json(pedido);
    } catch (error) {
        return res.status(500).json(error);
    }
}
module.exports = { AllPedidos,CreatePedido, UpdatePedido, getPedidoById };