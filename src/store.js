import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorized: false,
    session: null,
    library: null,
    papers: null,
    lists: null,
    editing: null
  },
  mutations: {
    initLibrary(state, data) {
      state.library = data
    },
    initPapers() {

    },
    initLists() {

    },
    setEditing() {

    },
    addToLibrary(state, item) {
      state.library.unshift(item)
    },
    addToLists() {

    },
    switchToPaper() {

    }
  },
  actions: {
    initLibrary(context) {
      axios.get("./backend/?action=get").then(
        response => (context.commit("initLibrary", response.data))
      )
    },
    addToLibrary(context, item) {
      context.commit("addToLibrary", item);
      let json = JSON.stringify({
        action: "add",
        payload: item
      });
      axios
        .post("./backend/", json)
        .then(response => this.saveValid(response.data));
    },
    saveValid(res) {
      if (res != null) {
        //返回值验证，确认内容被添加进数据库
        console.log(res);
      }
    },
  }
})
