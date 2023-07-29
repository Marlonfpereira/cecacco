<template>
  <div>
    <HeaderAdm></HeaderAdm>
    <h1>Algo deu errado D:</h1>
  </div>
</template>

<script>
import HeaderAdm from '@/components/HeaderAdm.vue'
export default {
  name: 'Erro',
  components: {
    HeaderAdm
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: Inter;
  src: url('../assets/Inter-Regular.ttf');
}

h1{
  font-family: Inter;
  font-weight: 100;
  text-align: center;
  margin-top: 2em;
}
</style>
