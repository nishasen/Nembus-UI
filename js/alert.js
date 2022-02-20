const alertBox = document.querySelector("#alert-box")
const alertClose = document.querySelector("#alert-close-button")
alertClose.addEventListener("click", () => {
    alertBox.style.display = "none";
});