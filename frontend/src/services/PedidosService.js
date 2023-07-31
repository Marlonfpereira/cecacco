import Api from "./Api";


export default {
    async showAllPedidos() {
        try {
            return (await Api().get('/admin/pedidos')).data
        } catch (error) {
            this.$router.push('/erro')
        }
    },
    async updatePedido(id,status) {
        try {
            let newStatus = {
                estado: status
            }
            return (await Api().patch(`/admin/pedidos/${id}`, newStatus)).data
        } catch (error) {
            this.$router.push('/erro')
        }
    },
    async getPedido(id){
        try {
            return (await Api().get(`/admin/pedidos/${id}`)).data
        } catch (error) {
            this.$router.push('/erro')
        }
    },
    async newPedido(pedido) {
        try {
            await Api().post('/newPedido', pedido)
        } catch (error) {
            this.$router.push('/erro')
        }
    },
    
}