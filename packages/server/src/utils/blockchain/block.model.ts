export const BLOCK_GENERATION_INTERVAL = 10
export const DIFFICULTY_ADJUSMENT_INTERVAL = 10

export type TxIn = {
  signature: string
  txOutId: string
  txOutIndex: number
}

export type TxOut = {
  address: string
  amount: number
}

export type GenesisTxT = {
  id: string
  txIns: TxIn[]
  txOuts: TxOut[]
}

export type BlockParams = {
  index: number
  hash: string
  previousHash: string
  timestamp: number
  data: GenesisTxT[]
  difficulty: number
  nonce: number
}

export const genesisTx: GenesisTxT = {
  txIns: [{ signature: '', txOutId: '', txOutIndex: 0 }],
  txOuts: [
    {
      address:
        '04f20aec39b4c5f79355c053fdaf30410820400bb83ad93dd8ff16834b555e0f6262efba6ea94a87d3c267b5e6aca433ca89b342ac95c40230349ea4bf9caff1ed',
      amount: 50,
    },
  ],
  id: 'ad67c73cd8e98af6db4ac14cc790664a890286d4b06c6da7ef223aef8c281e76',
}

class Block {
  index: number
  hash: string
  previousHash: string
  timestamp: number
  data: GenesisTxT[]
  difficulty: number
  nonce: number

  constructor(params: BlockParams) {
    for (const iterator of Object.keys(params)) {
      this[iterator] = params[iterator]
    }
  }
}

const genesisBlock = new Block({
  index: 0,
  hash: '82a3ecd4e76576fccce9999d560a31c7ad1faff4a3f4c6e7507a227781a8537f',
  previousHash: '',
  timestamp: 1518512316,
  data: [genesisTx],
  difficulty: 0,
  nonce: 0,
})

let blockchain = [genesisBlock]

export { blockchain }
