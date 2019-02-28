<template>
  <!--<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <content-view/>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import ContentView from "@/views/ContentView.vue";
export default {
  name: "home",
  components: {
    //HelloWorld
    ContentView
  }
};
</script>
