<template>
  <button
    class="m-button"
    :class="[
      `m-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-cricle': cricle,
        'is-disabled': disabled,
      },
      `m-button-${size}`,
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-show="icon" :class="icon" class="icon-margin"></i>
    <!-- $slots可以拿到所有的插槽，如果有default属性说明是传了之过来 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'mButton',
  // props约束，校验，也就是要求对方传过来的值是我们有的
  props: {
    // 背景实色 此处的type是父组件里面的属性，比如 type='warning'
    type: {
      //  设置传过来的type值必须是字符串类型
      type: String,
      //  如果不传值默认就是default
      default: 'default',
    },
    //  大小
    size: {
      type: String,
      default: 'm',
    },
    //  镂空
    plain: {
      type: Boolean,
      default: false,
    },
    // 椭圆形
    round: {
      type: Boolean,
      default: false,
    },
    // 圆形
    cricle: {
      type: Boolean,
      default: false,
    },
    // 字体图标
    icon: {
      type: String,
      default: '',
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
  created() {
    // console.log(this.type);
    // 通过this.$slots可以拿到所有的插槽，如果有default属性说明是传了之过来
    // console.log(this.$slots);
  },
};
</script>

<style lang="scss">
.m-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  // background-color: #fff;
  // border: 1px solid #dcdfe6;
  // color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 300;
  /* 禁止文字被选中 */
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  // &:hover,
  // &:focus {
  //   color: #409eff;
  //   border-color: #c6e2ff;
  //   background-color: #ecf5ff;
  // }
}
//  实色背景
.m-button-default {
  background-color: #dce5ee;
  color: #fff;
  border-color: #c9d8e7;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #c9d8e7;
    border-color: #c9d8e7;
  }
}

.m-button-primary {
  background-color: #66b1ff;
  color: #fff;
  border-color: #66b1ff;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
.m-button-warning {
  background-color: #e93a3a;
  color: #fff;
  border-color: #e93a3a;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #da2121;
    border-color: #da2121;
  }
}
.m-button-info {
  background-color: #8f8787;
  color: #fff;
  border-color: #8f8787;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #464242;
    border-color: #464242;
  }
}
.m-button-success {
  background-color: #67c23a;
  color: #fff;
  border-color: #67c23a;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #85ce61;
    border-radius: #85ce61;
  }
}
//  椭圆形
.m-button-s {
  padding: 8px 16px;
  font-size: 10px;
  border-radius: 4px;
}
.m-button-m {
  padding: 10px 18px;
  font-size: 12px;
  border-radius: 4px;
}
.m-button-l {
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 6px;
}
// 镂空背景
.m-button-primary.is-plain {
  background-color: #9dcaf8;
  color: #fff;
  border-color: #409eff;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #66b1ff;
    border-color: #7eb6f3;
  }
}
.m-button-success.is-plain {
  background-color: #b6f397;
  color: #fff;
  border-color: #67c23a;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #85ce61;
    border-radius: #85ce61;
  }
}
.m-button-info.is-plain {
  background-color: #cfcccc;
  color: #fff;
  border-color: #8f8787;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #464242;
    border-color: #464242;
  }
}
.m-button-warning.is-plain {
  background-color: #f38c8c;
  color: #fff;
  border-color: #e93a3a;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #da2121;
    border-color: #da2121;
  }
}
// 椭圆形
.m-button.is-round {
  border-radius: 20px;
}
// 圆形
.m-button.is-cricle {
  border-radius: 50%;
  padding: 10px;
}
.m-button [class*='icomoon'] + span {
  margin-left: 5px;
}
.is-disabled:hover {
  cursor: not-allowed;
}
</style>
