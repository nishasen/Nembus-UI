const closeBtn = document.querySelector("#card-close-btn")
const card = document.querySelector("#card-dismiss")

closeBtn.addEventListener("click", () => {
    card.style.display = "none";
})