const heartIcon = document.querySelector("#icon-heart")

heartIcon.addEventListener("click", () => {
    if(heartIcon.style.color !== "red"){
        heartIcon.style.color = "red";
    } else {
        heartIcon.style.color = "black";
    }   
})