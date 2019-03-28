<template>
  <container>
    <template slot="port">
      <button type="button" class="btn btn-outline-primary btn-block" @click="openEditor">新建草稿</button>
      <hr>
      <div class="btn btn-primary btn-block">
        <div style="text-align:left">当前编辑：</div>
        <div style="text-align:left">{{currentEditingDisplay}}</div>
      </div>
      <hr>
      <button
        class="btn btn-outline-primary btn-block"
        v-for="(item, index) in listDraft"
        :key="index"
        @click="selectPaper(item.identifier)"
      >{{item.title}}</button>
    </template>
    <template slot="starboard"></template>
    <template slot="misc">
      <paper-editor v-if="showEditor" @close="closeEditor" @save="createPaper"></paper-editor>
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
  computed: {
    mainData() {
      return this.$store.state.papers;
    },
    currentPaper() {
      return this.$store.state.editing;
    },
    currentEditingDisplay() {
      if (this.currentPaper) {
        return this.currentPaper.title;
      }
      return "无";
    },
    listDraft() {
      let list = Array();
      for (let i = 0; i < this.mainData.length; i++) {
        if (this.mainData[i].status === "0") {
          list.unshift({
            identifier: this.mainData[i].identifier,
            title: this.mainData[i].title
          });
        }
      }
      return list;
    }
  },
  methods: {
    openEditor() {
      this.showEditor = true;
    },
    closeEditor() {
      this.showEditor = false;
    },
    createPaper(paper) {
      this.$store.dispatch("createPaper", paper);
      this.closeEditor();
    },
    selectPaper(identifier) {
      console.log(identifier);
      this.$store.commit("setEditing", identifier);
    }
  }
};
</script>

<style>
</style>
