<template>
  <ul class="navbar-nav">
    <link-item herf="/">Home</link-item>
    <link-item herf="/library">Library</link-item>
    <link-item herf="/about">about</link-item>
  </ul>
</template>

<script>
import LinkItem from "@/components/LinkItem.vue";
export default {
  components: {
    LinkItem
  }
};
</script>
