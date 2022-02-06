const sideNavOpen = document.querySelector("#open-side-nav")
const sideNavClose = document.querySelector("#close-side-nav")
const sideNav = document.querySelector("#side-nav")
const body = document.querySelector("#comp-body")

sideNavOpen.addEventListener("click", () => {
    sideNav.style.width="13rem";
    // body.style.paddingLeft="14rem";
    // body.style.paddingRight="2rem";

})

sideNavClose.addEventListener("click", () => {
    sideNav.style.width="0";
    // body.style.paddingLeft="1rem";
    // body.style.paddingRight="2rem";
    // body.style.margin="0 auto";
})