<script setup lang="ts">
import { ref, inject } from 'vue'
import type { OptionTool } from '@/rockPaperScissors/models/rockPaperScissors.model'
import { gameOptions, gameOptionNames, limitScore, gameStatus } from '@/rockPaperScissors/utilities'
import OptionTemplate from '@/rockPaperScissors/components/OptionTemplate.vue'
import JSConfetti from 'js-confetti'

const { gameScores, handleGameScore, resetScore }: any = inject('gameScore')

const optionSelected = ref<OptionTool>()
const cpuOptionSelected = ref<OptionTool>()
const gameResult = ref<String | null>(null)
const spinningInterval = ref<any>(null)
const activeOverlay = ref<Boolean>(false)

const endOfTheGame = () => {
  const { cpu, player } = gameScores.value
  const jsConfetti = new JSConfetti()
  if (player === limitScore && cpuOptionSelected.value) {
    jsConfetti.addConfetti()
  } else if (cpu === limitScore && cpuOptionSelected.value) {
    jsConfetti.addConfetti({
      emojis: ['😵', '😭', '😫', '☹️'],
      emojiSize: 50
    })
  }
  if (cpu === limitScore || player === limitScore) {
    optionSelected.value = undefined
    cpuOptionSelected.value = undefined
    activeOverlay.value= true
    return true
  }
  return false
}

const startSpinningIcons = () => {
  spinningInterval.value = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * gameOptions.length)
    cpuOptionSelected.value = gameOptions[randomIndex]
  }, 120)
}

const handleOptionSelected = (option: OptionTool) => {
  activeOverlay.value= true
  if (endOfTheGame()) return
  gameResult.value = null
  optionSelected.value = option
  getRandomItem()
  setTimeout(() => {
    playGameValidations()
    activeOverlay.value= false
  }, 3000)
}

const getRandomItem = () => {
  startSpinningIcons()
  const randomIndex = Math.floor(Math.random() * gameOptions.length)
  cpuOptionSelected.value = gameOptions[randomIndex]
}

const playGameValidations = () => {
  const playerOption = optionSelected.value
  const playerOptionName = playerOption!.name
  const cpuOption = cpuOptionSelected.value

  if (spinningInterval.value) {
    clearInterval(spinningInterval.value)
  }

  if (playerOption === cpuOption) {
    handleGameScore({ cpu: 0, player: 0 })
    gameResult.value = gameStatus.TIE
    return
  }

  if (gameOptionNames[playerOptionName] === cpuOption!.name) {
    handleGameScore({ cpu: 0, player: 1 })
    gameResult.value = gameStatus.WIN
    return
  }

  handleGameScore({ cpu: 1, player: 0 })
  gameResult.value = gameStatus.LOSE
}

const startAgain = () => {
  resetScore()
  activeOverlay.value= false
}
</script>
<template>
  <section class="section">
    <h2 class="text--shadow">Select your option</h2>
    <section  class="section--game-tool-items" :class="{'disabled': activeOverlay }">
      <div v-for="gameOption in gameOptions" :key="gameOption.id">
        <OptionTemplate :tool="gameOption" @handle-option-selected="handleOptionSelected">
        </OptionTemplate>
      </div>
    </section>
  </section>
  <section v-if="optionSelected && cpuOptionSelected && !endOfTheGame()" class="section">
    <div class="section card">
      <span class="span">
        Your selection is:
          <i class="icon text--shadow" :class="optionSelected.iconClass"></i>
      </span>
      <span class="span">
        The computer select:
        <i class="icon text--shadow" :class="cpuOptionSelected.iconClass"></i>
      </span>
      <span v-if="gameResult === gameStatus.WIN" class="span">
        You earned one point
        <i class="icon text--shadow fa-solid fa-fire fa-bounce" style="color: #d96f0d"></i>
      </span>
      <span v-else-if="gameResult === gameStatus.LOSE" class="span">
        You lost
        <i class="icon text--shadow fa-solid fa-poo fa-spin" style="color: #7f5305"></i>
      </span>
      <span v-else-if="gameResult === gameStatus.TIE" class="span">
        You have Tied
        <i
          class="icon text--shadow fa-solid fa-handshake-simple fa-beat"
          style="color: var(--var-deep-green)"
        ></i>
      </span>
    </div>
  </section>
  <section v-else-if="endOfTheGame()">
    <button class="button" @click="startAgain">Start Again</button>
  </section>
</template>
<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: var(--var-pure-white);
}

.section--game-tool-items {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.disabled {
  position: relative; 
  pointer-events: none; 
}

.icon {
  width: 30px;
  font-size: 30px;
  margin: 3px;
  color: var(--var-pure-white);
}

.card {
  padding: 20px;
  border-radius: 10px;
  line-height: 25px;
  width: 100%;
  font-weight: 700;
  background: var(--var-pure-white);
  color: var(--var-deep-green);
}
.span {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 220px;
}

</style>
