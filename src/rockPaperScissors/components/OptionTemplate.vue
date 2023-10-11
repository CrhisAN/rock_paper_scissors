<script setup lang="ts">
import type { OptionTool } from '@/rockPaperScissors/models';


defineProps<{
  tool: OptionTool
}>();

defineEmits<{
  (event: 'handleOptionSelected', optionSelected: OptionTool): void
}>()

</script>
<template>
  <button @click="$emit('handleOptionSelected', tool)" class="button button--size shadow--gray">
    <i class="icon text--shadow " :class="tool.iconClass"></i>
  </button>
</template>
<style scoped>
.button--size {
  width: 80px;
  height: 80px;
}


.icon {
  font-size: 30px;
  color: var(--var-pure-white);
}

</style>