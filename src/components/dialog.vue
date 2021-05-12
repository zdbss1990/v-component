<!--
 * @Author: zhangyao
 * @Date: 2021-05-12 10:30:22
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-12 16:44:08
-->
<template>
    <!--背景遮罩-->
    <!-- @click.self 点击元素本身才能触发 -->
    <!-- sync修饰符 语法糖 <com :foo.sync="bar"></com> 
      会被扩展为<com :foo="bar" @update:foo="val=>bar=val"></com>
      需要$emit('update:foo',newVal)
    -->
    <transition name="z-dialog-fade">
        <div class="z-dialog__wrapper" v-show="visible" @click.self="handleClose">
            <div class="z-dialog" :style="{width,marginTop:top}">
                <div class="z-dialog__header">
                    <slot name="title">
                        <span class="z-dialog__title">{{title}}</span>
                    </slot>
                    <button class="z-dialog__headerbtn" @click="handleClose">
                        <i class="iconfont iconguanbi"></i>
                    </button>
                </div>
                <div class="z-dialog__body">
                    <slot></slot>
                </div>
                <div class="z-dialog__footer" v-if="$slots.footer">
                <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:'zDialog',
    props:{
        title:{
            type:String,
            default:'提示'
        },
        width:{
            type:String,
            default:'20%'
        },
        top:{
            type:String,
            default:'15vh'
        },
        visible:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        handleClose(){
           this.$emit('update:visible',false)
        }
    }
}
</script>
<style lang="scss" scoped>
// scoped会给当前末班中所有元素添加一个随机属性
// 会给所有组件中的样式添加一个对应的随机属性 样式只影响当前组件的元素
//::v-deep深度选择器 less/deep/  css >>>
   .z-dialog__wrapper{
       position: fixed;
       top:0;
       right: 0;
       bottom: 0;
       left: 0;
       overflow: auto;
       margin: 0;
       z-index: 2001;
       background: rgba(0,0,0,.5);
       .z-dialog{
           position: relative;
           margin: 15vh auto 50px;
           background: #fff;
           border-radius: 2px;
           box-shadow: 0 1px 3px rgba(0,0,0,.3);
           width: 30%;
           &__header{
                padding: 20px 20px 10px;
               .z-dialog__title{
                 line-height: 24px;
                 font-size: 18px;
                 color:#303133
               }
               .z-dialog__headerbtn{
                   position: absolute;
                   top:20px;
                   right: 20px;
                   padding: 0;
                   background: transparent;
                   border: none;
                   outline: none;
                   cursor: pointer;
                   font-size:16px;
                   .iconfont{
                       color:#909399
                   }
               }
           }
           &__body{
               padding: 30px 20px;
               color:#606266;
               font-size: 14px;
               word-break: break-all;
           }
           &__footer{
               padding: 10px 20px 20px;
               text-align: right;
               box-sizing: border-box;
               .z-button:first-child{
                   margin-right: 20px;
               }
           }
       }
   }
   .z-dialog-fade-enter-active{
        animation: fade .1s;
   }
   .z-dialog-fade-leave-active{
        animation: fade .1s reverse;  //reverse动画效果颠倒
   }
   @keyframes fade {
       0%{
           opacity: 0;
           transform: translateY(-10px);
       }
       100%{
           opacity: 1;
           transform: translateY(0px);
       }
   }
</style>