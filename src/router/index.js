import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';

import Game from '../components/Game/Game.vue';
import Form from '../components/Form/Form.vue';

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
