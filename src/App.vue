<template>
  <div id="app" :class="{red:isActive}">
    <img class="imag" alt="Vue logo" src="./assets/harry.jpg" width="1565" height="920">
    <HelloWorld  msg="You're a wizard" />
    <hr>
    <Menu/>


      <router-view></router-view>

  <div>


  </div>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/menu.vue'
import Vue from 'vue'
import  BootstrapVue  from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  name: 'App',
  components: {
    HelloWorld,
    Menu
  },
  data() {

    return {
       isActive:true,
        text: ''
    }
  },
  methods:{



  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.red{
      background-color: white	;

  }
 .imag{
   background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background-color: #f5f5f5;
  height: 100%;
 }
.msg{
      color:black ;
}

</style>
