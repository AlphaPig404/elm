<template>
  <div id="app">
    <div class="header">
     <p class="logo">后台管理系统</p>
     <div class="nav">
       <v-nav></v-nav>
     </div>
    </div>
    <div class="left">
      <v-menu></v-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import menu from "./components/menu/menu.vue";
import nav from './components/nav/nav.vue';

export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },
  components: {
    'v-menu': menu,
    'v-nav': nav
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
html,body,#app{
  height: 100%;
  overflow: hidden;
}
.header{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #324057;
  color: #fff;
}
.header .logo{
  padding: 0 20px;
  line-height: 50px;
  float: left;
}
.header .nav{
  float: right;
}
.header .dialog{
  float: right;
  height: 50px;
  line-height: 50px;
 padding: 0 20px;
}
.header .nav .el-menu--horizontal .el-menu-item {
   height: 50px;
   line-height: 50px;
}
.header .nav .el-submenu__title{
  height: 50px;
   line-height: 50px;
}
.left{
  position: absolute;
  left: 0;
  top: 50px;
  right: 0;
  bottom: 50px;
  width: 180px;
  background-color: #333744;
  overflow: auto;
}
.right{
  position: absolute;
  left: 180px;
  top:50px;
  right: 0;
  bottom: 50px;
  background-color: #eaedf1;
  overflow: auto;
}
.footer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: #324057;
}
</style>
