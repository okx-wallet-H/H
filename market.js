fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")

.then(res=>res.json())

.then(data=>{

let html=""

data.slice(0,10).forEach(c=>{

html+=`<div class="card">

${c.name} $${c.current_price}

</div>`

})

document.getElementById("market").innerHTML=html

})