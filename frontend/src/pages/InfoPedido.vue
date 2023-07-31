<template>
  <div>
    <HeaderAdm :is-logged="false"></HeaderAdm>
    <main>
      <a class="return" v-on:click="cancelar"><img src="@/assets/voltar.svg" alt="return"></a>
      <section v-on:click="montarDados" class="menu">
        <div class="data">
          <div class="infos">
            <p>Nome</p>
            <span>{{ pedidoAtual.cliente }}</span>
            <p>Telefone</p>
            <span>{{ pedidoAtual.telefone }}</span>
            <p>Email</p>
            <span>{{ pedidoAtual.email }}</span>
            <p>Valor</p>
            <span>{{ pedidoAtual.valorPago }}</span>
            <p>Forma de pagamento</p>
            <span>{{ pedidoAtual.formaPagamento }}</span>
            <p>Data</p>
            <span>{{ pedidoAtual.data }}</span>
          </div>
          <div class="botoes">
            <select v-model="pedidoAtual.status">
              <option value="4">Entregue</option>
              <option value="3">Pago</option>
              <option value="2">Comunicado</option>
              <option value="1">Pendente</option>
              <option value="0">Cancelado</option>
            </select>
            <button id="adicionar" v-on:click="attStatus()">Confirmar</button>
          </div>
        </div>
        <div class="itens">
          <div class="scroll">
            <div class="produto" v-for="prod in pedidoAtual.itens" :key="prod.index">
              <div class="info">
                <img :src="prod.imgs[0]" alt="imagemProduto">
                <span>{{ prod.nome }}</span>
              </div>
              <div class="valores">
                <span class="quant">Quantidade: {{ prod.quant }}</span>
                <span class="valor">R${{ prod.preco }}</span>
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
import PedidosService from '../services/PedidosService'
import { Pedido } from '@/models/Pedido.js'
import router from '../router'

let pedido = new Pedido()

await PedidosService.getPedido().then((element) => {
  pedido.itens = element.produtos
  pedido.cliente = element.customerName
  pedido.email = element.email
  pedido.telefone = element.telefone
  pedido.valorPago = element.totalPreco
  pedido.custo = 0
  pedido.formaPagamento = 'cartão'
  pedido.id = element._id
  pedido.data = element.Data
  pedido.status = element.estado
});





export default {
  name: 'InfoPedido',
  components: {
    HeaderAdm
  },
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      pedidoAtual: pedido
    }
  },

  methods: {
    cancelar() {
      // var confirma = confirm('Abandonar alterações?')
      if (true) {
        this.$router.back()
      }
    },
    montarDados() {
      id = this.$router.id;
      console.log(id)
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

.data {
  border-right: 1px solid #808080;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 1em;
}

.infos {
  display: flex;
  flex-direction: column;
}

.infos p {
  margin: 0;
  font-size: small;
}

.infos span {
  margin-bottom: .5em;
}

.botoes {
  align-self: center;
}

select {
  background: #D9D9D9;
  border: none;
  border-radius: 10px;
  margin-left: .5em;
  height: 2.5em;
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

.itens {
  overflow-y: hidden;
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

.titulo,
.titulo h1 {
  margin: .5em 0;
}

.produto {
  border-bottom: 2px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  padding: .5em 0;
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
  font-size: .8em;
  margin: auto 0;
  text-align: center;
  width: 30%;
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
