<script setup lang="ts">
import { inject } from 'vue'
import GameScoreTemplate from '../components/GameScoreTemplate.vue'
import PlayerLabel from '../components/PlayerLabel.vue'
import { limitScore } from '@/rockPaperScissors/utilities'

const { gameScores }: any = inject('gameScore')
</script>
<template>
  <section class="section">
    <h2 class="section--title">The first to reach {{ limitScore }} points wins</h2>
    <section class="section--score">
      <PlayerLabel class="section--player--label" :player-name="'Player'"></PlayerLabel>
      <GameScoreTemplate :game-score="gameScores"></GameScoreTemplate>
      <PlayerLabel class="section--cpu--label" :player-name="'Computer'"></PlayerLabel>
    </section>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  width: 100dvw;
}
.section--title {
  color: var(--var-pure-white);
}
.section--score {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.section--player--label {
  position: relative;
  left: 30px;
}
.section--cpu--label {
  position: relative;
  right: 30px;
}
</style>
