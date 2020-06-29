<template>
  <div id="app">
    <div>
      <!-- 按钮样式 -->
      <div class="col">
        <m-button @click="btnClick" disabled type="primary" size="s">添加</m-button>
        <m-button type="success" size="m">删除</m-button>
        <m-button type="warning" size="l">删除</m-button>
        <m-button type="info" size="l">删除</m-button>
      </div>
      <div class="col">
        <m-button plain size="s">添加</m-button>
        <m-button type="success" plain size="m">删除</m-button>
        <m-button type="warning" plain size="l">删除</m-button>
        <m-button type="info" plain size="l">删除</m-button>
      </div>
      <div class="col">
        <m-button round type="primary" plain size="s">添加</m-button>
        <m-button round type="success" plain size="m">删除</m-button>
        <m-button round type="warning" plain size="l">删除</m-button>
        <m-button round type="info" plain size="l">删除</m-button>
      </div>
      <div class="col">
        <m-button cricle icon="icomoon icon-pencil" plain size="s"></m-button>
        <m-button cricle icon="icomoon icon-pencil" type="primary" plain size="s"></m-button>
        <m-button cricle icon="icomoon icon-pencil" plain size="s"></m-button>
        <m-button cricle type="success" plain size="m">删</m-button>
        <m-button cricle type="warning" plain size="l">删</m-button>
        <m-button cricle type="info" size="l">加</m-button>
      </div>
      <div class="col">
        <m-button plain size="s" icon="icomoon icon-pencil">修改</m-button>
      </div>
    </div>
    <!-- dialog -->
    <br />
    <br />
    <!-- top是dialog距离顶部的距离 width为宽度 -->
    <!-- title/content可以以属性值的方式也可以用插槽的方式 -->
    <m-dialog width="400px" top="20px" title="我是标题哟" :visible.sync="visible">
      <!-- <template v-slot:title>
        <h6>我是标题</h6>
      </template> -->
      <template v-slot:content>
        <p>世事洞明皆学问</p>
        <p>人情练达即文章</p>
      </template>
      <template v-slot:footer>
        <m-button @click="hiddenDialog">取消</m-button>
        <m-button @click="hiddenDialog">确定</m-button>
      </template>
    </m-dialog>
    <m-button type="warning" @click="showDialog">点我显示隐藏dialog</m-button>
    <!-- input -->
    <m-input></m-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    btnClick() {
      console.log(111);
    },
    showDialog() {
      this.visible = true;
    },
    hiddenDialog() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  margin-bottom: 10px;
}
.m-button {
  margin-right: 10px;
}
</style>
