<template>
  <div class="user-albums">
    <ul class="user-albums__list">
      <li v-for="album in albums" :key="album.id" class="user-albums__item">
        <p class="user-albums__title" :style="{ 'color': pulsating ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)' }">
          {{ album.title }}
        </p>
        <div v-if="albumPhotos[album.id] && albumPhotos[album.id].length" class="user-albums__slider-container">
          <Slider :photos="albumPhotos[album.id]" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';

export default {
  components: {
    Slider,
  },
  data() {
    return {
      pulsating: false,
    };
  },
  methods: {
    startPulsating() {
      setInterval(() => {
        this.pulsating = !this.pulsating;
      }, 900); 
    },
  },
  computed: {
    albums() {
      return this.$store.state.albums.albumList;
    },
    albumPhotos() {
      return this.$store.state.albums.albumPhotos;
    },
    user() {
      return this.$store.state.users.currentUser;
    },
  },
  mounted() {
    this.startPulsating();
  },
};
</script>

<style lang="scss" scoped>
.user-albums {
  &__list {
    list-style: none;
    padding: 0;
  }

  &__item {
    margin-bottom: 40px; 
  }

  &__title {
    font-size: 16px; 
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 20px ; 
    transition: color 1s ease; 
  }

}
</style>
