<!--
 * @Author: zhangyao
 * @Date: 2021-05-18 11:28:29
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-18 13:39:39
-->
<template>
    <div class="z-checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'zCheckboxGroup',
    props:{
        value:{
            type:Array,
            default:()=>[]
        }
    },
    provide(){
        return{
            checkboxGroup:this
        }
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped></style>