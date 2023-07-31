<template>
  <div>
    <HeaderClient></HeaderClient>
    <main class="menu">
      <div class="flex">
        <a class="return" v-on:click="$router.go(-1)"><img src="@/assets/voltar.svg" alt="return"></a>
        <div class="form">
          <span>Nome</span>
          <input type="text" class="form-control" v-model="pedidoNovo.customerName">
          <span>Telefone</span>
          <input type="text" class="form-control" v-model="pedidoNovo.telefone">
          <span>Email</span>
          <input type="text" class="form-control" v-model="pedidoNovo.email">
        </div>
      </div>
      <div class="conta">
        <div>
          <span>Subtotal</span>
          <span class="subtotal">R${{ this.subtotal }}</span>
          <span>Taxas</span>
          <span class="subtotal">R${{ taxa }}</span>
        </div>
        <div>
          <span id="tot">Total</span>
          <span class="total">R${{ total }}</span>
        </div>
        <div>
          <select class="pagamento" v-model="pedidoNovo.formaPagamento" v-on:change="calcTaxa()">
            <option id="dinheiro" value="dinheiro">Dinheiro</option>
            <option id="cartao" value="cartao">Cartão</option>
            <option id="pix" value="pix">Pix</option>
          </select>
          <button class="finalizar" v-on:click="submitPedido()">Finalizar Pedido</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import PedidosService from '../services/PedidosService'
import { ref } from 'vue'

export default {
  setup() {
    var listaProdutos = ref({})
    if (localStorage.carrinho) {
      listaProdutos.value = JSON.parse(localStorage.getItem('carrinho'))
    }
    var subtotal = 0
    listaProdutos.value.forEach(produto => {
      subtotal += produto.preco * produto.quant
    });
    return { listaProdutos, subtotal }
  },
  name: 'Formulario',
  components: {
    HeaderClient
  },
  data() {
    return {
      taxa: 0,
      total: this.subtotal,
      pedidoNovo: {
        produtos: [],
        customerName: '',
        email: '',
        telefone: '',
        totalPreco: this.total,
        formaPagamento: 'pix',
        data: null,
        estado: 1
      },
      isSubmitted: false
    }
  },
  methods: {
    calcTaxa() {
      if (this.pedidoNovo.formaPagamento == 'cartao') {
        this.taxa = Math.round(this.subtotal * 0.05)
        this.total += this.taxa
      } else {
        this.taxa = 0
        this.total = this.subtotal
      }
    },
    async submitPedido() {
      if (this.pedidoNovo.customerName == '' || this.pedidoNovo.telefone == '' || this.pedidoNovo.email == '') {
        alert("Insira seus dados")
      }
      this.pedidoNovo.totalPreco = this.total

      this.listaProdutos.forEach(produto => {
        let variacoes = {
          cores: produto.cor,
          tamanhos: produto.tamanho
        }
        let prodPedido = {
          productId: produto.index,
          quantidade: produto.quant,
          preco: produto.preco,
          variations: variacoes
        }
        this.pedidoNovo.produtos.push(prodPedido)
      });

      console.log(this.pedidoNovo)

      try {
        this.isSubmitted = true
        await PedidosService.newPedido(this.pedidoNovo)
        this.$router.push('/catalogo')
      } catch (error) {
        console.log('Valores incorretos')
      }

    }
  }
}

</script>

<style scoped>
.menu {
  display: flex;
  font-family: Inter;
  justify-content: space-between;
  margin: 2em 4em;
}

.flex {
  display: flex;
  flex-basis: 65%;
}

.return {
  height: fit-content;
  margin-right: 1em;
}

.return:hover {
  filter: invert(.1);
  transition: .2s ease-in-out;
}

.return img {
  height: 40px;
}

.form {
  background: whitesmoke;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 2em;
  flex-basis: 100%;
}

.form input {
  border: 1px solid #808080;
  margin-bottom: 1em;
}

.conta {
  background: whitesmoke;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  height: 70vh;
  justify-content: space-between;
  padding: 2em;
  text-align: center;
}

.conta>div {
  display: flex;
  flex-direction: column;
}

.subtotal {
  color: #000;
  font-size: 26px;
  font-weight: 700;
}

.total {
  color: #000;
  font-size: 35px;
  font-weight: 600;
}

#tot {
  font-size: 20px;
}

.pagamento {
  border-radius: 15px;
  background: #D9D9D9;
  border: none;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 1em;
  padding: .8em;
}

.finalizar {
  border-radius: 15px;
  border: 2px solid #D9D9D9;
  background: #307ABD;
  color: #FFF;
  text-align: center;
  font-size: 18px;
  padding: .8em;
}
</style>
