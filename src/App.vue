<template>
  <base-container title="Vuex"></base-container>
  <h3>{{ $store.state.counter }}</h3>
  <button>Add 1</button>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>