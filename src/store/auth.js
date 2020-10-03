import Vue from 'vue';
import axios from 'axios';
import store from './index';
// import router from '../router';

const client = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/http://173.249.33.122/api/v1/auth/',
  headers: {
    'Access-Control-Allow-Credentials':true,
  }
})

const state = {
  accessToken: localStorage.getItem('accessToken') || '',
  authErrors: {},
  registrationErrors: {},
}

const getters = {
  isAuthenticated: state => !!state.accessToken,
  accessToken: state => state.accessToken,
}

const actions = {
  auth({ commit }, payload) {
    return client.post(payload.url, payload.fields)
      .then(({status, data: {data}}) => {
        if(status) {
          store.dispatch('setToken', data.token);
          return data;
        }
      }).catch(({ response }) => {
        commit('setAuthErrors', response.data.error);
        store.dispatch('removeToken');
        return response.data;
      })
  },
  logout() {
    return new Promise((resolve) => {
      store.dispatch('removeToken');
      resolve()
    })
  },
  setToken({ commit }, accessToken) {
    commit('setAccessToken', accessToken);
    localStorage.setItem('accessToken', accessToken);
  },
  removeToken({ commit }) {
    commit('setAccessToken', '');
    localStorage.removeItem('accessToken');
  },
};

 const mutations = {
   setAccessToken(state, accessToken) {
     // eslint-disable-next-line no-undef
     Vue.set(state, 'accessToken', _.clone(accessToken));
   },
   setAuthErrors(state, errors) {
     Vue.set(state, 'authErrors', errors);
   },
 }

export default {
  state,
  getters,
  actions,
  mutations
};