<template>
  <div>
    <!-- 动画效果 -->
    <transition name="dialog-fade">
      <!-- 遮罩层 -->
      <div class="m-dialog-wrapper" v-show="visible" @click.self="showDialog">
        <!-- 弹框 -->
        <div class="m-dialog" :style="{ width, top }">
          <div class="m-dialog-header">
            <slot name="title">
              <span class="m-dialog-title">{{ title }}</span>
            </slot>
            <button class="m-dialog-headerbtn" @click="showDialog">
              <span>×</span>
            </button>
          </div>
          <div class="m-dialog-body">
            <slot name="content">
              <span>{{ content }}</span>
            </slot>
          </div>
          <div class="m-dialog-footer" v-if="$slots.footer">
            <!-- 如果插槽里面有footer就显示 -->
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'mDialog',
  props: {
    title: {
      type: String,
      default: '提示',
    },
    content: {
      type: String,
      default: '这是提示信息',
    },
    top: {
      type: String,
      default: '50%',
    },
    width: {
      type: String,
      default: '30%',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    showDialog() {
      this.$emit('update:visible', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-fade-enter-active {
  animation: run 0.5s;
}
.dialog-fade-leave-active {
  animation: run 0.5s reverse;
}
@keyframes run {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.m-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.3);
}
.m-dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  transform: translateX(-50%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px;
  width: 30%;
  &-header {
    position: relative;
    button {
      position: absolute;
      top: 0;
      right: 8px;
      outline: none;
      border: 0;
      span {
        font-size: 20px;
      }
    }
  }
}
.m-dialog-body {
  padding: 20px 0;
}
.m-dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
