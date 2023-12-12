/* eslint-disable no-shadow */
import axios from 'axios';

const state = {
  users: [],
  currentUser: null,
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setCurrentUser(state, user) {
    state.currentUser = user;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      commit('setUsers', response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
  async fetchUser({ commit }, userId) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      commit('setCurrentUser', response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
