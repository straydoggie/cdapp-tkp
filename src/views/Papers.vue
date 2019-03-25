<template>
  <container>
    <template slot="port">
      <button type="button" class="btn btn-outline-primary btn-block" @click="openEditor">New draft</button>
    </template>
    <template slot="starboard"></template>
    <template slot="misc">
      <paper-editor v-if="showEditor" @close="closeEditor"></paper-editor>
    </template>
  </container>
</template>

<script>
import Container from "@/components/Container.vue";
import PaperEditor from "@/components/Papers/PaperEditor.vue";

export default {
  name: "Papers",
  components: {
    Container,
    PaperEditor
  },
  data() {
    return {
      showEditor: false
    };
  },
  computed: {},
  methods: {
    openEditor() {
      this.showEditor = true;
    },
    closeEditor() {
      this.showEditor = false;
    }
  },
  mounted() {}
};
</script>

<style>
</style>
