import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import albums from './modules/albums';
import posts from './modules/posts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    albums,
    posts,
  },
});
