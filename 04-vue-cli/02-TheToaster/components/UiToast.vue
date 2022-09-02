<template>
  <div class="toast" :class="toastStyle.className">
    <ui-icon class="toast__icon" :icon="toastStyle.iconName" />
    <span>{{ message }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

const toastStylesByType = {
  success: {
    className: 'toast_success',
    iconName: 'check-circle',
  },
  error: {
    className: 'toast_error',
    iconName: 'alert-circle',
  },
};

export default {
  name: 'UiToast',

  components: { UiIcon },

  props: {
    type: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: null,
    },
    seconds: {
      type: Number,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },

  emits: ['timeout'],

  computed: {
    toastStyle() {
      return toastStylesByType[this.type];
    },
  },

  mounted() {
    setTimeout(() => {
      this.$emit('timeout', this.number);
    }, this.seconds * 1000);
  },
};

</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>