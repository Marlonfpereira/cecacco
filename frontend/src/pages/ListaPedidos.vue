<template>
  <div>
    <HeaderAdm :is-logged="true"></HeaderAdm>
    <main>
      <a class="return" href="./admin"><img src="@/assets/voltar.svg" alt="return"></a>
      <section class="menu">
        <div class="titulo">
          <h1 v-on:click="showPedidos()">Pedidos</h1>
          <div>
            <p>Filtro:</p>
            <select name="" id="">
              <option value="none">Nenhum</option>
              <option value="entregue">Entregue</option>
              <option value="pago">Pago</option>
              <option value="comunicado">Comunicado</option>
              <option value="pendente">Pendente</option>
              <option value="cancelado">Cancelado</option>
            </select>
          </div>
        </div>
        <div class="scroll">
          <div class="pedido" v-for="pedido in listaPedidos" :key="pedido.id" v-on:click="abrirPedido(pedido.id)">
            <div class="info">
              <span>{{ pedido.data }}</span>
              <span>{{ pedido.cliente }}</span>
            </div>
            <div class="valores">
              <div class="atributos">
                <span class="valor">R${{ pedido.valorPago }}</span>
              </div>
              <div class="atributos estados">
                <div class="status" v-if="pedido.status == 4">
                  <div class="circle" style="background-color: #44b865;"></div>
                  <p>Entregue</p>
                </div>
                <div class="status" v-if="pedido.status == 3">
                  <div class="circle" style="background-color: #32ace2;"></div>
                  <p>Pago</p>
                </div>
                <div class="status" v-if="pedido.status == 2">
                  <div class="circle" style="background-color: #ffee00;"></div>
                  <p>Comunicado</p>
                </div>
                <div class="status" v-if="pedido.status == 1">
                  <div class="circle" style="background-color: #808080;"></div>
                  <p>Pendente</p>
                </div>
                <div class="status" v-if="pedido.status == 0">
                  <div class="circle" style="background-color: #e23232;"></div>
                  <p>Cancelado</p>
                </div>
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

var lista = []

await PedidosService.showAllPedidos().then((data) => {
  data.forEach(element => {
    var pedido = new Pedido()
    pedido.itens = element.produtos
    pedido.cliente = element.customerName
    pedido.email = element.email
    pedido.telefone = element.telefone
    pedido.valorPago = element.totalPreco
    pedido.custo = 0
    pedido.formaPagamento = 'canta'
    pedido.id = element._id
    pedido.data = element.Data
    pedido.status = element.estado
    lista.push(Object.assign({}, pedido))
  });
})

export default {
  name: 'Pedidos',
  components: {
    HeaderAdm
  },
  data () {
    return {
      listaPedidos: lista
    }
  },
  methods: {
    abrirPedido (pedido) {
      this.$router.push({name: 'InfoPedido', params: {id: pedido}})
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

p {
  margin: 0;
}

.scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  height: calc(100% - 3.5em);
}

.scroll::-webkit-scrollbar {
  display: none;
}

.titulo{
  display: flex;
  justify-content: space-between;
}

.titulo div {
  align-items: center;
  display: flex;
  font-size: small;
}

.titulo h1 {
  margin: .5em 0;
}

.titulo div select {
  background: #D9D9D9;
  border: none;
  border-radius: 10px;
  margin-left: .5em;
  height: 2.5em;
}

.pedido {
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

.info span {
  font-weight: bold;
  margin-left: 1em;
}

.valores {
  align-items: center;
  column-gap: .4em;
  display: grid;
  font-size: .8em;
  grid-template-columns: 1fr 1fr;
  justify-items: flex-end;
  width: 50%;
}

.atributos {
  display: flex;
  flex-direction: column;
  pointer-events: none;
  text-align: center;
}

.estados {
  background: #D9D9D9;
  border-radius: 10px;
  padding: 0 1em;
  min-width: 8em;
}

.status {
  align-items: center;
  display: flex;
  padding: .5em 0;
  width: 100px;
}

.circle {
  border-radius: 30px;
  height: 15px;
  margin-right: 5px;
  width: 15px;
}
</style>
