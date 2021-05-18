<!--
 * @Author: zhangyao
 * @Date: 2021-05-17 16:35:59
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-18 13:46:01
-->
<template>
  <label class="z-checkbox" :class="{'is-checked':isChecked}">
    <span class="z-checkbox__input">
      <span class="z-checkbox__inner"></span>
      <input type="checkbox" class="z-checkbox__original" :value="label" :name="name" v-model="checked"/>
    </span>
    <span class="z-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "zCheckbox",
  inject:{
      checkboxGroup:{
         default:''
      }
  },
  props:{
      value:{
          type:Boolean,
          default:false
      },
      name:{
          type:String,
          default:''
      },
      label:{
          type:String,
          default:''
      }
  },
  computed:{
     checked:{
          get(){
              return this.isGroup ? this.checkboxGroup.value:this.value
          },
          set(value){
              this.isGroup ? this.checkboxGroup.$emit('input',value): this.$emit('input',value)
          }
      },
      isGroup(){
         return !!this.checkboxGroup
      },
      isChecked(){
         //如果包裹 查看label是否在数组中
         //如果没有包裹直接使用value
         return this.isGroup ? this.checked.includes(this.label) : this.checked 
      }
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.z-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  .z-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
  }
  .z-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    &:after {
      box-sizing: content-box;
      content: "";
      border: 1px solid #fff;
      border-left: 0;
      border-top: 0;
      height: 7px;
      left: 4px;
      position: absolute;
      top: 1px;
      transform: rotate(45deg) scaleY(0);
      width: 3px;
      transition: transform 0.15s ease-in 0.05s;
      transform-origin: center;
    }
  }
  .z-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    left: 10px;
    margin: 0;
    width: 0;
    height: 0;
  }
  .z-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
    margin-right: 5px;
  }
}
 .z-checkbox.is-checked{
      .z-checkbox__input{
          .z-checkbox__inner{
              border-color:#409eff;
              background: #409eff;
              &:after{
                  transform: rotate(45deg) scaleY(1);
              }
          }
          .z-checkbox__label{
              color:#409eff;
          }
      }
  }
</style>