import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('渲染正确的标记', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.contains('#app')).to.equal(true);
  });
});
