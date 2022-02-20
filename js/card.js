const card = document.querySelector("#card-dismiss")
const closeBtn = document.querySelector("#card-close")
closeBtn.addEventListener("click", () => {
    card.style.display = "none";
})