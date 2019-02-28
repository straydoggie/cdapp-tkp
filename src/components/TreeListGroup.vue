<template>
  <div class="btn-group">
    <div
      class="btn border"
      :class="{'btn-danger':!finished,'border-danger':!finished}"
      v-if="false"
    >标签：</div>
    <tree-list
      v-for="(list,index) in lists"
      :key="index"
      :content="list"
      :level="lists.length"
      @pick="update"
    ></tree-list>
    <div class="btn btn-success border border-success" v-if="finished">&nbsp;&#10003;&nbsp;</div>
  </div>
</template>

<script>
import TreeList from "@/components/TreeList.vue";
export default {
  //
  name: "TreeListGroup",
  props: [""],
  components: {
    TreeList
  },
  data: function() {
    return {
      //
      tree: null,
      lists: [],
      values: [],
      keywords: [],
      finished: false
    };
  },
  methods: {
    initial: function() {
      let tmplist = [];
      for (let i = 0; i < this.tree.length; i++) {
        tmplist.push(this.tree[i].title);
      }
      this.lists.push(tmplist);
    },
    update: function(data) {
      this.finished = false;
      this.$emit("filled", []);
      //change previous levels
      if (this.lists.length > data.level) {
        this.values.splice(data.level - 1, this.lists.length - data.level);
        this.keywords.splice(data.level - 1, this.lists.length - data.level);
        this.lists.splice(data.level - 0, this.lists.length - data.level);
      }
      //change last level
      if (this.values.length < data.level - 1) {
        this.values.push(data.value);
        this.keywords.push(data.title);
      } else {
        this.values[data.level - 1] = data.value;
        this.keywords[data.level - 1] = data.title;
      }
      //continue next level
      let nextlist = this.tree;
      for (let i = 0; i < this.values.length; i++) {
        nextlist = nextlist[this.values[i]].branches;
      }
      if (nextlist.length > 0) {
        let tmplist = [];
        for (let i = 0; i < nextlist.length; i++) {
          tmplist.push(nextlist[i].title);
        }
        this.lists.push(tmplist);
      } else {
        this.finished = true;
        this.$emit("filled", this.keywords);
      }
    }
  },
  mounted() {
    this.axios
      .get("./tree.json")
      .then(res => ((this.tree = res.data), this.initial()));
  }
};
</script>
