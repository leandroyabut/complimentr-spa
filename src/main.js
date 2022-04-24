
const spinnerDiv = `<div class="d-flex justify-content-center"><div class="spinner-border"></div></div>`

async function getCompliment() {
    const data = await fetch("https://complimentr.com/api")
    const json = await data.json()
    return json.compliment
}

async function displayCompliment() {
    const complimentText = document.querySelector("#complimentText")
    const loadButton = document.querySelector("#loadCompliment")
    loadButton.setAttribute("disabled", "true")
    complimentText.innerHTML = spinnerDiv
    const compliment = await getCompliment()
    complimentText.innerHTML = ""
    complimentText.innerText = compliment
    loadButton.removeAttribute("disabled")
}

function ready() {
    const loadButton = document.querySelector("#loadCompliment")
    loadButton.addEventListener("click", displayCompliment)
    displayCompliment()
}

addEventListener("load", ready)