<template>
  <div class="posts-list">
    <div class="new-post">
      <div class="new-post__field">
        <label class="new-post__label">Title:</label>
        <input v-model="newPost.title" class="new-post__input" />
      </div>
      <div class="new-post__field">
        <label class="new-post__label">Body:</label>
        <textarea v-model="newPost.body" class="new-post__input new-post__input--body" />
      </div>
      <button @click="publishPost" class="new-post__button button">
        publish
      </button>
    </div>
    <ul class="posts-list__container">
      <div class="posts-list__item" v-for="post in posts" :key="post.id">
        <h3 class="posts-list__title">{{ post.title }}</h3>
        <p class="posts-list__body">{{ post.body }}</p>
        <button @click="deletePost(post.id)" class="posts-list__delete-button button">
          &#10006;
        </button>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPost: {
        title: "",
        body: "",
      },
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    user() {
      return this.$store.state.users.currentUser;
    },
  },
  methods: {
    publishPost() {
      this.$store.commit("savePost", {
        title: this.newPost.title,
        body: this.newPost.body,
        userId: this.user.id,
      });

      this.newPost.title = "";
      this.newPost.body = "";
    },
    deletePost(postId) {
      this.$store.commit("deletePost", postId);
    },
  },
};
</script>

<style scoped lang="scss">
.posts-list {
  padding: 20px;
  font-family: "Arial", sans-serif;

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
    position: relative;
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

  .new-post {
    font-family: "FRM325x8", sans-serif;
    &__field {
      margin-bottom: 15px;
    }

    &__label {
      display: block;
      font-size: 1em;
      margin-bottom: 5px;
      color: #4caf50;;
      text-align: left;
    }

    &__input {
      width: 100%;
      padding: 10px;
      font-size: 1em;
      border: 1px solid #ccc;
      background-color: #2c3330;
      color: #4caf50;
      border-radius: 4px;
      &--body {
        line-height: 1;
        height: 100px;
      }
    }

    &__button {
      padding: 10px;
      margin-bottom: 10px;
      font-size: 1em;
    }
  }

  &__delete-button {
    padding: 8px;
    font-size: 0.8em;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>