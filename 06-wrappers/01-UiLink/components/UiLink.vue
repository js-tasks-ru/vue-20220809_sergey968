<template>
  <a v-if="tag && tag == 'a'" class="link"><slot /></a>
  <router-link v-else><slot /></router-link>
</template>

<script>
export default {
  name: 'UiLink',
  props: {
    tag: { type: String, default: null },
  },
};
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
