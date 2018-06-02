import DmsgContract from '../build/contracts/Dmsg.json'

const drizzleOptions = {
  contracts: [
    DmsgContract,
  ],
  events: {
    DmsgContract: ['MessageSent']
  },
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545"
    }
  },
  polls: {
    accounts: 1000,
    blocks: 1000
  },
}

export default drizzleOptions
