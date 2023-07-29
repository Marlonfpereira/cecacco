<template>
  <div>
    <HeaderClient></HeaderClient>
    <main>
      <a class="return" href="./admin"><img src="@/assets/voltar.svg" alt="return"></a>
      <section class="produto">
        <div class="imagens">
          <div class="imgSecundaria">
            <img v-if="produto.imgs[1] != null" v-for="im in produto.imgs" :src="im">
          </div>
          <img class="imgPrincipal" :src="produto.imgs[0]">
        </div>
        <div class="info">
          <span id="nome">{{ produto.nome }}</span>
          <span id="descri" v-if="produto.descricao != null">Descrição do produto:</span>
          <span id="descricao" v-if="produto.descricao != null">{{ produto.descricao }}</span>
        </div>
      </section>
      <section class="compra">
        <span id="preco">R${{ produto.preco }}</span>
        <hr size="5">
        <div class="pagamentos">
          <div class="logos">
            <img src="@/assets/pix.svg">
            <img src="@/assets/cartao.svg">
          </div>
          <span id="disp" v-if="produto.disp">Em estoque</span>
          <span id="naodisp" v-else>Indisponível</span>
        </div>
        <span v-if="produto.tamanhos != null"> Selecionar tamanho:</span>
        <div class="tam">
          <button id="tamanhos" v-if="produto.tamanhos != null" v-for="t in produto.tamanhos">{{ t }} </button>
        </div>
        <button id="carrinho">Adicionar ao carrinho</button>
      </section>
    </main>
  </div>
</template>

<script>
import HeaderClient from '@/components/HeaderClient.vue'
import { Produto } from '@/models/Produto.js'

export default {
  name: 'InfoProduto',
  components: {
    HeaderClient: HeaderClient
  },
  props: ['produtoAtual'],
  data() {
    let a = new Produto();

    a.imgs.push('https://http2.mlstatic.com/caneca-branca-porcelana-resinada-aaa-sublimaco-48-unds-orca-D_NQ_NP_869418-MLB31100747149_062019-F.jpg');
    a.imgs.push('https://http2.mlstatic.com/caneca-branca-porcelana-resinada-aaa-sublimaco-48-unds-orca-D_NQ_NP_869418-MLB31100747149_062019-F.jpg');
    a.imgs.push('https://http2.mlstatic.com/caneca-branca-porcelana-resinada-aaa-sublimaco-48-unds-orca-D_NQ_NP_869418-MLB31100747149_062019-F.jpg');
    a.imgs.push('https://http2.mlstatic.com/caneca-branca-porcelana-resinada-aaa-sublimaco-48-unds-orca-D_NQ_NP_869418-MLB31100747149_062019-F.jpg');
    a.nome = 'teste';
    a.id = '1234567';
    a.nome = 'teste';
    a.descricao = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ante est. Sed dolor urna, tempor nec est vitae, fermentum varius neque. Morbi quis placerat sem. Vestibulum laoreet, odio vel porta sodales, nulla nisi elementum magna, non consectetur mauris sapien id magna. Maecenas vel cursus diam. Nulla pulvinar pharetra velit, ac tempus ante blandit sit amet. Mauris porttitor ultricies arcu vitae fermentum. In elit turpis, condimentum id pharetra sed, pharetra ut erat. Phasellus vitae lorem sapien. Nullam vestibulum dolor in tellus ultrices dictum.';
    a.index = 'a';
    a.custo = 50.5;
    a.preco = 79.9;
    a.quant = 3;
    a.disp = true;
    a.tamanhos = ['p', 'm', 'g'];

    return {
      produto: a
    };
  },
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
  font-family: Inter;
  margin: 2em;
}

.return {
  height: fit-content;
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
  height: 74vh;
  width: 65vw;
}

.imagens {
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  /* flex-basis: 70%; */
  /* width: 40vw; */
}

.imgSecundaria {
  margin-top: 1em;
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  height: 50vh;
}

.imgSecundaria img {
  border-radius: 20px;
  margin: 0 .5em 1em .5em;
  border: 1px solid rgba(0, 0, 0, 0.25);
  width: 8vw;
}

.imgPrincipal {
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 1em .5em 1em 0.5em;
  height: 60%;
  width: 60%;
}

.info {
  margin-top: 1em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
}

#nome {
  color: #000;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 1em;
}

#descri {
  color: #000;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 0.5em
}

#descricao {
  color: #000;
  font-size: 14px;
  font-weight: 400;
}

.compra {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25vw;
  height: 55vh;
}

#preco {
  margin-top: 1rem;
  color: #000;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.compra hr {
  color: black;
  width: 15vw;
}

.pagamentos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  margin-bottom: 2em;
}

#disp, #naodisp {
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

#disp{
  color: #44B865;
}

#naodisp{
  color: #E23232;
}

.tam {
  display: flex;
  margin-bottom: 2em;
}

#tamanhos {
  align-items: center;
  background: #d9d9d9;
  border-radius: 50px;
  border: none;
  outline: none;
  color: #ffffff;
  display: flex;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 600;
  height: 41px;
  justify-content: center;
  line-height: normal;
  margin: .4em .4em;
  padding: 11px 0px 10.525px 0px;
  text-align: center;
  width: 41px;
}

#carrinho {
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
</style>
