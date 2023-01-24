console.log(-1)

const fs = require('fs')
console.log(0)
console.log(0.5)

const anchor = require("@project-serum/anchor")
console.log(1)
const account = anchor.web3.Keypair.generate()
console.log(2)

fs.writeFileSync('./keypair.json', JSON.stringify(account))
console.log(3)
