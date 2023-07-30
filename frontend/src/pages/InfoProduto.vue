<template>
  <div>
    <HeaderClient></HeaderClient>
    <main>
      <div class="flex">
        <a class="return" href="/catalogo"><img src="@/assets/voltar.svg" alt="return"></a>
        <section class="produto">
          <div class="imagens">
            <div class="imgSecundaria scroll">
              <img v-if="produto.imgs.length > 1" v-for="im in produto.imgs" :src="im">
            </div>
            <img class="imgPrincipal" :src="produto.imgs[0]">
          </div>
          <div class="info">
            <span id="nome">{{ produto.nome }}</span>
            <span id="descri" v-if="produto.descricao != null">Descrição do produto:</span>
            <span id="descricao" v-if="produto.descricao != null">{{ produto.descricao }}</span>
          </div>
        </section>
      </div>
      <section class="compra">
        <div>
          <span id="preco">R${{ produto.preco }}</span>
          <div class="pagamentos">
            <div class="logos">
              <img src="@/assets/pix.svg">
              <img src="@/assets/cartao.svg">
            </div>
            <span id="disp" v-if="produto.disp">Em estoque</span>
            <span id="naodisp" v-else>Indisponível</span>
          </div>
          <div class="variantes" v-if="produto.tamanho == true">
            <span> Selecionar tamanho:</span>
            <div class="btn-group opcoes" role="tamanho">
              <div v-for="tamanho in produto.tamanhos">
                <input type="radio" class="btn-check" name="tamanho" :id="tamanho" @click="mudaTamanho(tamanho)">
                <label class="btn btn-outline-primary" :for="tamanho">{{ tamanho }}</label>
              </div>
            </div>
          </div>
          <div class="variantes" v-if="produto.cor == true">
            <span> Selecionar Cor:</span>
            <div class="btn-group opcoes" role="cor">
              <div v-for="cor in produto.cores">
                <input type="radio" class="btn-check" name="cor" :id="cor" @click="mudaCor(cor)">
                <label class="btn btn-outline-primary" :for="cor">{{ cor }}</label>
              </div>
            </div>
          </div>
        </div>
        <button id="carrinho" v-on:click="addCarrinho()">Adicionar ao carrinho</button>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import { Produto } from '@/models/Produto.js'
import { ref } from 'vue'

export default {
  setup() {
    var produto = ref({})
    if (localStorage.produtoAtual) {
      produto.value = JSON.parse(localStorage.getItem('produtoAtual'))
    }
    return { produto }
  },
  name: 'InfoProduto',
  components: {
    HeaderClient
  },
  props: ['id'],
  data() {

    return {
      // produto: this.produtoAtual,
      tamanho: null,
      cor: null
    };
  },
  methods: {
    testee() {
      console.log(this.tamanho, this.cor)
    },
    mudaTamanho(tamanho) {
      this.tamanho = tamanho
    },
    mudaCor(cor) {
      this.cor = cor
    },
    addCarrinho() {
      if (this.tamanho == null && this.produto.tamanho != false) {
        alert("Selecione um tamanho")
        return
      }
      if (this.cor == null && this.produto.cor != false) {
        alert("Selecione uma cor")
        return
      }
      this.produto.tamanho = this.tamanho
      this.produto.cor = this.cor

      if (localStorage.carrinho) {
        var carrinho = JSON.parse(localStorage.getItem('carrinho'))
        carrinho.push(this.produto)
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
      } else {
        var carrinho = []
        carrinho.push(this.produto)
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
      }
      this.$router.push('/carrinho')
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
  font-family: Inter;
  margin: 0 1em;
  margin-top: 2em;
}

.flex {
  display: flex;
}

.return {
  height: fit-content;
  margin-right: 1em;
}

.return:hover {
  filter: invert(.05);
  transition: .2s ease-in-out;
}

.return img {
  height: 40px;
}

.produto {
  background-color: whitesmoke;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  height: 73vh;
  padding-top: 1em;
  width: 65vw;
}

.imagens {
  border-radius: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-basis: 70%;
  /* width: 40vw; */
}

.imgSecundaria {
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  height: 100%;
}

.scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  height: calc(72vh - 2em);
}

.scroll::-webkit-scrollbar {
  display: none;
}

.imgSecundaria img {
  border-radius: 20px;
  margin: .5em .5em;
  border: 1px solid rgba(0, 0, 0, 0.25);
  width: 8vw;
}

.imgPrincipal {
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin-left: 0.5em;
  height: 25em;
  width: 25em;
}

.info {
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  flex-basis: 35%;
}

#nome {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 1em;
}

#descri {
  font-size: 20px;
  margin-bottom: 0.5em
}

#descricao {
  font-size: 14px;
}

.compra {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 1em;
  padding: 2em 0;
  text-align: center;
  width: 23vw;
}

.compra>div {
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
}

#preco {
  font-size: 32px;
  font-weight: 600;
}

.pagamentos {
  align-items: center;
  border-top: solid 1px #808080;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
  width: 15vw;
}

.pagamentos img {
  margin-right: .2em;
  margin-top: .1em;
  width: 2em;
}

#disp,
#naodisp {
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

#disp {
  color: #44B865;
}

#naodisp {
  color: #E23232;
}

.variantes {
  margin-bottom: 1em;
  width: 100%;
}

.opcoes {
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: .3em;
  column-gap: .3em;
  justify-content: space-around;
  margin: auto;
  width: 70%;
}

#carrinho {
  border-radius: 20px;
  border: 2px solid #D9D9D9;
  background: #307ABD;
  color: #FFF;
  padding: 1em;
  text-align: center;
  font-size: 18px;
}
</style>
