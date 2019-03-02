<template>
  <div class="col-12" style="padding:1em 0 0 0" v-if="show">
    <div class="alert alert-custom" :class="'alert-'+type" v-if="show">
      <button type="button" class="close" @click="hide">&times;</button>
      <strong>{{title}}:&nbsp;</strong>
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertBox",
  props: {
    tip: {
      type: Object,
      default: function() {
        return { text: "", title: "", type: "" };
      }
    }
  },
  methods: {
    hide: function() {
      //this.tip = { text: "", title: "", type: "" };
      this.$emit("close");
    }
  },
  computed: {
    show: function() {
      return this.tip !== null &&
        this.tip.text !== null &&
        this.tip.text.length > 0
        ? true
        : false;
    },
    text: function() {
      return this.tip !== null &&
        this.tip.text !== null &&
        this.tip.text.length > 0
        ? this.tip.text
        : "";
    },
    title: function() {
      return this.tip !== null &&
        this.tip.title !== null &&
        this.tip.title.length > 0
        ? this.tip.title
        : "错误";
    },
    type: function() {
      return this.tip !== null &&
        this.tip.type !== null &&
        this.tip.type.length > 0
        ? this.tip.type
        : "danger";
    }
  }
};

/*
tipValue: null
showTip: function(text, title, type) {this.tipValue = { title: title, text: text, type: type };},
<alert-box :tip="tipValue" @close="showTip(null,null,null)"></alert-box>
*/
</script>

<style scoped>
.alert-custom {
  padding: 0.5em 1.5em;
  margin: 0;
}
</style>