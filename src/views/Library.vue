<template>
  <container>
    <template slot="port">
      <h5>{{title}}</h5>
      <hr>
      <button type="button" class="btn btn-outline-primary btn-block" @click="openEditor">添加题目</button>
      <hr>
      <side-bar-tree></side-bar-tree>
    </template>
    <template slot="starboard">
      <content-item v-for="item in mainData" :key="item.id" :value="item" @select="selectItem"></content-item>
    </template>
    <template slot="misc">
      <content-editor v-if="showEditor" @close="closeEditor" @add="addItem" @again="addItems"></content-editor>
    </template>
  </container>
</template>

<script>
import Container from "@/components/Container.vue";
import ContentEditor from "@/components/Library/ContentEditor.vue";
import ContentItem from "@/components/Library/ContentItem.vue";
import SideBarTree from "@/components/Library/SideBarTree.vue";
export default {
  name: "Library",
  data: function() {
    return {
      showEditor: false,
      title: "题目列表"
    };
  },
  computed: {
    mainData() {
      return this.$store.state.library;
    }
  },
  methods: {
    openEditor: function() {
      this.showEditor = true;
    },
    closeEditor: function() {
      this.showEditor = false;
    },
    getData: function() {
      this.$store.dispatch("initLibrary");
    },
    addItem: function(item) {
      this.$store.dispatch("addToLibrary", item);
      this.closeEditor();
    },
    addItems: function(item) {
      this.addItem(item);
      const that = this;
      setTimeout(function() {
        that.openEditor();
      }, 100);
    },
    selectItem(identifier) {
      if (
        !this.$store.state.editing ||
        this.$store.state.editing.content.length === 0
      ) {
        console.log("no paper in editing");
      } else {
        this.$store.dispatch("selectItem", identifier);
      }
    }
  },
  components: {
    Container,
    ContentEditor,
    ContentItem,
    SideBarTree
  }
};
</script>

<style scoped>
</style>
