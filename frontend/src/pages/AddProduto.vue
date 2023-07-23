<template>
  <div>
    <HeaderAdm :is-logged="false"></HeaderAdm>
    <main>
      <a class="return" v-on:click="cancelar"><img src="@/assets/voltar.svg" alt="return"></a>
      <section class="menu">
        <div class="infos">
          <label for="nome">Nome</label>
          <input type="text" id="nome" v-model="produtoNovo.nome">
          <label for="descricao">Descrição</label>
          <textarea id="descricao" cols="30" rows="4" v-model="produtoNovo.descricao"></textarea>
          <div class="horizontal">
            <div class="preco">
              <label for="custo">Preço de custo</label>
              <input type="number" id="custo" v-model.number="produtoNovo.custo">
            </div>
            <div class="preco">
              <label for="preco">Preço de venda</label>
              <input type="number" id="preco" v-model.number="produtoNovo.preco">
            </div>
            <div class="preco">
              <label for="quant">Quantidade</label>
              <input type="number" id="quant" v-model.number="produtoNovo.quant">
            </div>
            <div class="disp">
              <label for="disponivel">Disponível</label>
              <input type="checkbox" id="disponivel" v-model="produtoNovo.disponivel">
            </div>
          </div>
          <p>Fotos</p>
          <div class="fotos">
            <img v-for="link in listaImgs" :key="listaImgs.indexOf(link)" :src="link" alt="Imagem do produto"
              v-on:click="deletarFoto(link)">
            <img src="@/assets/addPhoto.svg" alt="addButton" v-on:click="addFoto">
          </div>
        </div>
        <div class="atributos">
          <div>
            <p>Tamanhos</p>
            <div class="opcoes">
              <div class="seletor" v-for="tamanho in listaTam" :key="tamanho" v-on:click="deletarTamanho(tamanho)">{{
                tamanho }}</div>
              <img src="@/assets/add.svg" alt="addButton" v-on:click="addTamanho">
            </div>
            <p>Cores</p>
            <div class="opcoes">
              <div class="seletor" v-for="cor in listaCor" :key="cor" v-on:click="deletarCor(cor)">{{ cor }}</div>
              <img src="@/assets/add.svg" alt="addButton" v-on:click="addCor">
            </div>
          </div>
          <div class="botoes">
            <button id="cancelar" v-on:click="cancelar">Cancelar</button>
            <button id="adicionar" v-on:click="addProduto">Adicionar</button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderAdm from '@/components/HeaderAdm.vue'
import CreateProduto from '../services/CreateProdutoService'


export default {
  name: 'AddProduto',
  components: {
    HeaderAdm
  },
  data () {
    return {
      listaTam: [],
      listaCor: [],
      listaImgs: [],
      produtoNovo: {
        nome: '',
        descricao: '',
        index: '',
        imgs: [],
        cor: false,
        tamanho: false,
        cores: [],
        tamanhos: [],
        disponivel: false,
        quant: 0,
        custo: 0,
        preco: 0
      }
    }
  },
  methods: {
   
    addTamanho () {
      var tamanho = prompt('Adicionar:')
      this.listaTam.push(tamanho.toUpperCase())
    },
    deletarTamanho (tam) {
      var confirma = confirm('Deletar ' + tam + '?')
      if (confirma) {
        this.listaTam.splice(this.listaTam.indexOf(tam), 1)
      }
    },
    addCor () {
      var cor = prompt('Adicionar:')
      this.listaCor.push(cor)
    },
    deletarCor (cor) {
      var confirma = confirm('Deletar ' + cor + '?')
      if (confirma) {
        this.listaCor.splice(this.listaCor.indexOf(cor), 1)
      }
    },
    addFoto () {
      var link = prompt('Link:')
      this.listaImgs.push(link)
    },
    deletarFoto (link) {
      var confirma = confirm('Deletar a imagem?')
      if (confirma) {
        this.listaImgs.splice(this.listaImgs.indexOf(link), 1)
      }
    },
    cancelar () {
      var confirma = confirm('Abandonar alterações?')
      if (confirma) {
        this.$router.back()
      }
    },
   async addProduto () {
      // var prod = new Produto()
      // prod.nome = document.getElementById('nome').value
      // prod.descricao = document.getElementById('descricao').value
      // prod.index = prod.nome.toUpperCase()
      // prod.imgs = this.listaImgs
      // prod.cor = this.listaCor.length > 0
      // prod.tamanho = this.listaTam.length > 0
      // prod.cores = this.listaCor
      // prod.tamanhos = this.listaTam
      // prod.disponivel = document.getElementById('disponivel').value
      // prod.quant = document.getElementById('quant').value
      // prod.custo = document.getElementById('custo').value
      // prod.preco = document.getElementById('preco').value
      // console.log(prod)
      this.produtoNovo.cor = this.listaCor.length > 0
      this.produtoNovo.tamanho = this.listaTam.length > 0
      this.produtoNovo.cores = this.listaCor
      this.produtoNovo.tamanhos = this.listaTam
      this.produtoNovo.imgs = this.listaImgs
      console.log(this.produtoNovo)

      try {
        this.isSubmitted = true

        await CreateProduto.createProduto(this.produtoNovo)
        this.$router.push('/admin')
      } catch (error) {
        console.log('Valores incorretos')
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
  display: grid;
  font-family: 'Inter', Inter;
  font-weight: 100;
  flex-basis: 70%;
  grid-template-columns: 1fr 1fr;
  column-gap: 1em;
  min-height: 72vh;
  margin: 2em;
  padding: 1em 2em;
}

.infos {
  border-right: 1px solid #808080;
  display: flex;
  flex-direction: column;
  padding-right: 1em;
}

.infos input,
.infos textarea {
  border-radius: 5px;
  border: 1px solid #808080;
  background: #FFF;
  box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25) inset;
  margin: .5em 0;
  max-height: 4rem;
  max-width: 22rem;
  min-height: 1.7rem;
}

.horizontal {
  display: flex;
  align-items: center;
  font-size: small;
  justify-content: space-around;
}

.preco input {
  width: 6.5em;
  margin-right: .8em;
}

.disp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: small;
}

#disponivel {
  border: none;
  box-shadow: none;
  width: 1.7rem;
}

.fotos {
  display: flex;
  flex-wrap: wrap;
  max-width: 22rem;
}

.fotos img {
  border-radius: 10px;
  width: 70px;
  height: 70px;
  margin: .2em .2em;
}

.fotos img:hover {
  filter: brightness(.7);
}

.atributos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.atributos p {
  margin: 0;
}

.opcoes {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: .5em 0;
}

.opcoes div {
  align-items: center;
  background: #D9D9D9;
  border-radius: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: 41px;
  margin-right: .5em;
  margin-bottom: .3em;
  min-width: 41px;
  padding: .7em;
  width: fit-content;
}

.opcoes *:hover {
  filter: brightness(.7);
}

.botoes {
  align-self: center;
}

.botoes button {
  border: 2px solid #d9d9d9;
  border-radius: 15px;
  color: #FFF;
  padding: 1em 1.5em;
  margin: 0 1em;
}

#cancelar {
  background-color: #808080;
}

#cancelar:hover {
  background-color: #e62e2e;
}

#adicionar {
  background-color: #307abd;
}

#adicionar:hover {
  background-color: #3b93e6;
}

*:hover {
  transition: .1s ease-in-out;
}
</style>
