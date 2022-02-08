const sideNavOpen = document.querySelector("#open-side-nav")
const sideNavClose = document.querySelector("#close-side-nav")
const sideNav = document.querySelector("#side-nav")
const slider = document.querySelector("#slider")
const valueOfSlider = document.querySelector("#slider-value")
const stepSlider = document.querySelector("#step-slider")
const valueOfStepSlider = document.querySelector("#step-slider-value")

valueOfSlider.innerHTML = slider.value;
valueOfStepSlider.innerHTML = stepSlider.value;

sideNavOpen.addEventListener("click", () => {
    sideNav.style.width="13rem";
})

sideNavClose.addEventListener("click", () => {
    sideNav.style.width="0";
})

slider.addEventListener("input", ()=>{
    valueOfSlider.innerHTML = slider.value;
})

stepSlider.addEventListener("input", ()=>{
    valueOfStepSlider.innerHTML = stepSlider.value;
})


