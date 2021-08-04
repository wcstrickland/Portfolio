const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const arrow = document.getElementById("arrow")

console.log(vw)
console.log(arrow.innerText)

if (vw >= 975) {
    arrow.innerText = " 👉"
} else {
    arrow.innerText = " ☝️"
}
