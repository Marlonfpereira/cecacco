<template>
  <header class="header">
    <div class="title">
      <img class="imgLogo" src="@/assets/logo.svg" alt="logoCA"/>
      <div>
        <h1 class="name">CACCo</h1>
        <h5>Administrador</h5>
      </div>
    </div>
    <nav class="nav">
      <a href="catalogo" v-if="isLogged" class="button">Log out</a>
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
@font-face {
  font-family: Inter;
  src: url('../assets/Inter-Regular.ttf');
}

@font-face {
  font-family: Inter;
  font-weight: bold;
  src: url('../assets/Inter-Bold.ttf');
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

.imgLogo {
  width: auto;
  height: 14vh;
  margin-left: 10px;
}

.title {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.2em;
}

.title h1 {
  margin: 0;
  font-weight: 400;
  margin-left: .6rem;
}

.title h5 {
  font-family: 'Inter', Inter;
  font-weight: lighter;
  margin: 0;
  margin-left: 1rem;
}

.nav {
  align-items: center;
  display: flex;
  font-size: 1.3em;
  flex-basis: 20%;
  justify-content: flex-end;
  margin-right: 2em;
}

.button {
  border: 2px solid #307ABD;
  border-radius: 10px;
  color: whitesmoke;
  padding: 10px;
  text-align: center;
  text-decoration: none;
}

.button:hover {
  background-color: #d9d9d9;
  color: black;
}

</style>
