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
            return (await Api().patch(`/admin/pedidos/${id}`, status)).data
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
    }
}