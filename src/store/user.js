import Vue from 'vue';
import axios from 'axios';
import store from './index';

const client = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://173.249.33.122/api/v1/',
})

const state = {
  categories: []
}

const getters = {
  categories: state => !!state.categories,
}

const actions = {
  // eslint-disable-next-line no-unused-vars
  getCategories({ commit }) {
    return client.get('category', {
      headers: {
        Authorization: 'bearer' + store.getters.accessToken,
      }
    }).then(({ data }) => {
      console.log(data, 'data categ')
      // commit('setCategories', cateogries);
      // return cateogries;
    })
  },
};

const mutations = {
  setCategories(state, categories) {
    // eslint-disable-next-line no-undef
    Vue.set(state, 'categories', _.clone(categories));
  },
}

export default {
  state,
  getters,
  actions,
  mutations
};