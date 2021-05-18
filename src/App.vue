<!--
 * @Author: zhangyao
 * @Date: 2021-05-10 15:54:53
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-18 15:16:07
-->
<template>
  <div id="app">
      <z-form :model="form" labelWidth="100px">
         <z-form-item label="用户名">
             <z-input v-model="form.username" placeholder="请输入用户名"></z-input>
         </z-form-item>
           <z-form-item label="选择">
             <z-switch v-model="form.active"></z-switch>
         </z-form-item>
      </z-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      form:{
         username:'',
         active:''
      }
    }
  },
  methods:{
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
