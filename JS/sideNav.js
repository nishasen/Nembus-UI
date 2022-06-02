const hamburger = document.querySelector("#hamburger")
const sidenav = document.querySelector("#sidenav")

hamburger.addEventListener("click", () => {
    if(sidenav.style.width === "12rem"){
        sidenav.style.width = "0"
    } else {
        sidenav.style.width = "12rem"
    }
})

window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
   });