<template>
  <div>
    <div class="content">
      <button
        class="btn-cuntom btn-title"
        @click="clicked"
        :class="{'btn-selected':selected}"
      >{{val.title}}</button>
      <button
        class="btn-cuntom btn-symbol"
        v-if="val.branches.length>0"
        @click="expanded=!expanded"
      >{{symbol}}</button>
    </div>
    <div class="children" v-if="val.branches.length>0" v-show="expanded">
      <side-bar-tree-item
        v-for="(child,index) in val.branches"
        :key="index"
        :index="index"
        :val="child"
        :mumkey="mykey"
        :selectedkey="selectedkey"
        @set="setkey"
      ></side-bar-tree-item>
    </div>
  </div>
</template>

<script>
import SideBarTreeItem from "@/components/SideBarTreeItem.vue";
export default {
  name: "SideBarTreeItem",
  props: ["val", "mumkey", "index", "selectedkey"],
  components: {
    SideBarTreeItem
  },
  data() {
    return {
      expanded: false
    };
  },
  computed: {
    symbol() {
      return this.expanded ? "-" : "+";
    },
    mykey() {
      return this.mumkey + "" + this.index;
    },
    selected() {
      return this.mykey == this.selectedkey;
    }
  },
  methods: {
    clicked() {
      this.$emit("set", this.mykey);
    },
    setkey(anykey) {
      this.$emit("set", anykey);
    }
  }
};
</script>

<style scoped>
* {
  --radius-value: 0.25em;
  --vertical-padding: 1px;
  --horizontal-padding: 1em;
}
.content {
  margin: 0.25em 1em;
}
.children {
  padding-left: 1em;
}
.btn-cuntom {
  border: none;
  color: var(--primary-color);
  background: none;
  outline: none;
  transition: all 0.3s;
}

.btn-title {
  padding: 0;
  margin: 5px 0.5em 5px 2em;
  /* border-radius: 0.5em; */
  color: var(--main-color);
  border: 1px solid transparent;
}
.btn-title:hover {
  /* background: var(--primary-color); */
  color: var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}
.btn-selected {
  /* background: var(--primary-color); */
  color: var(--primary-color);
}
.btn-symbol {
  width: 1.5em;
  height: 1.5em;
  font-size: 0.5em;
  line-height: 0.5em;
  padding: 0;
  border-radius: 1em;
  border: 1px solid transparent;
  /* background: var(--primary-color); */
  color: var(--main-color);
}
.btn-symbol:hover {
  border: 1px solid var(--main-color);
}
</style>
