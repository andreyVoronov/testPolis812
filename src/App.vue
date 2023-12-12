<template>
  <div class="app">
    <header class="app__header">
      <router-link to="/" class="app__title-link">
        <h1 class="app__title">Vue SPA</h1>
      </router-link>
    </header>
    <router-view class="app__content" />
  </div>
</template>

<style lang="scss">
@import '@/styles/style.scss';

.app {
  text-align: center;
  color: $text-color;
  background-color: $background-color;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  font-family: 'FRM325x8', sans-serif;

  &__header {
    background-color: $primary-color;
    padding: 20px;
    width: 100%;
  }
  &__title {
    font-size: 2em;
    margin: 0;
    color: black;
  }

  &__content {
    margin-top: 20px;
  }

  @media screen and (max-width: 767px) {
    &__header {
      &__title {
        font-size: 1.5em;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    &__header {
      &__title {
        font-size: 2.2em;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    &__header {
      &__title {
        font-size: 2.5em;
      }
    }
  }
}
</style>
