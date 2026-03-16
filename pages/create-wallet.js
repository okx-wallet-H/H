import { createWallet } from "../web3/wallet"
import { saveWallet } from "../utils/storage"

export default function CreateWallet(){

async function handleCreate(){

const wallet = await createWallet()

saveWallet(wallet)

alert("钱包创建成功")

}

return(

<div className="container">

<h1>创建钱包</h1>

<button onClick={handleCreate}>

生成钱包

</button>

</div>

)

}