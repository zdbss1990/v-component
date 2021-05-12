<!--
 * @Author: zhangyao
 * @Date: 2021-05-10 15:54:53
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-12 17:46:31
-->
<template>
  <div id="app">
    <!-- 按钮 -->
    <div class='row'>
      <z-button icon="iconyunhang" type="warning">按钮</z-button>
      <z-button type="primary">登录</z-button>
      <z-button type="danger">删除</z-button>
      <z-button type="success">成功</z-button>
      <z-button type="info">信息</z-button>
    </div>
     <div class='row'>
      <z-button plain type="warning">按钮</z-button>
      <z-button plain type="primary">登录</z-button>
      <z-button plain type="danger">删除</z-button>
      <z-button plain type="success">成功</z-button>
      <z-button plain type="info">信息</z-button>
    </div>
     <div class='row'>
      <z-button round type="warning">按钮</z-button>
      <z-button round type="primary">登录</z-button>
      <z-button round type="danger">删除</z-button>
      <z-button round type="success">成功</z-button>
      <z-button round type="info">信息</z-button>
    </div>
    <div class='row'>
      <z-button circle type="warning" @click="clickMe">按</z-button>
      <z-button circle type="primary">登</z-button>
      <z-button circle type="danger">删</z-button>
      <z-button circle type="success">成</z-button>
      <z-button circle type="info">信</z-button>
    </div>
    <div class='row'>
      <z-button circle icon="iconyunhang" type="warning" ></z-button>
      <z-button circle icon="iconbangzhu1" type="primary"></z-button>
      <z-button circle icon="iconzanting" type="danger"></z-button>
      <z-button circle icon="iconsuoding1" type="success"></z-button>
      <z-button circle icon="iconyunhang" type="info"></z-button>
    </div>
     <div class='row'>
      <z-button circle icon="iconyunhang" type="warning" disabled></z-button>
      <z-button circle icon="iconbangzhu1" type="primary"></z-button>
      <z-button circle icon="iconzanting" type="danger"></z-button>
      <z-button circle icon="iconsuoding1" type="success"></z-button>
      <z-button circle icon="iconyunhang" type="info"></z-button>
    </div>
    <!-- 模态框 -->
    <z-dialog width="50%" top="20px" :visible.sync="visible">
       <template v-slot:title>
         <h3>我是标题</h3>
       </template>
       <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
       </ul>
       <template v-slot:footer>
           <z-button @click="visible=false">取消</z-button>
           <z-button type="primary">确定</z-button>
       </template>
    </z-dialog>
    <!-- 输入框 -->
    <z-input placeholder="请输入用户名" type="password"  v-model="username"></z-input>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      title:'温馨提示',
      visible:false,
      username:''
    }
  },
  methods:{
    clickMe(){
      this.visible=true
    },
    // close(value){
    //   this.visible=value
    // }
  },
}
</script>

<style>
  button{
    margin-right:10px !important;
  }
  .row{
    margin-bottom: 10px;
  }
</style>
