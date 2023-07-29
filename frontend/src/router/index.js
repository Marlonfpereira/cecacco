import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import Admin from '@/pages/Admin.vue'
import Relatorios from '@/pages/Relatorios.vue'
import Produtos from '@/pages/ListaProdutos.vue'
import Pedidos from '@/pages/ListaPedidos.vue'
import AddProduto from '@/pages/AddProduto.vue'
import InfoPedido from '@/pages/InfoPedido.vue'
// import Catalogo from '@/pages/Catalogo.vue'
// import Formulario from '@/pages/Formulario.vue'
// import Carrinho from '@/pages/Carrinho.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/relatorios',
      name: 'Relatorios',
      component: Relatorios
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: Produtos
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: Pedidos
    },
    {
      path: '/addProduto',
      name: 'AddProduto',
      component: AddProduto
    },
    {
      path: '/infoPedido/:id',
      name: 'InfoPedido',
      props: true,
      component: InfoPedido
    }
    // {
    //   path: '/catalogo',
    //   name: 'Catalogo',
    //   component: Catalogo
    // },
    // // {
    // //   path: '/telaProduto',
    // //   name: 'TelaProduto',
    // //   props: true,
    // //   component: TelaProduto
    // // },
    // {
    //   path: '/formulario',
    //   name: 'Formulario',
    //   component: Formulario
    // },
    // {
    //   path: '/Carrinho',
    //   name: 'Carrinho',
    //   component: Carrinho
    // }
  ]
})

export default router
