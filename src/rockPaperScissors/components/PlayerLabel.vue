<script setup lang="ts">
const props = defineProps<{
  playerName: string
}>()
</script>

<template>
  <aside class="aside shadow--gray">
    <label class="aside--label" for="">{{ props.playerName }}</label>
  </aside>
</template>

<style scoped>
.aside {
  background: var(--var-deep-green);
  padding: 20px;
  border: solid 3px var(--var-light-turquoise);
  width: 120px;
  border-radius: 8px;
}
.aside--label {
  color: var(--var-pure-white);
  font-weight: 700;
}
</style>
