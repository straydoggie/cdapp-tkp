<template>
  <modal-view>
    <template slot="header">
      <h3>{{title}}</h3>
    </template>
    <template slot="body">
      <div class="container mt-3">
        <!-- input:title -->
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text input-label">试卷标题</span>
          </div>
          <input type="text" class="form-control" placeholder="必须" v-model="inputTitle">
        </div>
        <!-- input:title.sec -->
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text input-label">试卷说明</span>
          </div>
          <input type="text" class="form-control" placeholder="可选" v-model="inputComment">
        </div>
        <!-- input:comment -->
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text input-label">备注</span>
          </div>
          <input type="text" class="form-control" placeholder="可选" v-model="inputRemark">
        </div>
        <!-- alert -->
        <div
          class="alert alert-danger alert-dismissible fade show alert-custom"
          v-if="alertDisplay"
        >
          <button type="button" class="close alert-close-btn" @click="hideAlert">&times;</button>
          <strong>错误!</strong>
          {{alertContent}}。
        </div>
      </div>
    </template>
    <template slot="footer">
      <button class="btn btn-primary" @click="eventSave">保存</button>
      <button class="btn btn-secondary" @click="eventClose">取消</button>
    </template>
  </modal-view>
</template>

<script>
import ModalView from "@/components/ModalView.vue";
export default {
  name: "PaperEditor",
  components: {
    ModalView
  },
  data() {
    return {
      title: "新建草稿",
      alertDisplay: false,
      alertContent: "失败的操作",
      inputTitle: "",
      inputComment: "",
      inputRemark: ""
    };
  },
  methods: {
    showAlert(text) {
      this.alertDisplay = true;
      this.alertContent = text;
    },
    hideAlert() {
      this.alertDisplay = false;
    },
    eventSave() {
      if (this.inputTitle.length < 10) {
        this.showAlert("请输入试卷标题，且长度大于10个字");
      } else {
        this.$emit("save", {
          title: this.alertDisplay,
          comment: this.inputComment,
          remark: this.inputRemark
        });
      }
    },
    eventClose() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.input-label {
  width: 6em;
}
.alert-custom {
  padding: 0.4em 1em 0.3em 0.6em;
  font-size: 1em;
  margin: 0;
  margin-bottom: 1em;
}
.alert-close-btn {
  font-size: 1.5em;
  padding: 0.2em 0.5em;
  margin: 0;
}
</style>