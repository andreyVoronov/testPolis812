/* eslint-disable no-shadow */
import axios from 'axios';

const state = {
  posts: [],
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
};

const actions = {
  async fetchPosts({ commit }, userId) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      commit('setPosts', response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
