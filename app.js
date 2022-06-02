// Side nav for documentation page
const sideNavOpen = document.querySelector("#open-side-nav")
const sideNavClose = document.querySelector("#close-side-nav")
const sideNav = document.querySelector("#side-nav")

sideNavOpen.addEventListener("click", () => {
    sideNav.style.width = "13rem";
})

sideNavClose.addEventListener("click", () => {
    sideNav.style.width = "0";
})

window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
   });
