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
    initPapers(state, data) {
      state.papers = data
    },
    setEditing() {

    },
    addToLibrary(state, item) {
      state.library.unshift(item)
    },
    addToPapers(state, item) {
      state.papers.unshift(item)
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
    initPapers(context) {
      axios.get("./backend/?action=get_papers").then(
        response => (context.commit("initPapers", response.data))
      )
    },
    addToPapers(context, item) {
      context.commit("addToPapers", item);
      let json = JSON.stringify({
        action: "add_to_papers",
        payload: item
      });
      axios
        .post("./backend/", json)
        .then(response => this.saveValid(response.data));
    },
    saveValid(res) {
      if (res != null) {
        console.log(res);
      }
    },
  }
})
