<template>
  <div class="menu">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>云计算基础服务</template>
          <el-menu-item index="1-1"><router-link to="/ecs">云服务器ECS</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/rds">云数据库RDS版</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link to="/redis">云数据库Redis版</router-link></el-menu-item>
          <el-menu-item index="1-4"><router-link to="/moogodb">云数据库MoogoDB版</router-link></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>大数据(数加)</template>
          <el-menu-item index="2-1">数据控制台概览</el-menu-item>
          <el-menu-item index="2-2">大数据开发套件</el-menu-item>
          <el-menu-item index="2-3">机器学习</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>安全(云盾)</template>
          <el-menu-item index="3-1">云盾控制台概览</el-menu-item>
          <el-menu-item index="3-2">态势感知</el-menu-item>
          <el-menu-item index="3-3">服务器安全</el-menu-item>
          <el-menu-item index="3-4">DDos防护</el-menu-item>
          <el-menu-item index="3-5">Web应用防火墙</el-menu-item>
          <el-menu-item index="3-6">先知(安全情报)</el-menu-item>
          <el-menu-item index="3-7">先知管家</el-menu-item>
          <el-menu-item index="3-8">加密服务</el-menu-item>
          <el-menu-item index="3-9">绿网</el-menu-item>
          <el-menu-item index="3-10">数据风控</el-menu-item>
          <el-menu-item index="3-11">证书服务</el-menu-item>
          <el-menu-item index="3-12">移动安全</el-menu-item>
          <el-menu-item index="3-13">合作伙伴产品中心</el-menu-item>
      </el-submenu>
        <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>域名与网站(万网)</template>
          <el-menu-item index="4-1">域名</el-menu-item>
          <el-menu-item index="4-2">云解析DNS</el-menu-item>
          <el-menu-item index="4-1">云虚拟主机</el-menu-item>
          <el-menu-item index="4-2">企业邮箱</el-menu-item>
          <el-menu-item index="4-1">标准建站</el-menu-item>
          <el-menu-item index="4-2">弹性Web托管</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
        console.log(key,keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-menu{
  background-color: #42485b;
  overflow: hidden;
}
.el-submenu__title:hover{
  background-color: #00c1de;
}
.el-menu-item>a{
  display: block;
  color: #fff;
}
.el-menu-item, .el-submenu__title{
    color: #fff;
}
.el-submenu__title{
  white-space: nowrap;
  overflow: hidden;
}
.el-menu-item{
  background-color: #333744;
}
.el-menu-item:hover{
  background-color: rgba(51,55,68,0.8) !important;
}
.el-submenu__icon-arrow{
  right: 10px;
}
</style>
