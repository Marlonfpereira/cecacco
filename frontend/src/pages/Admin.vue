<template>
  <div>
    <HeaderAdm :is-logged="true"></HeaderAdm>
    <main class="menu">
      <a href="./#/addProduto">
        <img class="imgBotao" src="@/assets/addProduct.png" alt="Estoque" />
        <p>Adicionar Produto</p>
      </a>
      <a href="./#/produtos">
        <img class="imgBotao" src="@/assets/estoque.png" alt="Estoque" />
        <p>Gerenciar Estoque</p>
      </a>
      <a href="./#/pedidos">
        <img class="imgBotao" src="@/assets/pedidos.png" alt="Pedidos" />
        <p>Gerenciar Pedidos</p>
      </a>
      <a href="./#/relatorios">
        <img class="imgBotao" src="@/assets/relatorios.png" alt="Relatórios" />
        <p>Gerar Relatórios</p>
      </a>
    </main>
  </div>
</template>

<script>
import HeaderAdm from '@/components/HeaderAdm.vue'
export default {
  name: 'Admin',
  components: {
    HeaderAdm
  }
}
</script>

<style scoped>
body {
  margin: 0;
  background-color: #c7c7c7;
}
.menu {
  align-content: space-around;
  background: whitesmoke;
  border: 1px groove #d9d9d9;
  border-radius: 10px;
  box-sizing: border-box;
  column-gap: 5%;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  height: 72vh;
  justify-content: space-around;
  margin: 2em;
  padding: 2% 5%;
  text-align: center;
}

.menu a {
  align-items: center;
  border: 5px solid #307abd;
  border-radius: 25px;
  color: black;
  display: flex;
  flex-basis: 30%;
  height: fit-content;
  justify-content: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
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
  font-size: 1.5em;
  margin: 0;
  text-decoration: none;
}

.imgBotao {
  height: 5em;
  padding: 1em;
}

</style>
