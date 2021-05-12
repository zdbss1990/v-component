<!--
 * @Author: zhangyao
 * @Date: 2021-05-12 16:46:22
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-12 17:44:18
-->
<template>
  <div class="z-input">
    <input
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :name="name"
      class="z-input__inner"
      :class="[{ 'is-disabled': disabled }]"
    />
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
  },
  data() {
    return {};
  },
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
</style>