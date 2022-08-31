<template>
  <div class="toasts">
    <UiToast
      v-for="item in items"
      :key="item.number"
      :type="item.type"
      :message="item.message"
      :seconds="item.seconds"
      :number="item.number"
      @timeout="OnTimeOut"
    />
  </div>
</template>

<script>
import UiToast from './UiToast.vue';

export default {
  name: 'TheToaster',

  components: { UiToast },

  data() {
    return {
      items: [],
      count: 0,
    };
  },

  methods: {
    addItem(message, type) {
      this.items.push({ type: type, message: message, seconds: 5, number: ++this.count });
    },
    success(message) {
      this.addItem(message, 'success');
    },
    error(message) {
      this.addItem(message, 'error');
    },
    OnTimeOut(number) {
      let index = this.items.findIndex((item) => item.number == number);
      if (index >= 0) this.items.splice(index, 1);
    },
  },
}
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

</style>
