export function saveWallet(data){

localStorage.setItem("wallet",JSON.stringify(data))

}

export function getWallet(){

return JSON.parse(localStorage.getItem("wallet"))

}