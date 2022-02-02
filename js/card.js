const closeBtn = document.querySelector("#card-close")
const card = document.querySelector("#card-dismiss")

closeBtn.addEventListener("click", () => {
    card.style.display = "none";
})