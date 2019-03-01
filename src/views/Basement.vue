<template>
  <div id="app">
    <navigation id="navbar" :title="string.appName"/>
    <div class="container-fluid" style="height:100vh" :style="{paddingTop:config.navbarHeight}">
      <router-view class="h-100"/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
    name:"Basement",
  components: {
    Navigation
  },
  data: function() {
    return {
      //界面数据
      config: {
        navbarHeight: null,
      },
      //界面文字
      string: {
        appName: "CDAPP TK+",
        viewTitles: ["题目列表", "试卷草稿", "已截稿"],
        modalEditorTitles: ["浏览题目", "编辑题目", "新建题目"]
      }
    }
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

</style>