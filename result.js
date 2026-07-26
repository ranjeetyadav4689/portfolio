const typing = document.getElementById("typing")
const words = ["Frontend Developer", "JavaScript Developer", "MERN Developer"]
//console.log(words.length);

console.log(words);

let wordIndex = 0
let charIndex = 0
let isDeleting = false

function typeEffect() {
    const currentWord = words[wordIndex]
    console.log(currentWord.length);
    //
    if (!isDeleting) {
        typing.textContent = currentWord.slice(0, charIndex + 1)
        charIndex++
        if (charIndex === currentWord.length) {
            isDeleting = true
            setTimeout(typeEffect, 1000)
            return
        }
    } else {
        typing.textContent = currentWord.slice(0, charIndex - 1)
        charIndex--
        if (charIndex === 0) {
            isDeleting = false
            wordIndex++
            if (wordIndex === words.length) {
                wordIndex = 0
            }
        }
    }
    setTimeout(typeEffect, isDeleting ? 80 : 120)
}
typeEffect()


const menuIcon = document.querySelector(".menu-item")
const navlink = document.querySelector(".nav-link")

menuIcon.addEventListener("click", () => {
    navlink.classList.toggle("active")
})