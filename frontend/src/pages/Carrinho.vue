<template>
  <div>
    <HeaderClient></HeaderClient>
    <main>
      <section class="menu">
        <div class="listaProd scroll">
          <div class="produto" v-for="prod in listaProdutos" :key="prod.index">
            <div class="atributos">
              <img :src="prod.imgs[0]" alt="imagemProduto">
              <div class="mais">
                <span>{{ prod.nome }}</span><br>
                <span id="adicional" v-if="prod.tamanho != false">{{ prod.tamanho }} </span>
                <span id="adicional" v-if="prod.cor != false">{{ prod.cor }} </span>
              </div>
            </div>
            <div class="gerenciarquant">
              <div class="quantidade">
                <button v-on:click="menos(prod)">-</button>
                <input type="number" id="quanti" v-model="prod.quant" readonly>
                <button v-on:click="mais(prod)">+</button>
              </div>
              <button id="remover" v-on:click="remove(prod)">remover</button>
            </div>
          </div>
        </div>
        <div class="conta">
          <div>
            <span>Subtotal</span>
            <span class="subtotal">R${{ this.preco }}</span>
          </div>
          <div>
            <a class="add" href="/catalogo">Adicionar mais itens</a>
            <a class="finalizar" href="/formulario">Finalizar Pedido</a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import { ref } from 'vue'

export default {
  setup() {
    var listaProdutos = ref({})
    var preco = 0
    if (localStorage.carrinho) {
      listaProdutos.value = JSON.parse(localStorage.getItem('carrinho'))
      listaProdutos.value.forEach(produto => {
        preco += produto.preco
      });
      preco = parseFloat(preco.toFixed(2))
    }
    return { listaProdutos, preco }
  },
  name: 'Produtos',
  components: {
    HeaderClient
  },
  data() {
    return {
      subtotal: 0
    }
  },

  methods: {
    menos(prod) {
      if (prod.quant > 1) {
        prod.quant -= 1;
        localStorage.setItem('carrinho', JSON.stringify(this.listaProdutos))
        this.preco -= prod.preco
        this.preco = parseFloat(this.preco.toFixed(2))
      }
    },
    mais(prod) {
      prod.quant += 1;
      localStorage.setItem('carrinho', JSON.stringify(this.listaProdutos))
      this.preco += prod.preco
      this.preco = parseFloat(this.preco.toFixed(2))
    },
    remove(prod) {
      if (confirm("Remover item do carrinho?")) {
        console.log(this.listaProdutos.indexOf(prod))
        this.listaProdutos.splice(this.listaProdutos.indexOf(prod), 1)
        localStorage.setItem('carrinho', JSON.stringify(this.listaProdutos))
        for (let i = 0; i < prod.quant; i++) {
          this.preco -= prod.preco
        }
        this.preco = parseFloat(this.preco.toFixed(2))
      }
    }
  }
}



</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
}

.menu {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: 'Inter', Inter;
  font-weight: 100;
  flex-basis: 85%;
  height: 72vh;
  margin-top: 3em;
}

.listaProd {
  background: whitesmoke;
  border: 1px groove #d9d9d9;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: 'Inter', Inter;
  font-weight: 100;
  flex-basis: 70%;
  margin-right: 3em;
  padding: 0 2em;
}

.scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
}

.scroll::-webkit-scrollbar {
  display: none;
}

.produto {
  border-bottom: 2px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  padding: .5em 2em;
}

.atributos {
  align-items: center;
  display: flex;
  justify-self: flex-start;
}

.atributos img {
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 4em;
}

.atributos span {
  font-weight: bold;
  margin-left: 1em;
}

#adicional {
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.gerenciarquant {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.quantidade {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.quantidade button {
  border: none;
  border-radius: 50%;
  background-color: #D9D9D9;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  width: 1.5em;
}

#quanti {
  background-color: whitesmoke;
  border: none;
  text-align: center;
  width: 2em;
}

#remover {
  background-color: whitesmoke;
  border: none;
  color: #000;
  font-family: Inter;
  font-size: 17px;
  text-decoration-line: underline;
}

.conta {
  align-items: center;
  background: whitesmoke;
  border-radius: 10px;
  border: 1px groove #d9d9d9;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
  padding: 2em 0;
  text-align: center;
  width: 30vw;
  height: 45vh;
}

.conta div {
  display: flex;
  flex-direction: column;
}

.subtotal {
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.add {
  background: #808080;
  text-decoration: none;
}

.add,
.finalizar {
  border-radius: 15px;
  border: 2px solid #D9D9D9;
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  padding: .5em;
}

.finalizar {
  margin-top: 1em;
  background: #307ABD;
  text-decoration: none;
}
</style>
