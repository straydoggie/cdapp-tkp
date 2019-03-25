<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content modal-container">
            <!-- 模态框头部 -->
            <div class="modal-header">
              <h5 class="modal-title">{{title}}</h5>
              <button type="button" class="close" @click="$emit('close')">&times;</button>
            </div>
            <!-- 模态框主体 -->
            <div class="modal-body">
              <div class="row">
                <div class="col-12 btn-group">
                  <button type="button" class="btn border" data-toggle="tooltip" title="暂不支持">单选</button>
                  <button type="button" class="btn border" data-toggle="tooltip" title="暂不支持">多选</button>
                  <button type="button" class="btn border btn-primary border-primary">填空</button>
                  <button type="button" class="btn border" data-toggle="tooltip" title="暂不支持">翻译</button>
                  <button type="button" class="btn border" data-toggle="tooltip" title="暂不支持">简答</button>
                  <button type="button" class="btn border" data-toggle="tooltip" title="暂不支持">问答</button>
                </div>
                <div class="col-12 hrdiv"></div>
                <!-- 题干 -->
                <div class="col-12 form-group">
                  <textarea
                    class="form-control border"
                    rows="5"
                    id="comment"
                    v-model="currentRawContent"
                    :placeholder="info"
                  ></textarea>
                </div>
                <!-- 填空答案 -->
                <blank-answer :value="currentAnswers"></blank-answer>
                <div class="col-12">
                  <!-- 标签树 -->
                  <content-editor-tree @filled="setKeywords"></content-editor-tree>
                </div>
                <div class="col-12">
                  <!-- 提示信息 -->
                  <alert-box :tip="tipValue" @close="showTip(null,null,null)"></alert-box>
                </div>
              </div>
            </div>
            <!-- 模态框底部 -->
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="saveCurrent('again')">继续添加</button>
              <button type="button" class="btn btn-primary" @click="saveCurrent('add')">添加</button>
              <button type="button" class="btn btn-secondary" @click="$emit('close')">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BlankAnswer from "@/components/Library/BlankAnswer.vue";
import ContentEditorTree from "@/components/Library/ContentEditorTree.vue";
import AlertBox from "@/components/Library/AlertBox.vue";
import { getIdentifier } from "@/functions";
export default {
  name: "ContentEditor",
  props: [""],
  components: {
    BlankAnswer,
    ContentEditorTree,
    AlertBox
  },
  data: function() {
    return {
      title: "新建题目",
      info:
        "题干内容：将文字粘贴在这里，并在挖空的起始和截止处分别键入 {{ 和 }} 进行标记。",
      currentRawContent: "",
      currentStreamList: [],
      currentAnswers: [],
      currentKeywords: [],
      tipValue: null
    };
  },
  methods: {
    showTip: function(text, title, type) {
      this.tipValue = { title: title, text: text, type: type };
    },
    validCurrent: function() {
      //验证数据有效性
      if (this.currentStreamList.length * this.currentAnswers.length == 0) {
        this.showTip("没有题目内容或没有设置填空！", null, null);
        return false;
      } else if (this.currentKeywords.length == 0) {
        this.showTip("请完整选择题目标签以方便今后使用！", null, null);
        return false;
      } else {
        let fistChar = this.currentStreamList[0].split("")[0];
        if (
          fistChar == "." ||
          fistChar == " " ||
          fistChar == "\t" ||
          !isNaN(fistChar)
        ) {
          this.showTip("题目开头不能是数字、小数点、空格！", null, null);
          return false;
        }
      }
      return true;
    },
    saveCurrent: function(e) {
      //保存当前数据
      if (this.validCurrent()) {
        this.$emit(e, {
          identifier: getIdentifier() + "FB",
          type: "FB",
          content: this.currentStreamList,
          answers: this.currentAnswers,
          keywords: this.currentKeywords,
          created: new Date().toLocaleString(),
          updated: new Date().toLocaleString(),
          author: ""
        });
        //将content数组串联为字符串并去除@标识
        //console.log(this.currentStreamList.join("").replace(/@/g, ""));
      }
    },
    setKeywords: function(kwds) {
      //设置关键字
      this.currentKeywords = kwds;
    },
    getBlanks: function() {
      //根据题干内容获取填空答案
      this.currentStreamList = [];
      this.currentAnswers = [];
      var templist = this.currentRawContent.split("");
      var temptext = "";
      for (var i = 0; i < templist.length; i++) {
        if (templist[i] == "{" && templist[i + 1] == "{") {
          if (temptext.length > 0) {
            this.currentStreamList.push(temptext);
          }
          temptext = "";
          for (var j = i + 2; j < templist.length; j++) {
            i = j;
            if (templist[j] == "}" && templist[j + 1] == "}") {
              i = j + 1;
              if (temptext.length > 0) {
                this.currentStreamList.push("@" + temptext);
                this.currentAnswers.push(temptext);
              }
              temptext = "";
              break;
            } else {
              if (templist[j] == "@") {
                templist[j] = "";
              }
              temptext += templist[j];
            }
          }
        } else {
          temptext += templist[i];
        }
      }
      if (temptext.length > 0) {
        this.currentStreamList.push(temptext);
      }
    }
  },
  watch: {
    //侦测题干数据更新
    currentRawContent: function() {
      this.currentRawContent.trim(".");
      this.getBlanks();
    }
  }
};
</script>

<style scoped>
.hrdiv {
  padding: 0.5em 0;
}
.alert {
  margin: 0;
  padding: 0.5em 1em;
}
.modal-container {
  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-mask {
  position: fixed;
  z-index: 1030;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.67);
  display: table;
  transition: opacity 0.3s ease;
}
/*
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
*/
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>