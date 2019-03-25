<template>
  <nav-bar>
    <template slot="title">{{title}}</template>
    <template slot="links">
      <nav-link v-for="link in links" :key="link.id" :path="link.path">{{link.name}}</nav-link>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/Navigation/NavBar.vue";
import NavLink from "@/components/Navigation/NavLink.vue";
export default {
  name: "Navigation",
  props: ["title"],
  components: {
    NavBar,
    NavLink
  },
  data: function() {
    return {
      links: [
        { path: "/library", name: "题目库" },
        { path: "/papers", name: "试卷集" }
      ]
    };
  }
};
</script>
