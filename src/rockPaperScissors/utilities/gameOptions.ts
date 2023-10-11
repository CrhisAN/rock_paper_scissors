import type { OptionTool, OptionNames } from '@/rockPaperScissors/models'

export const limitScore = 5

export const gameOptions: OptionTool[] = [
  {
    id: 1,
    name: 'rock',
    iconClass: 'fa-solid fa-gem'
  },
  {
    id: 2,
    name: 'paper',
    iconClass: 'fa-solid fa-toilet-paper'
  },
  {
    id: 3,
    name: 'scissors',
    iconClass: 'fa-solid fa-scissors'
  }
]

export const gameOptionNames: Record<string, string> = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

export const defaultScores = {
  cpu: 0,
  player: 0
}

export const gameStatus = {
  WIN: 'win',
  LOSE: 'lose',
  TIE: 'tie'
}
