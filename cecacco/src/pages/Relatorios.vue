<template>
  <div>
    <HeaderAdm :is-logged="true"></HeaderAdm>
    <main>
      <a class="return" href="./#/admin"><img src="@/assets/voltar.svg" alt="return"></a>
      <section class="menu">
        <a>
          <p>Relatório de Vendas</p>
        </a>
        <a>
          <p>Relatório Econômico</p>
        </a>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderAdm from '@/components/HeaderAdm.vue'
export default {
  name: 'Relatorios',
  components: {
    HeaderAdm
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
}

body {
  background-color: #d9d9d9;
}

.return {
  margin: 2em 0 0 0;
}

.return:hover {
  filter: invert(.1);
  transition: .2s ease-in-out;
}

.return img {
  height: 40px;
}

.menu {
  align-items: center;
  background: whitesmoke;
  border: 1px groove #d9d9d9;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 72vh;
  justify-content: space-evenly;
  margin: 2em;
  text-align: center;
  flex-basis: 70%;
}

.menu a {
  align-items: center;
  border: 5px solid #307abd;
  border-radius: 25px;
  box-sizing: border-box;
  display: flex;
  height: fit-content;
  justify-content: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  width: 50%;
}

.menu a:hover {
  background-color: #1e3c5a;
  color: whitesmoke;
}

.menu a:hover > .imgBotao {
  filter: invert(0.9);
}

.menu a p {
  flex-basis: 60%;
  font-family: "Inter", Inter;
  font-size: 1.4em;
}

.imgBotao {
  height: 7em;
  padding: 1em;
}

</style>
