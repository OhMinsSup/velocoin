import { blockchain } from './block.model'

const getNewestBlock = () => blockchain[blockchain.length - 1]

const getTimestamp = () => Math.round(new Date().getTime() / 1000)

export const createNewBlock = () => {
  return
}
