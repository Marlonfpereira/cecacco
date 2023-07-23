
import Api from './Api'

export default {
    /**
     * Método responsável por realizar um novo login 'User'
     * (POST): localhost:3000/api/v1/login
     */
    async createProduto(produto) {
        try {
            await Api().post('/admin/addProduto', produto)
        } catch (error) {
            this.$router.push('/erro')
        }
    }
}