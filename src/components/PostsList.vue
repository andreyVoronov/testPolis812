<template>
  <div class="posts-list">
    <ul class="posts-list__container">
      <div class="posts-list__item" v-for="post in posts" :key="post.id">
        <h3 class="posts-list__title">{{ post.title }}</h3>
        <p class="posts-list__body">{{ post.body }}</p>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    user() {
      return this.$store.state.users.currentUser;
    },
  },
};
</script>

  <style scoped lang="scss">
.posts-list {
  padding: 20px;
  font-family: 'Arial', sans-serif;

  &__container {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    background-color: #f0f0f0;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 8px;

    @media screen and (min-width: 768px) {
      padding: 20px;
    }
  }

  &__title,
  &__body {
    text-transform: uppercase;
    font-weight: bold;

    @media screen and (min-width: 768px) {
      font-size: 1.2em;
    }
  }

  &__title {
    font-size: 1.5em;
    color: #333;
    margin-bottom: 10px;
  }

  &__body {
    font-size: 1.2em;
    color: #666;
  }
}
</style>
