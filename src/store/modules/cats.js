import axios from "axios";
import urljoin from "url-join";

const state = {
  cats: []
};

const getters = {
  cats: state => state.cats,
};

const actions = {
  async fetchCats({ commit }) {
    //process.env.VUE_APP_AUTH_SERVER
    const cats = await axios.get(
      urljoin(process.env.VUE_APP_CAT_API_SERVER, "v1/breeds"),
      {
        headers: {
          "x-api-key": process.env.VUE_APP_API_KEY
        }
      }
    );
    commit("setCatsArray", cats.data);
  }
};

const mutations = {
  setCatsArray(state, cats) {
    state.cats = cats;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
