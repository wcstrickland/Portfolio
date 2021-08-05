let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let arrow = document.getElementById("arrow")
if (vw >= 975) {
    arrow.innerText = " 👉"
} else {
    arrow.innerText = " ☝️"
}
window.addEventListener("resize", (event) => {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let arrow = document.getElementById("arrow")
    if (vw >= 975) {
        arrow.innerText = " 👉"
    } else {
        arrow.innerText = " ☝️"
    }
})

