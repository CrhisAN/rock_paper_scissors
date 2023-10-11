<script setup lang="ts">
import type { GameScore } from '@/rockPaperScissors/models'

const props = defineProps<{
  gameScore: GameScore
}>()
</script>

<template>
  <section class="section--game shadow--gray">
    <p class="section--game--score text--shadow">
      {{ gameScore.player }} - {{ gameScore.cpu }}
    </p>
  </section>
</template>

<style scoped>
.section--game {
  background: var(--var-light-turquoise);
  align-items: center;
  border-radius: 40px;
  border: solid 2px var(--var-light-turquoise);
  display: flex;
  height: 100px;
  justify-content: center;
  padding: 20px;
  width: 200px;
}
.section--game--score {
  font-size: 50px;
  font-weight: 800;
  color: var(--var-pure-white);
}
</style>
