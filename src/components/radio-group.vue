<!--
 * @Author: zhangyao
 * @Date: 2021-05-14 17:07:18
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-14 17:39:17
-->
<template>
    <div class="z-radio-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
   name:'zRadioGroup',
   props:{
       //group 接收value值
       //将来还需要触发input事件 provide与inject祖孙之间的传值
       value:null
   },
   provide(){
       return{
          radioGroup:this
       } //把组件提供出去 如果有多层嵌套 子组件也能取到该组件 访问该组件得值
   },
   data(){
       return{

       }
   }
}
</script>