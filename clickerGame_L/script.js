const btn = document.querySelector("#pressMe")
let score = 0;

btn.addEventListener("click", () => {
    score += 1
    
    finalScore()
})

const h2 = document.createElement("h2");
const div = document.querySelector("#score")

function finalScore() {
    h2.textContent = `Score: ${score}`
    div.appendChild(h2)
}

setTimeout(function() {
    alert("Time is up! You clicked " + score + " times")
}, 6000)