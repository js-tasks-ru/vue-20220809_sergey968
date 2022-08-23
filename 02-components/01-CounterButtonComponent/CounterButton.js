import internal from 'stream';
import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр и порождать событие
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  emits: {
    'update:count': (value) => value,
  },
  methods: {
    increment(value) {
      this.$emit('update:count', value + 1);
    },
  },
  template: `<button type="button" @click="increment(count)" >{{ count }}</button>`,
});
