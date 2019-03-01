<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top border-bottom">
    <a class="navbar-brand text-primary" href="#">{{title}}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <navbar-links/>
    </div>
  </nav>
</template>

<script>
import NavbarLinks from "@/components/NavbarLinks.vue"
export default {
  //
  name: "navbar",
  props:["title"],
  components:{
      NavbarLinks
  }
};
</script>
