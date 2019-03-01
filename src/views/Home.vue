<template>
  <!--<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <library/>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Library from "@/views/Library.vue";
export default {
  name: "home",
  components: {
    //HelloWorld
    Library
  }
};
</script>
