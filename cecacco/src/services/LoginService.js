/**
 * file: src/services/LoginService.js
 * data: 13/05/2021
 * description: arquivo responsável pelos métodos de requisições das APIs via
 * HTTP - 'Login'
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import Api from './Api';

export default {
    /**
     * Método responsável por realizar um novo login 'User'
     * (POST): localhost:3000/api/v1/login
     */
    async loginUser(user) {
        try {
            const response = await Api().post('/admin/login', user);
        } catch (error) {
            this.$router.push('/');
        }
    },
};