<template>
  <div>
    <HeaderClient></HeaderClient>
    <main class="menu">
      <div class="form">
        <span>Nome</span>
        <input type="text" id="nome">
        <span>Telefone</span>
        <input type="text" id="telefone">
        <span>Email</span>
        <input type="text" id="email">
        <span>RA</span>
        <input type="text" id="ra">
      </div>
      <div class="conta">
        <span>Subtotal</span>
        <span class="subtotal">R$12,00</span>
        <span>Taxas</span>
        <span class="subtotal">R$15,00</span>
        <br><br><br><br>
        <span id="tot">Total</span>
        <span class="total">R$27,00</span>
        <select class="pagamento">
          <option id="dinheiro">Dinheiro</option>
          <option id="cartao">Cartão</option>
          <option id="pix">Pix</option>
        </select>
        <button class="finalizar">Finalizar Pedido</button>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import { Pedido } from '@/models/Pedido.js'


export default {
  name: 'Formulario',
  components: {
    HeaderClient: HeaderClient
  },
  data() {
    return {
    }
  },
}

</script>

<style scoped>
body {
  margin: 0;
  background-color: #c7c7c7;
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
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-weight: 520;
  height: 55px;
}

.form {
  background: whitesmoke;
  border-radius: 10px;
  color: #000;
  display: flex;
  flex-direction: column;
  font-family: Inter;
  font-size: 22px;
  font-weight: 400;
  height: 20%;
  margin: 2em 6em;
  padding: 35px 71px 53px 46px;
  src: url("../fonts/Inter-Regular.ttf");
  width: 35%;
}

input {
  border-radius: 5px;
  border: 1px solid #808080;
  background: #FFF;
  box-shadow: 1.2px 1px 0px 0px rgba(0, 0, 0, 0.25) inset;

}

.menu {
  display: flex;
  justify-content: space-between;
}

.pagamento {
  height: 55px;
  border-radius: 30px;
  background: #D9D9D9;
  border: none;
  height: 10%;
  color: #000;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}

.subtotal {
  color: #000;
  font-size: 26px;
  font-weight: 700;
}

.total {
  color: #000;
  font-size: 40px;
  font-weight: 600;
}

#tot{
  font-size: 25px;
}

</style>
