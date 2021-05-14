<!--
 * @Author: zhangyao
 * @Date: 2021-05-14 14:40:53
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-14 17:39:47
-->
<template>
    <label class="z-radio" :class="{'is-checked':label===model}">
        <span class="z-radio__input">
            <span class="z-radio__inner"></span>
            <input class="z-radio__original" type="radio" 
            :name="name"
            :value="label" v-model="model">
        </span>
        <span class="z-radio__label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>
<script>
export default {
   name:'zRadio',
   inject:{
       radioGroup:{
           default:''
       }
   },
   computed:{
       model:{
           get(){
               //this.radioFroup.value
              return this.isGroup ? this.radioGroup.value:this.value
           },
           set(val){
              //触发父组件的input事件
              this.isGroup ? this.radioGroup.$emit('input',val):this.$emit('input',val)
           }
       },
       isGroup(){
         //用于判断radio是否被radio包裹
         return !!this.radioGroup
       }
   },
   created(){
       //是radio能操作到radio-group
       console.log(this.$parent)
   },
   props:{
       value:null,
       label:{
           type:[String,Number,Boolean],
           default:''
       },
       name:{
          type:String,
          default:''
       }
   },
   data(){
       return{
           
       }
   }
}
</script>
<style lang="scss" scoped>
  .z-radio{
      color:#606266;
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: pointer;
      display: inline-block;
      white-space: nowrap;
      outline: none;
      font-size: 14px;
      margin-right: 30px;
      user-select: none;
      .z-radio__input{
          white-space: nowrap;
          cursor: pointer;
          outline: none;
          display: inline-block;
          line-height: 1;
          position: relative;
          vertical-align: middle;
          .z-radio__inner{
              border:1px solid #dcdfe6;
              border-radius: 100%;
              width:14px;
              height: 14px;
              background-color: #fff;
              position: relative;
              cursor: pointer;
              display: inline-block;
              box-sizing: border-box;
              &:after{
                  width: 4px;
                  height: 4px;
                  border-radius: 100%;
                  background: #fff;
                  content: '';
                  position: absolute;
                  left: 50%;
                  top:50%;
                  transform: translate(-50%,-50% ) scale(0);
                  transition: transform .15s ease-in;
              }
          }
           .z-radio__original{
                  opacity: 0;
                  outline: none;
                  position: absolute;
                  z-index: -1;
                  top:0;
                  left:0;
                  right:0;
                  bottom:0;
                  margin:0;
              }
              .z-radio__label{
                  font-size: 14px;
                  padding-left: 10px;
              }
      }
  }
  .z-radio.is-checked{
      .z-radio__input{
          .z-radio__inner{
              border-color:#409eff;
              background: #409eff;
              &:after{
                  transform:translate(-50%,-50%) scale(1);

              }
          }
          .z-radio__label{
              color:#409eff;
          }
      }
  }
</style>