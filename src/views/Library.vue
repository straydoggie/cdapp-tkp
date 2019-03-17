<template>
  <container>
    <template slot="port">
      <h5>{{title}}</h5>
      <hr>
      <button type="button" class="btn btn-outline-primary btn-block" @click="createItem">添加题目</button>
      <hr>
      <side-bar-tree></side-bar-tree>
    </template>
    <template slot="starboard">
      <content-item v-for="item in mainData" :key="item.id" :value="item" @select="selectItem"></content-item>
    </template>
    <template slot="misc">
      <content-editor v-if="showEditor" @close="closeEditor" @add="addItem" @again="addMultiItems"></content-editor>
    </template>
  </container>
</template>

<script>
import ContentEditor from "@/components/ContentEditor.vue";
import Container from "@/components/Container.vue";
import ContentItem from "@/components/ContentItem.vue";
import SideTree from "@/components/SideBarTree.vue";
export default {
  name: "Library",
  data: function() {
    return {
      showEditor: false,
      title: "题目列表",
      mainData: []
    };
  },
  methods: {
    createItem: function() {
      this.showEditor = true;
    },
    closeEditor: function() {
      this.showEditor = false;
    },
    getData: function() {
      this.axios
        .get("./backend/?func=get")
        .then(response => (this.mainData = response.data));
    },
    refreshData: function() {
      this.getData();
    },
    addItem: function(item) {
      let data = JSON.stringify({
        act: "add",
        obj: item
      });
      this.mainData.push(item);
      this.closeEditor();
      this.axios
        .post("./backend/", data)
        .then(response => this.saveValid(response.data));
    },
    addMultiItems: function(item) {
      const me = this;
      me.addItem(item);
      setTimeout(function() {
        me.closeEditor();
        setTimeout(function() {
          me.createItem();
        }, 150);
      }, 30);
    },
    saveValid(res) {
      if (res != null) {
        //
      }
    },
    selectItem() {
      //console.log(response);
      //selectItem(response)
    }
  },
  components: {
    Container,
    ContentEditor,
    ContentItem,
    SideTree
  },
  mounted() {
    this.refreshData();
  }
};
</script>

<style scoped>
</style>
