<template>
  <header class="header">
    <h2 class="header--title text--shadow">
      <i class="icon fa-solid fa-gem">Rock</i> |
      <i class="icon fa-solid fa-toilet-paper">paper</i> |
      <i class="icon fa-solid fa-scissors">Scissors</i>
    </h2>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  background-color: var(--var-pure-white);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100dvw;
}
.header--title {
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: center;
  gap: 40px;
  font-size: 2rem;
  color: var(--var-deep-green);
}
.icon {
  display: flex;
  gap: 10px;
  width: 100%;
  font-size: 30px;
}
</style>
