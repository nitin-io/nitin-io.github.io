const blink = document.querySelector('#blink');
const intro = document.querySelector(".introduction");
const project = document.querySelector("#projects")

setTimeout(() => {
    blink.style.opacity = blink.style.opacity = 1? 0 : 1;
    
}, 1000);

document.addEventListener('scroll', function(){
    let value = window.scrollY;

    intro.style.opacity = 1 + value * -0.01;
    project.style.opacity = -5 + value * 0.01;
    console.log(projectHeading.style.opacity);
})

alert("The Portfolio Website Is Under Construction. Please Be Careful!")

