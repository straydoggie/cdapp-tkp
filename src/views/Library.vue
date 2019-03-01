<template>
  <container>
    <template slot="port">
      <h5>{{title}}</h5>
      <hr>
      <button type="button" class="btn btn-primary btn-block" @click="createContent">添加题目</button>
      <hr>
    </template>
    <template slot="starboard">
      <div>Main Contents</div>
    </template>
    <template slot="misc">
      <content-editor v-if="showEditor" @close="closeEditor"></content-editor>
    </template>
  </container>
</template>

<script>
import ContentEditor from "@/components/ContentEditor.vue";
import Container from "@/components/Container.vue";
export default {
  name: "Library",
  data: function() {
    return {
      showEditor: false,
      title: "题目列表"
    };
  },
  methods: {
    createContent: function() {
      this.showEditor = true;
    },
    closeEditor: function() {
      this.showEditor = false;
    }
  },
  components: {
    Container,
    ContentEditor
  }
};
</script>

<style scoped>
</style>
