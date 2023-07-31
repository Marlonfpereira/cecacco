<template>
  <div>
    <HeaderClient></HeaderClient>
    <main class="menu">
      <div class="produto" v-for="prod in listaProdutos" :key="prod.index" v-on:click="abrirProduto(prod)">
        <img class="img" :src="prod.imgs[0]" alt="imagemProduto">
        <span class="nome">{{ prod.nome }}</span>
        <span class="preco">R$ {{ prod.preco }}</span>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import { Produto } from '@/models/Produto.js'
import ProdutosService from '../services/ProdutosService'

// let a = new Produto()

// a.imgs.push('https://http2.mlstatic.com/caneca-branca-porcelana-resinada-aaa-sublimaco-48-unds-orca-D_NQ_NP_869418-MLB31100747149_062019-F.jpg')
// a.index = 'a123'
// a.custo = 50.5
// a.nome = 'teste'
// a.preco = 10
// a.quant = 3
// a.disp = true
// a.cor = true
// a.cores = ['Azul', 'Preto', 'Branco']
// a.tamanho = true
// a.tamanhos = ['p', 'm', 'g']

var lista = []
// lista.push(Object.assign({}, a))
// a.nome = 'Caneca'
// a.preco = 20
// lista.push(a)
// lista.push(a)
// lista.push(a)
// lista.push(a)
// lista.push(a)
// lista.push(a)
// lista.push(a)
// lista.push(a)
// lista.push(a)
// lista.push(a)
// lista.push(a)

// DISABLED
await ProdutosService.showAllProdutos().then((data) => {
  data.forEach(element => {
    var produto = new Produto()
    // produto.nome = element.nome
    // produto.index = element._id
    // produto.imgs = element.imgs
    // produto.custo = element.custo
    // produto.preco = element.preco
    // produto.quant = element.quantidade
    // produto.disp = element.disponivel
    produto.nome = element.nome
    produto.descricao = element.descricao
    produto.index = element._id
    produto.imgs = element.imgs
    produto.cor = element.cor
    produto.cores = element.cores
    produto.tamanho = element.tamanho
    produto.tamanhos = element.tamanhos
    produto.disponivel = element.disponivel
    produto.quant = 1 //aq sempre tem q ser 1
    produto.preco = element.preco
    lista.push(Object.assign({}, produto))
  });
})

export default {
  setup() {
    let a = new Produto()

    a.imgs.push('https://http2.mlstatic.com/caneca-branca-porcelana-resinada-aaa-sublimaco-48-unds-orca-D_NQ_NP_869418-MLB31100747149_062019-F.jpg')
    a.index = 'a123'
    a.custo = 50.5
    a.nome = 'teste'
    a.preco = 10
    a.quant = 3
    a.disp = true
    a.cor = true
    a.cores = ['Azul', 'Preto', 'Branco']
    a.tamanho = true
    a.tamanhos = ['p', 'm', 'g']

    localStorage.setItem('produtoAtual', JSON.stringify(a))
  },
  name: 'Catalogo',
  components: {
    HeaderClient: HeaderClient
  },
  data() {
    return {
      listaProdutos: lista
    }
  },
  methods: {
    abrirProduto(prod) {
      localStorage.setItem('produtoAtual', JSON.stringify(prod))
      this.$router.push({ name: 'InfoProduto', params: { id: prod.index } })
    }
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
  border-radius: 10px;
  border: 1px groove #d9d9d9;
  box-sizing: border-box;
  color: #000;
  column-gap: 5%;
  display: grid;
  flex-wrap: wrap;
  font-family: Inter;
  font-size: 22px;
  font-weight: 400;
  grid-row-gap: 1em;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  margin: 2em;
  min-height: 72vh;
  padding: 2% 5%;
  src: url("../fonts/Inter-Regular.ttf");
  text-align: center;
}

.preco {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.produto {
  background-color: whitesmoke;
  border: solid 1px #808080;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.produto:hover {
  border-color: #307abd;
}

.img {
  background-color: whitesmoke;
  color: whitesmoke;
  width: 100%;
}
</style>
