<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Picker from './components/picker.vue';

export default Vue.extend({
  components: {
    Picker,
  },
});
</script>
