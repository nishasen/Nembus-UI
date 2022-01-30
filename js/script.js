/* Alert with close button */

const alertBox = document.querySelector("#alert-close")
const alertClose = document.querySelector("#alert-close-button")

alertClose.addEventListener("click", () => {
    alertBox.style.display = "none";
});
