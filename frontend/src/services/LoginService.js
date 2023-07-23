

import Api from './Api'

export default {
  /**
   * Método responsável por realizar um novo login 'User'
   * (POST): localhost:3000/api/v1/login
   */
  async loginUser (user) {
    try {
      await Api().post('/admin/login', user)
    } catch (error) {
      this.$router.push('/erro')
    }
  }
}
