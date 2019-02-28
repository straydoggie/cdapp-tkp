<template>
  <div class="col-12 input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text border">答案：</span>
    </div>
    <input
      type="text"
      class="form-control border bg-white"
      readonly="readonly"
      placeholder="请先按格式输入题干内容，答案将自动产生。"
      v-if="!value.length>0"
    >
    <input
      type="text"
      class="form-control border bg-white"
      readonly="readonly"
      v-for="(item, index) in value"
      :key="index"
      :value="item"
      :placeholder="getInfo(index)"
    >
  </div>
</template>

<script>
export default {
  name: "BlankAnswer",
  props: ["value"],
  data: function() {
    return {
      info: this.key + "#答案"
    };
  },
  methods: {
    getInfo(idx) {
      return idx + "#答案";
    }
  }
};
</script>

