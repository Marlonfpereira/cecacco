import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Admin from '@/pages/Admin'
import Relatorios from '@/pages/Relatorios'
import Produtos from '@/pages/ListaProdutos'
import Pedidos from '@/pages/ListaPedidos'
import AddProduto from '@/pages/AddProduto'
import InfoPedido from '@/pages/InfoPedido'

Vue.use(Router)

export default new Router({
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
      path: '/infoPedido/:pedidoAtual',
      name: 'InfoPedido',
      props: true,
      component: InfoPedido
    }
  ]
})
