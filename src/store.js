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
      if (data.length > 0) {
        state.papers = data;
      } else {
        state.papers = Array();
      }
    },
    addToLibrary(state, item) {
      state.library.unshift(item)
    },

    createPaper(state, paper) {
      state.papers.unshift(paper)
    },
    setEditing(state, identifier) {
      for (let i = 0; i < state.papers.length; i++) {
        if (state.papers[i].identifier === identifier) {
          state.editing = state.papers[i];
        }
      }
    },
    addToPaper(state, payload) {
      state.editing.content[payload.type].unshift(payload.identifier);
    },
    removeFromPaper(state, payload) {
      state.editing.content[payload.type].splice(payload.number, 1);
    },
    publishPaper() {
      //
    }
  },
  actions: {
    initStore(context) {
      context.dispatch("initLibrary");
      context.dispatch("initPapers");
    },
    initLibrary(context) {
      axios.get("./backend/?action=get").then(
        response => (context.commit("initLibrary", response.data))
      )
    },
    addToLibrary(context, item) {
      context.commit("addToLibrary", item);
      axios
        .post("./backend/", { action: "add", payload: item })
        .then(response => console.log(response.data));
    },
    initPapers(context) {
      axios.get("./backend/?action=get_papers").then(
        response => (context.commit("initPapers", response.data))
      )
    },
    createPaper(context, paper) {
      context.commit("createPaper", paper);
      context.commit("setEditing", paper.identifier);
      axios
        .post("./backend/", { action: "create_paper", payload: paper })
        .then(response => console.log(response.data));
    },
    selectItem(context, identifier) {
      let operated = false;
      Object.keys(context.state.editing.content).forEach(function (k) {
        for (let i = 0; i < context.state.editing.content[k].length; i++) {
          if (context.state.editing.content[k][i] === identifier) {
            context.commit("removeFromPaper", { type: k, number: i });
            operated = true;
            break;
          }
        }
      });
      if (operated) return operated;
      for (let i = 0; i < context.state.library.length; i++) {
        if (context.state.library[i].identifier === identifier) {
          context.commit("addToPaper", { type: context.state.library[i].type, identifier: identifier });
          operated = true;
          break;
        }
      }
      return operated;
    }
  }
})
