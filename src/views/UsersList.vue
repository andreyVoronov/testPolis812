<!-- eslint-disable no-unused-vars -->
<template>
  <div class="user-list">
    <h1 class="user-list__title">List of users</h1>
    <ul class="user-list__items">
      <li v-for="user in users" :key="user.id" class="user-list__item">
        <router-link
          :to="{ name: 'userPage', params: { userId: user.id } }"
          class="user-list__link"
        >
          {{ user.username }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    await this.$store.dispatch('fetchUsers');
    this.users = this.$store.state.users.users;
  },
};
</script>

<style lang="scss">
@import '@/styles/style.scss';
.user-list {
  text-align: center;

  &__title {
    font-size: 2em;
    margin-bottom: 20px;
    color: $primary-color;
  }

  &__items {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin-bottom: 10px;
  }

  &__link {
    color: $accent-color;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: darken($accent-color, 20%);
    }
  }

  @media screen and (min-width: 576px) {
    &__title {
      font-size: 2.5em;
    }

    &__link {
      font-size: 1.2em;
    }
  }

  @media screen and (min-width: 768px) {
    &__link {
      font-size: 1.4em;
    }
  }

  @media screen and (min-width: 992px) {
    &__link {
      font-size: 1.6em;
    }
  }
}
</style>
