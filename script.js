
let form = document.getElementById("fill-me");
form.addEventListener("submit", addperson)

function addperson(ev){
ev.preventDefault()
let nameinput = document.getElementById("name")
let phoneinput = document.getElementById("phone")
let hourinput = document.getElementById("hour")


let row = document.createElement("tr")
let td1 = document.createElement("td")
let td2 = document.createElement("td")
let td3 = document.createElement("td")

td1.innerText = nameinput.value
td2.innerText = phoneinput.value
td3.innerText = hourinput.value

row.appendChild(td1)
row.appendChild(td2)
row.appendChild(td3)

let tbody = document.querySelector("tbody")
tbody.appendChild(row)

nameinput.value = ""
phoneinput.value = ""
hourinput.value = ""
}