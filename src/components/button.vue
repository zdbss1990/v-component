<!--
 * @Author: zhangyao
 * @Date: 2021-05-11 10:31:42
 * @LastEditors: zhangyao
 * @LastEditTime: 2021-05-12 10:40:59
-->
<template>
  <button
    class="z-button"
    :class="[
      `z-button--${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <!-- 但凡内容不定死给slot -->
    <i v-if="icon" :class="['iconfont', icon]"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: "zButton",
  props: {
    type: {
      type: String,
      default: "",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.z-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background: #ecf5ff;
  }
}
.z-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #66b1ff;
    background: #66b1ff;
  }
}
.z-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #85ce61;
    background: #85ce61;
  }
}
.z-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #a6a9ad;
    background: #a6a9ad;
  }
}
.z-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #ebb563;
    background: #ebb563;
  }
}
.z-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #f78989;
    background: #f78989;
  }
}
.z-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
.z-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
}
.z-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }
}
.z-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
}
.z-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
}
.is-disabled {
  cursor: not-allowed;
}
.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.is-circle {
  border-radius: 50%;
  padding: 12px;
}
.z-button [class*="iconfont"] + span {
  margin-left: 5px;
  vertical-align: text-top;
}
</style>
