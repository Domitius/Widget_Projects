const loadText = document.querySelector('.loading-text');
const text = document.querySelector('.text');
const background = document.querySelector('.bg');
//const card = document.querySelector('.card');

let load = 0;
let interval = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(interval);
        text.classList.toggle('active');
        //card.classList.toggle('active');
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;  
}

function scale(num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}