<template>
  <div class="toast" :class="toastClass">
    <ui-icon class="toast__icon" :icon="toastIconName" />
    <span>{{ message }}</span>
  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

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

  data() {
    return {
      toastClass: null,
      toastIconName: null,
    };
  },

  watch: {
    type: {
      immediate: true,
      handler() {
        switch(this.type){
          case "success":
            this.toastClass = "toast_success";
            this.toastIconName = "check-circle";
            break;
          case "error":
            this.toastClass = "toast_error";
            this.toastIconName = "alert-circle";
            break;
          default:
            throw new TypeError("Unknown toast type", this.type);
        }
      },
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