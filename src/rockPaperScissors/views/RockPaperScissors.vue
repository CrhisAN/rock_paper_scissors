<script setup lang="ts">
import { ref, provide } from 'vue'
import type { GameScore } from '@/rockPaperScissors/models'
import HeaderTemplate from '../components/HeaderTemplate.vue'
import ScoreView from './ScoreView.vue'
import GameToolTemplate from '../components/GameToolTemplate.vue'
import { limitScore, defaultScores } from '@/rockPaperScissors/utilities'

const gameScores = ref<GameScore>({ ...defaultScores })

const handleGameScore = (scores: GameScore) => {
  const gameScore = gameScores.value

  if (gameScore.player === limitScore || gameScore.cpu === limitScore) return

  gameScore.player += scores.player
  gameScore.cpu += scores.cpu
}

const resetScore = () => {
  gameScores.value = { ...defaultScores }
}

provide('gameScore', { gameScores, handleGameScore, resetScore })
</script>

<template>
  <section class="section">
    <HeaderTemplate></HeaderTemplate>
    <ScoreView></ScoreView>
    <GameToolTemplate></GameToolTemplate>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>
