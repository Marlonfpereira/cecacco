<template>
  <div>
    <HeaderClient></HeaderClient>
    <main>
      <section class="menu">
        <div class="listaProd scroll">
          <div class="produto" v-for="prod in listaProdutos" :key="prod.index">
            <div class="info">
              <img :src="prod.imgs[0]" alt="imagemProduto">
              <span>{{ prod.nome }}</span>
              <span v-if="prod.tamanho == true">{{ prod.tamanho }} </span>
              <span v-if="prod.cor == true">{{ prod.cor }} </span>
              <button class="quantidade" v-on:click="menos(0)">-</button>
              <span id="quanti">{{ prod.quant }}<span> </span></span>
              <button class="quantidade" v-on:click="mais(0)">+</button>
              <button id="remover" v-on:click="remove(0)">remover</button>
            </div>
          </div>
        </div>
        <div class="conta">
          <span>Subtotal</span>
          <span class="subtotal">R$12,00</span>
          <button class="add">Adicionar mais itens</button>
          <button class="finalizar">Finalizar Pedido</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import { Produto } from '@/models/Produto.js'

let produto = new Produto()
produto.imgs.push('https://http2.mlstatic.com/caneca-branca-porcelana-resinada-aaa-sublimaco-48-unds-orca-D_NQ_NP_869418-MLB31100747149_062019-F.jpg')
produto.nome = 'teste'
produto.index = 'a'
produto.custo = 50.5
produto.preco = 79.9
produto.quant = 3
produto.disp = true

var lista = []
lista.push(produto)
produto.index = 'b'
lista.push(produto)
produto.index = 'c'
lista.push(produto)
lista.push(produto)
lista.push(produto)
lista.push(produto)
lista.push(produto)
lista.push(produto)

export default {
  name: 'Produtos',
  components: {
    HeaderClient
  },
  props: ['lista'],
  data() {
    return {
      listaProdutos: lista
    }
  },

  methods: {
    menos(index) {
      if (this.listaProdutos[index].quant > 0) {
        this.listaProdutos[index].quant -= 1;
      }
    },
    mais(index) {
      this.listaProdutos[index].quant += 1;
    },
    remove(index) {
      this.listaProdutos.pop(index);
    }
  }
}



</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
}

.add {
  border-radius: 30px;
  border: 2px solid #D9D9D9;
  background: #808080;
}
.add, .finalizar {
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
}

.conta {
  background: whitesmoke;
  border-radius: 10px;
  border: 1px groove #d9d9d9;
  box-sizing: border-box;
  color: #000;
  display: flex;
  flex-direction: column;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  gap: 5px;
  margin: 2em;
  padding: 35px 71px 53px 46px;
  src: url("../fonts/Inter-Regular.ttf");
  text-align: center;

}
.finalizar {
  border-radius: 30px;
  border: 2px solid #D9D9D9;
  background: #307ABD;
}

.menu {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: 'Inter', Inter;
  font-weight: 100;
  flex-basis: 70%;
  height: 72vh;
  margin: 2em;
  padding: 0 2em;
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

#remover {
  background-color: whitesmoke;
  border: none;
  color: #000;
  font-family: Inter;
  font-size: 17px;
  text-decoration-line: underline;
}


.listaProd {
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

.subtotal {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.titulo,
.titulo h1 {
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

.quantidade {
  border: none;
  border-radius: 50%;
  background-color: #D9D9D9;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
}

</style>
