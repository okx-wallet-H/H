import { ethers } from "ethers"
import { networks } from "./networks"

export async function getBalance(address,network){

const provider = new ethers.JsonRpcProvider(networks[network].rpc)

const balance = await provider.getBalance(address)

return ethers.formatEther(balance)

}