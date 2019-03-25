<template>
  <div class="btn-group">
    <button
      type="button"
      class="btn dropdown-toggle border"
      :class="{'btn-danger':(value<0),'border-danger':(value<0)}"
      data-toggle="dropdown"
    >{{title}}</button>
    <div class="dropdown-menu">
      <a
        class="dropdown-item"
        href="#"
        v-for="(item,index) in content"
        :key="index"
        @click="onSelect(index,item)"
      >{{item}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentEditorTreeItem",
  props: ["level", "content"],
  data: function() {
    return {
      title: "请选择",
      value: -1,
      initlevel: 0
    };
  },
  methods: {
    onSelect: function(idx, val) {
      this.title = val;
      this.value = idx;
      let data = { level: this.initlevel, value: idx, title: val };
      this.$emit("pick", data);
    }
  },

  watch: {
    content: function() {
      this.title = "请选择";
      this.value = -1;
    }
  },

  created() {
    this.initlevel = this.level;
  }
};
</script>

