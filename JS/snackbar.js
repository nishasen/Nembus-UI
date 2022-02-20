const snackbarDisplay = document.querySelector("#snackbar-display-btn")
const snackbarClose = document.querySelector("#close-snackbar")
const snackbar = document.querySelector("#basic-snackbar")

snackbarDisplay.addEventListener("click", () => {
    let x = document.getElementById("basic-snackbar");
    x.className = "show";
    setTimeout(()=> x.className = x.className.replace("show", "appear"), 3000);
})

snackbarClose.addEventListener("click", () => {
    snackbar.style.visibility="hidden";
})