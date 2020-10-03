import Vue from 'vue'
import App from './App.vue'
import store from './store';

Vue.config.productionTip = false;

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faAngleRight, faGrinWink, faEnvelope, faLock, faCalendar, faTimes, faShoppingCart, faPlus, faMinus,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faAngleRight, faGrinWink, faEnvelope, faLock, faCalendar, faTimes, faShoppingCart, faPlus, faMinus,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import _ from 'lodash';
Object.defineProperty(Vue.prototype, '_', { value: _ });

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import router from './router';

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');

