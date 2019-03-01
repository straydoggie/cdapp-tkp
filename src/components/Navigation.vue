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
      <ul class="navbar-nav">
        <link-item v-for="link in links" :key="link.id" :path="link.path">{{link.name}}</link-item>
      </ul>
    </div>
  </nav>
</template>

<script>
import LinkItem from "@/components/LinkItem.vue";
export default {
  name: "Navigation",
  props: ["title"],
  components: {
    LinkItem
  },
  data: function() {
    return {
      links: [
        { path: "/", name: "Home" },
        { path: "/library", name: "Library" },
        { path: "/about", name: "About" }
      ]
    };
  }
};
</script>
