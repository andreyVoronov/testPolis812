/* eslint-disable no-shadow */

import axios from 'axios';
import Vue from 'vue';

const state = {
  albumList: [],
  albumPhotos: {},
};

const mutations = {
  setAlbums: (state, albums) => {
    state.albumList = albums;
  },
  setAlbumPhotos: (state, { albumId, photos }) => {
    Vue.set(state.albumPhotos, albumId, photos);
  },
};

const actions = {
  async fetchAlbums({ commit }, userId) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
      const albums = response.data;

      await Promise.all(albums.map(async (album) => {
        const photosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}&_limit=5`);
        const photos = photosResponse.data
        commit('setAlbumPhotos', { albumId: album.id, photos });
      }));

      commit('setAlbums', albums);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
