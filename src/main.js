import Vue from 'vue'
import App from './App.vue'
import SortingHat from './components/SortingHat.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes=[
  {path:'/SortingHat', component:SortingHat},

]
const router = new VueRouter({
  routes
})

new Vue({
  el:'#app',
  router,
  render: h => h(App),
}).$mount('#app')
