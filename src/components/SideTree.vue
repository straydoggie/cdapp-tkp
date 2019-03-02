<template>
  <div class="wrapper">
    <tree-object
      v-for="(child,index) in tree"
      :key="index"
      :val="child"
      :mumkey="''"
      :index="index"
      :selectedkey="selectedkey"
      @set="setkey"
    ></tree-object>
  </div>
</template>

<script>
import TreeObject from "@/components/TreeObject.vue";
export default {
  name: "SideTree",
  components: {
    TreeObject
  },
  methods: {
    setkey(anykey) {
      this.selectedkey = anykey;
      console.log("setid: " + anykey);
    }
  },
  data() {
    return {
      selectedkey: "",
      tree: null
    };
  },
  mounted() {
    this.tree = this.axios
      .get("./backend/tree.json")
      .then(res => (this.tree = res.data));
  }
};
</script>

<style scoped>
.wrapper {
  padding: 0;
  margin: 0;
  /* border-left: 1px dashed var(--primary-color); */
}
* {
  transition: all 0.3s;
}
</style>
