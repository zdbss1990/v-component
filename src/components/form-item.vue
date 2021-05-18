<!--
 * @Author: zhangyao
 * @Date: 2021-05-18 13:48:33
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-18 15:15:10
-->
<template>
    <div class="z-form-item">
       <label class="z-form-item__label" :style="labelStyle">{{label}}</label>
       <div class="z-form-item__content">
           <slot></slot>
       </div>
    </div>
</template>
<script>
export default {
    name:'zFormItem',
    props:{
       label:{
           tyle:String,
           default:''
       }
    },
    inject:{
        Form:{
            default:''
        }
    },
    computed:{
        labelStyle(){
            console.log(this.Form)
            return {'width':this.Form.labelWidth}
        }
    },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>
.z-form-item{
    margin-bottom: 25px;
    .z-form-item__label{
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color:#606266;
        line-height: 40px;
        padding: 0 12px 0 0 ;
        box-sizing: border-box;
    }
    .z-form-item__content{
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}

</style>