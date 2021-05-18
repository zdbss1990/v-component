<!--
 * @Author: zhangyao
 * @Date: 2021-05-18 13:47:32
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-18 15:15:49
-->
<template>
    <div class="z-form">
         <slot></slot>
    </div>
</template>
<script>
export default {
   name:'zForm',
   props:{
       model:{
           type:Object,
           required:true
       },
       labelWidth:{
           type:String,
           default:'80px'
       }
   },
   provide(){
       return {
           Form:this
       }
   },
   data(){
       return{
           
       }
   }
}
</script>
<style lang="scss" scoped></style>