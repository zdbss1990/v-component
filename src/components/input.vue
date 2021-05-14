<!--
 * @Author: zhangyao
 * @Date: 2021-05-12 16:46:22
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-13 15:05:35
-->
<template>
  <div class="z-input" :class="{'z-input--suffix':showSuffix}">
    <input
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text':'password'):type"
      :disabled="disabled"
      :name="name"
      class="z-input__inner"
      :class="[{ 'is-disabled': disabled }]"
      :value="value"
      @input="handleInput"
    />
    <span class="z-input__suffix" v-if="showSuffix">
       <i class="z-input__icon iconfont iconguanbi2" v-if="clearable && value" @click="clear"></i>
       <i class="z-input__icon iconfont iconzujian-icon-39"
        :class="{'z-icon-view-active':passwordVisible}"
        v-if="showPassword && value" @click="handlePassword"></i>
    </span>
  </div>
</template>
<script>
export default {
  name: "zInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value:{
      type:String,
      default:''
    },
    clearable:{
      type:Boolean,
      default:false
    },
    showPassword:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    showSuffix(){
      return this.clearable||this.showPassword
    }
  },
  data() {
    return {
      //用于控制是否显示密码框
      passwordVisible:false
    };
  },
  methods:{
    handleInput(e){
      this.$emit('input',e.target.value)
    },
    clear(){
      this.$emit('input','')
    },
    handlePassword(){
      this.passwordVisible=!this.passwordVisible
    }
  }
};
</script>
<style lang="scss" scoped>
.z-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .z-input__inner {
    -webkit-appearance: none;
    background: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.z-input--suffix{
    .z-input__inner{
      padding-right: 30px;
    }
    .z-input__suffix{
      position: absolute;
      height: 100%;
      right: 10px;
      top:0px;
      line-height: 40px;
      text-align: center;
      color:#c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color:#c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,045,.355,1);
      }
      .z-icon-view-active{
        color:#409eff
      }
    }
  
}
</style>