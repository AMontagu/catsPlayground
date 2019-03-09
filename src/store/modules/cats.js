import axios from "axios";
import urljoin from "url-join";

async function getCatDetails(cat) {
  let url_wiki;
  let details = {
    thumbnail: "",
    description: ""
  };
  if (cat.wikipedia_url) {
    url_wiki = cat.wikipedia_url.split("/");
    const responseMedia = await axios.get(
      urljoin(
        process.env.VUE_APP_CAT_DETAILS_SERVER,
        url_wiki[url_wiki.length - 1]
      )
    );
    const firstWikipediaItem = responseMedia.data.items[0];
    if (firstWikipediaItem && firstWikipediaItem.thumbnail) {
      details.thumbnail = firstWikipediaItem.thumbnail.source;
    }
    if (firstWikipediaItem && firstWikipediaItem.description) {
      details.description = firstWikipediaItem.description.text;
    }
  }
  return details;
}

const state = {
  cats: [],
  originFilter: null,
};

const getters = {
  cats: state => state.cats,
  catById: state => id => {
    return state.cats.find(cat => {
      return cat.id === id;
    });
  },
  catOrigins: state => [...new Set(state.cats.map(item => item.origin))],
  catByOrigin: state => {
    console.log("icic", state.originFilter);
    if (!state.originFilter) {
      return state.cats;
    }
    return state.cats.filter(cat => cat.origin === state.originFilter);
  }
};

const actions = {
  async fetchCats({ commit }) {
    //process.env.VUE_APP_AUTH_SERVER
    const response = await axios.get(
      urljoin(process.env.VUE_APP_CAT_API_SERVER, "v1/breeds"),
      {
        headers: {
          "x-api-key": process.env.VUE_APP_API_KEY
        }
      }
    );

    Promise.all(
      response.data.map(cat => {
        return getCatDetails(cat);
      })
    ).then(catDetails => {
      if (catDetails) {
        catDetails.forEach((catDetail, index) => {
          response.data[index].thumbnail = catDetail.thumbnail;
          response.data[index].descriptionFromWiki = catDetail.description;
        });
        commit("setCatsArray", response.data);
      }
    });
  }
};

const mutations = {
  setCatsArray(state, cats) {
    state.cats = cats;
  },
	setCatOriginFilter(state, filter) {
    state.originFilter = filter;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
