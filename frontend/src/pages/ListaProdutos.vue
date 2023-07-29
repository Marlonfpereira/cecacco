<template>
  <div>
    <HeaderAdm :is-logged="true"></HeaderAdm>
    <main>
      <a class="return" href="./admin"><img src="@/assets/voltar.svg" alt="return"></a>
      <section class="menu">
        <div class="titulo">
          <h1>Produtos</h1>
        </div>
        <div class="scroll">
          <div class="produto" v-for="prod in listaProdutos" :key="prod.index">
            <div class="info">
              <img :src="prod.imgs[0]" alt="imagemProduto">
              <span>{{ prod.nome }}</span>
            </div>
            <div class="valores">
              <div class="atributos">
                <span>Preço de Custo</span>
                <span class="valor">R${{ prod.custo }}</span>
              </div>
              <div class="atributos">
                <span>Preço de Venda</span>
                <span class="valor">R${{ prod.preco }}</span>
              </div>
              <div class="atributos">
                <span>Quantidade</span>
                <span class="valor">{{ prod.quant }}</span>
              </div>
              <div class="atributos">
                <span>Disponível</span>
                <input type="checkbox" v-model="prod.disp">
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderAdm from '@/components/HeaderAdm.vue'
import ProdutosService from '../services/ProdutosService'
import { Produto } from '@/models/Produto.js'

var lista = []

await ProdutosService.showAllProdutos().then((data) => {
  data.forEach(element => {
    var produto = new Produto()
    produto.nome = element.nome
    produto.index = element._id
    produto.imgs = element.imgs
    produto.custo = element.custo
    produto.preco = element.preco
    produto.quant = element.quantidade
    produto.disp = element.disponivel
    lista.push(produto)
  });
})

export default {
  name: 'Produtos',
  components: {
    HeaderAdm
  },
  data () {
    return {
      listaProdutos: lista
    }
  }
}

</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
}

.return {
  margin: 2em 0 0 0;
  height: fit-content;
}

.return:hover {
  filter: invert(.1);
  transition: .2s ease-in-out;
}

.return img {
  height: 40px;
}

.menu {
  background: whitesmoke;
  border: 1px groove #d9d9d9;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: 'Inter', Inter;
  font-weight: 100;
  flex-basis: 70%;
  height: 72vh;
  margin: 2em;
  padding: 0 2em;
}
.scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  height: calc(72vh - 6em);
}

.scroll::-webkit-scrollbar {
  display: none;
}

.titulo, .titulo h1 {
  margin: .5em 0;
}

.produto {
  border-bottom: 2px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  padding: .5em 2em;
}

.info {
  align-items: center;
  display: flex;
  justify-self: flex-start;
}
.info img {
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 4em;
}

.info span {
  font-weight: bold;
  margin-left: 1em;
}

.valores {
  align-items: center;
  column-gap: .4em;
  display: grid;
  font-size: .8em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 70%;
}

.atributos {
  display: flex;
  flex-direction: column;
  pointer-events: none;
  text-align: center;
}

.valor {
  font-weight: bold;
  font-size: 1em;
}

</style>
