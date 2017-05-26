import Vue from 'vue';
import Electron from 'vue-electron';
import Resource from 'vue-resource';
import Router from 'vue-router';
import draggable from 'vuedraggable';

import App from './App';
import routes from './routes';
import store from 'renderer/vuex/store';

Vue.use(Electron);
Vue.use(Resource);
Vue.use(Router);
Vue.component('draggable', draggable);
Vue.config.debug = true;

const router = new Router({
  scrollBehavior: () => ({y: 0}),
  routes
});

/* eslint-disable no-new */
new Vue({
  store,
  router,
  ...App
}).$mount('#app');
