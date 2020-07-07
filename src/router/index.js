import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import hewujiang from '@/components/hewujiang'
// import home from '@/components/insuerance'
import Main from '@/Main.vue'
import Home from '@/Home.vue'
import Category from '@/Category'
import Cart from '@/Cart.vue'
import Me from '@/Me.vue'
import Detail from '@/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        { name: "home", path: '', component: Home },
        { name: "category", path: 'category', component: Category },
        { name: "cart", path: 'cart', component: Cart },
        { name: "me", path: 'me', component: Me }
      ]
    },
    { name: "detail", path: '/', component: Detail },
  ]
})
