function createWallet(){

let address = "0x" + Math.random().toString(16).substr(2,40)

document.getElementById("address").innerText = address

localStorage.setItem("wallet",address)

}