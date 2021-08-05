window.addEventListener("resize", (event) => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const arrow = document.getElementById("arrow")
    if (vw >= 975) {
        arrow.innerText = " 👉"
    } else {
        arrow.innerText = " ☝️"
    }
})

