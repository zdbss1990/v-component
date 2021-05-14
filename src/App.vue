<!--
 * @Author: zhangyao
 * @Date: 2021-05-10 15:54:53
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-14 17:38:38
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
    <!-- v-model语法糖 等价于 :value="username" @input="username=$event.target.value" 用于给组件使用v-model -->
    <z-input placeholder="请输入用户名" v-model="username" clearable></z-input>
    <z-input placeholder="请输入密码" type="password" show-password v-model="password"></z-input>
    <!-- switch组件 -->
    <z-switch v-model="active" active-color="red" inactive-color="green" @change="changeChecked"></z-switch>
    <!-- radio组件
    <z-radio v-model="radio"  label="1">男</z-radio>
    <z-radio v-model="radio" label="0">女</z-radio>
    <z-radio v-model="radio"  label="男"></z-radio>
    <z-radio v-model="radio" label="女"></z-radio> -->
    <!-- radio-group -->
    <radio-group v-model="radio">
        <z-radio label="男"></z-radio>
        <z-radio label="女"></z-radio>
    </radio-group>
  </div>
</template>

<script>
import radioGroup from './components/radio-group.vue'


export default {
  components: { radioGroup },
  name: 'App',
  data(){
    return{
      title:'温馨提示',
      visible:false,
      username:'xxxx',
      password:'',
      active:false,
      radio:'1'
    }
  },
  methods:{
    clickMe(){
      this.visible=true
    },
    changeChecked(val){
      console.log(val)
    }
   
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
