import DmsgContract from '../build/contracts/Dmsg.json'

const drizzleOptions = {
  contracts: [
    DmsgContract,
  ],
  events: {
    DmsgContract: ['MessageSent']
  }
}

export default drizzleOptions
