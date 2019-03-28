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
      console.log(state.editing);
    },
    addToPaper(state, payload) {
      //
      console.log("addToPaper => identifier: " + payload.identifier);
      console.log("addToPaper => before: " + state.editing.content[payload.type]);
      state.editing.content[payload.type].unshift(payload.identifier);
      console.log("addToPaper => after: " + state.editing.content[payload.type]);
      return
      /* switch (type) {
        case "sc":
          state.editing.content.sc.unshift(identifier);
          break;
        case "mc":
          state.editing.content.mc.unshift(identifier);
          break;
        case "fb":
          state.editing.content.fb.unshift(identifier);
          break;
        case "qt":
          state.editing.content.qt.unshift(identifier);
          break;
        case "st":
          state.editing.content.st.unshift(identifier);
          break;
        case "sa":
          state.editing.content.sa.unshift(identifier);
          break;
        case "eq":
          state.editing.content.eq.unshift(identifier);
          break;
        default:
          console.log("unknow type: " + type);
          break;
      } */
    },
    removeFromPaper(state, payload) {
      console.log("removeFromPaper => before: " + state.editing.content[payload.type]);
      state.editing.content[payload.type].splice(payload.number, 1);
      console.log("removeFromPaper => after: " + state.editing.content[payload.type]);
      return;
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
      console.log("---------- selectItem ----------");
      let operated = false;
      Object.keys(context.state.editing.content).forEach(function (k) {
        for (let i = 0; i < context.state.editing.content[k].length; i++) {
          console.log("selectItem => forEachKey: " + k + "." + i);
          if (context.state.editing.content[k][i] === identifier) {
            console.log("selectItem => removeFromPaper: " + identifier);
            context.commit("removeFromPaper", { type: k, number: i });
            operated = true;
            break;
          }
        }
      });
      if (operated) return operated;
      console.log("item is not existed in paper");
      for (let i = 0; i < context.state.library.length; i++) {
        console.log(context.state.library.length + " => " + i);
        if (context.state.library[i].identifier === identifier) {
          console.log("item is found in library, type is " + context.state.library[i].type);
          console.log("selectItem => addToPaper: " + identifier);
          context.commit("addToPaper", { type: context.state.library[i].type, identifier: identifier });
          operated = true;
          break;
        }
      }
      return operated;
    }
  }
})
