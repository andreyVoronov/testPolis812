<template>
  <div class="user-page">
    <div class="user-page__info info">
      <h2 class="info__title">{{ user.username }}</h2>
      <div class="info__flex">
        <h2 class="info__text">{{ user.name }}</h2>
        <a :href="'http://' + user.website" class="info__text">{{ user.website }}</a>
      </div>
      <div class="info__flex">
        <a :href="'tel:' + user.phone" class="info__text">{{ user.phone }}</a>
        <a :href="'mailto:' + user.email" class="info__text">{{ user.email }}</a>
      </div>
    </div>
    <router-link
      :to="{ name: 'userAlbums' }"
      :class="{
        'user-page__link': true,
        'user-page__link--active': $route.name === 'userAlbums',
      }"
    >
    Album List</router-link
    >
    <router-link
      :to="{ name: 'userPosts' }"
      :class="{
        'user-page__link': true,
        'user-page__link--active': $route.name === 'userPosts',
      }"
    >
    List of posts</router-link
    >

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  async mounted() {
    const { userId } = this.$route.params;
    await this.$store.dispatch('fetchUser', userId);
    await this.$store.dispatch('fetchAlbums', userId);
    await this.$store.dispatch('fetchPosts', userId);
    this.user = this.$store.state.users.currentUser;
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/style.scss";
.user-page {
  text-align: center;
  width: 60%;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }

  &__link {
    display: inline-block;
    margin: 0 40px;
    font-size: 1.2em;
    color: $accent-color;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: darken($accent-color, 20%);
    }
    @media (max-width: 490px) {
      margin: 20px 40px;
  }
  }

  &__link--active {
    font-weight: bold;
    color: rgb(12, 193, 12) !important;
  }
}
.info {
  &__title {
    font-size: 2.5em;
    color: rgb(12, 193, 12);
    margin: 20px 0;
    @media (max-width: 640px) {
      font-size: 2em;
    }
  }

  &__flex {
    display: flex;
    justify-content: space-between;
  }

  &__text {
    font-size: 1.2em;
    color: rgb(12, 193, 12);
    margin-bottom: 20px;
    max-width: 40%;

    @media (max-width: 768px) {
      max-width: 100%;
    }
    @media (max-width: 640px) {
      font-size: 0.8em;
    }
    
  }
}
</style>
