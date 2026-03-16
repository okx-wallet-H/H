import { useEffect,useState } from "react"
import { getWallet } from "../utils/storage"
import { getBalance } from "../web3/balance"

export default function Wallet(){

const [address,setAddress] = useState("")
const [bnb,setBnb] = useState(0)

useEffect(()=>{

const wallet = getWallet()

setAddress(wallet.address)

loadBalance(wallet.address)

},[])

async function loadBalance(addr){

const balance = await getBalance(addr,"bnb")

setBnb(balance)

}

return(

<div>

<h2>钱包地址</h2>

<p>{address}</p>

<h2>BNB余额</h2>

<p>{bnb}</p>

</div>

)

}