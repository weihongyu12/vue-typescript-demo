<template>
  <ul
    v-if="show"
    class="picker">
    <li v-for="item of pickerList">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name : 'Picker',
  props: {
    columns: {
      type: Array,
      default: [],
    },
    show: {
      type: Boolean ,
      default: false,
    },
  },
  computed: {
    pickerList(): Array<string> {
      const arr = [];
      const columns: any = this.columns;
      for (const item of columns) {
        arr.push(item.title);
      }
      return arr;
    },
    pickerMap() : Map<string, number> {
      const map = new Map();
      const columns: any = this.columns;
      for (const item of columns) {
        map.set(item.title, item.id);
      }
      return map;
    },
  },
  methods: {
    onConfirm(value: string): void {
      const resumeId = this.pickerMap.get(value);
      this.$emit('confirm', resumeId);
    },
  },
});
</script>
