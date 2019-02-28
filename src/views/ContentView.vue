<template>
  <div class="row h-100" style="height:100%">
    <div class="col-12 col-md-3 mh-100 border-right" style="padding:1em;overflow-y:auto;">
      <h5>{{title}}</h5>
      <hr>
      <button type="button" class="btn btn-primary btn-block" @click="createContent">添加题目</button>
      <hr>
    </div>
    <!-- MainView #1 -->
    <div class="col-12 col-md-9 mh-100" style="padding:1em;overflow-y:auto;">主要内容栏</div>
    <content-editor v-if="showEditor" @close="closeEditor"></content-editor>
  </div>
</template>

<script>
import ContentEditor from "@/components/ContentEditor.vue";
export default {
  //
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
    ContentEditor
  }
};
</script>

<style scoped>
</style>
