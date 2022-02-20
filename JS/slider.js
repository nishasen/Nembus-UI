const slider = document.querySelector("#slider")
const valueOfSlider = document.querySelector("#slider-value")
const stepSlider = document.querySelector("#step-slider")
const valueOfStepSlider = document.querySelector("#step-slider-value")
valueOfSlider.innerHTML = slider.value;
valueOfStepSlider.innerHTML = stepSlider.value;

slider.addEventListener("input", ()=>{
    valueOfSlider.innerHTML = slider.value;
})

stepSlider.addEventListener("input", ()=>{
    valueOfStepSlider.innerHTML = stepSlider.value;
})