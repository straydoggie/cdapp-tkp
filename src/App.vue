<template>
  <div id="app">
    <nav id="navbar" class="navbar navbar-expand-sm navbar-light bg-light fixed-top border-bottom">
      <a class="navbar-brand text-primary" href="#">{{string.appName}}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid" style="height:100vh" :style="{paddingTop:config.navbarHeight}">
      <router-view class="h-100"/>
    </div>
  </div>
</template>

<script>
export default {
  /*data: function() {
      return {
        message: "Hello Vue!"
      };
    },*/
  data: function() {
    return {
      currentRawContent: "",
      currentStreamList: [],
      currentAnswers: [],
      mainDataList: [], //题目列表
      paperDataList: [], //已发布试卷列表
      sheetDataList: [], //草稿列表
      //界面数据
      config: {
        viewInShow: [true, false, false],
        navbarHeight: null,
        modalEditorSataus: 0
      },
      //界面文字
      string: {
        appName: "CDAPP TK+",
        viewTitles: ["题目列表", "试卷草稿", "已截稿"],
        modalEditorTitles: ["浏览题目", "编辑题目", "新建题目"]
      },
      //元素class定义
      style: {
        sideContent: [
          [
            "mh-100",
            "col-sd-12",
            "col-md-3",
            "css-content-side",
            "border-right"
          ], //, 'bg-primary'
          [
            "mh-100",
            "col-sd-12",
            "col-md-3",
            "css-content-side",
            "border-right"
          ], //, 'bg-info'
          [
            "mh-100",
            "col-sd-12",
            "col-md-3",
            "css-content-side",
            "border-right"
          ] //, 'bg-success'
        ],
        mainContent: [
          ["mh-100", "col-sd-12", "col-md-9", "css-content-main"], //, 'bg-light'
          ["mh-100", "col-sd-12", "col-md-9", "css-content-main"],
          ["mh-100", "col-sd-12", "col-md-9", "css-content-main"]
        ],
        contentRow: ["row", "h-100"],
        navBar: [
          "navbar",
          "navbar-expand-md",
          "navbar-light",
          "bg-light",
          "fixed-top",
          "border-bottom"
        ] //, 'bg-dark', 'navbar-dark'
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
    //console.log(this.config.navbarHeight);
    // :style="{paddingTop:config.navbarHeight}"
  }
};
</script>

<style>
/*#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/
</style>