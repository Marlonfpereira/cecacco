<template>
  <header class="header">
    <div class="title">
      <img class="imgLogo" src="@/assets/logo.svg" alt="logoCA" width={300} height={300} />
      <h1 class="name">CACCo</h1>
    </div>
    <nav class="nav">
      <a href="/catalogo" id="catalogo" class="button">Catálogo</a>
      <a href="/carrinho" id="carrinho" class="button">
        <img class="carrinho" src="@/assets/carrinho.svg" alt="Carrinho" fit />
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderAdm',
  props: ['isLogged']
}
</script>

<style scoped>
body {
  margin: 0;
}

.header {
  align-items: center;
  background-color: #1E3C5A;
  border-bottom: 5px solid #307ABD;
  color: whitesmoke;
  display: flex;
  font-family: 'Comfortaa', Comfortaa;
  height: 15vh;
  justify-content: space-between;
}

.title {
  align-items: center;
  display: flex;
  font-size: 1.6em;
}

.imgLogo {
  width: 90px;
  height: 90px;
  margin: 10px;
}

.nav {
  align-items: center;
  display: flex;
  font-size: 1.3em;
  flex-basis: 20%;
  justify-content: space-around;
  margin-right: 2em;
}

.button {
  border: 2px solid #307ABD;
  border-radius: 10px;
  color: whitesmoke;
  padding: .5em;
  text-align: center;
  text-decoration: none;
}

.button:hover {
  background-color: #d9d9d9;
  color: black;
}

#carrinho {
  padding: .2em .5em;
}

.carrinho {
  width: 1.5em;
}
</style>
