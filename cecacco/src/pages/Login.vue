<template>
  <div>
    <HeaderAdm :is-logged="false"></HeaderAdm>
    <main class="menu">
      <form class="form" v-on:submit.prevent="loginSubmitUserForm()">
        <label for="username">Nome de Usuário:</label>
        <input type="text" name="username" id="username" v-model="loginForm.username">
        <label for="password">Senha:</label>
        <input type="password" name="password" id="password" v-model="loginForm.password">

        <button @click="submitLoginUser">
          Entrar
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import HeaderAdm from '@/components/HeaderAdm.vue'
import LoginService from '@/services/LoginService'
export default {
  name: 'Login',
  components: {
    HeaderAdm
  },
  data () {
    return {
      loginForm: {
        username: null,
        password: null
      },
      isSubmitted: false
    }
  },
  methods: {
    async submitLoginUser () {
      try {
        this.isSubmitted = true

        // this.$v.$touch()
        // if (this.$v.$invalid) {
        //   console.log('Valores incompletos')
        //   return
        // }
        console.log('oi')
        await LoginService.loginUser(this.loginForm)
        this.$router.push('/admin')
      } catch (error) {
        console.log('Valores incorretos')
      }
    },
    loginSubmitUserForm () {}
  }
}
</script>

<style scoped>
.menu {
  background: whitesmoke;
  border: 1px groove #d9d9d9;
  border-radius: 10px;
  display: flex;
  height: 40vh;
  justify-content: space-around;
  margin: 15vh auto;
  width: 20em;
}

.form {
  display: flex;
  font-family: "Inter", Inter;
  flex-direction: column;
  justify-content: center;
}

.form input {
  border: 2px solid #307abd;
  border-radius: 10px;
  height: 2em;
  margin-bottom: 1.5em;
  width: 20em;
}

.form input:focus {
  outline: none;
}

.form button {
  align-self: center;
  background-color: #307abd;
  border: 2px solid #D9D9D9;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  width: 10em;
  text-decoration: none;
  color: whitesmoke;
}

.form button:hover {
  background: #004E94;
  border: 2px solid #32ACE2;
  border-radius: 10px;
}
</style>
