import * as bip39 from "bip39"
import hdkey from "hdkey"
import { ethers } from "ethers"

export async function createWallet() {

const mnemonic = bip39.generateMnemonic()

const seed = await bip39.mnemonicToSeed(mnemonic)

const root = hdkey.fromMasterSeed(seed)

const addrNode = root.derive("m/44'/60'/0'/0/0")

const privateKey = addrNode.privateKey.toString("hex")

const wallet = new ethers.Wallet(privateKey)

return {

mnemonic,
privateKey,
address: wallet.address

}

}