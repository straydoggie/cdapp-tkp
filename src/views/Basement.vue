<template>
  <div id="app">
    <navigation id="navbar" :title="string.appName"/>
    <div class="container-fluid" style="height:100vh" :style="{paddingTop:config.navbarHeight}">
      <router-view class="h-100"/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/views/Navigation.vue";
export default {
  name: "Basement",
  components: {
    Navigation
  },
  data: function() {
    return {
      //界面数据
      config: {
        navbarHeight: null
      },
      //界面文字
      string: {
        appName: "CDAPP TK+",
        viewTitles: ["题目列表", "试卷草稿", "已截稿"],
        modalEditorTitles: ["浏览题目", "编辑题目", "新建题目"]
      }
    };
  },
  methods: {
    switchView: function(viewID) {
      this.config.viewInShow = [false, false, false];
      this.config.viewInShow[viewID] = true;
    }
  },
  mounted() {
    this.config.navbarHeight =
      document.getElementById("navbar").offsetHeight + "px";
  }
};
</script>

<style>
* {
  --main-color: rgb(96, 96, 96);
  --back-color: rgb(250, 250, 250);
  --mark-color: rgb(210, 230, 255);
  --primary-opcity-color: rgba(0, 123, 255, 0.2);
  --primary-color: rgb(0, 123, 255);
  --success-color: rgb(40, 167, 69);
  --info-color: rgb(23, 162, 184);
  --warning-color: rgb(255, 193, 7);
  --danger-color: rgb(220, 53, 69);
}
</style>
