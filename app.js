const sideNavOpen = document.querySelector("#open-side-nav")
const sideNavClose = document.querySelector("#close-side-nav")
const sideNav = document.querySelector("#side-nav")
const body = document.querySelector("#comp-body")

sideNavOpen.addEventListener("click", () => {
    sideNav.style.width="13rem";
})

sideNavClose.addEventListener("click", () => {
    sideNav.style.width="0";
})
