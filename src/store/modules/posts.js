/* eslint-disable no-shadow */
import axios from "axios";

const state = {
  posts: [],
};

const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  savePost(state, newPost) {
    state.posts = [...state.posts, { ...newPost, id: state.posts.length + 1 }];
  },
  deletePost(state, postId) {
    state.posts = state.posts.filter((post) => post.id !== postId);
  },
};

const actions = {
  async fetchPosts({ commit }, userId) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      commit("setPosts", response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
