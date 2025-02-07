const header = document.querySelector(".header .h3") 
const para = document.querySelector(".para")
const dice = document.querySelector(".dice")
async function randomAdvice() {
    try{
        const response = await fetch("https://api.adviceslip.com/advice")
        const data = await response.json()
        header.textContent = `Advice #${data.slip.id}`
        para.textContent = data.slip.advice
    }catch(error){
        para.textContent = "Failed to fetch advices"
    }
}
dice.addEventListener("click",randomAdvice)
