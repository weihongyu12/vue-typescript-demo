<template>
  <Picker/>
</template>

<script lang="ts">
import Vue from 'vue';
import Picker from '../components/picker.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Picker,
  },
});
</script>
