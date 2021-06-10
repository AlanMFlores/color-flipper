const btn = document.getElementById('btn');
const color = document.querySelector('.color')
const rgb = [];

for(let i = 0; i <= 255; i++) {
    rgb.push(i);
}

const getRandomNumber = () => {
    return(Math.floor(Math.random() * rgb.length)); 
}

btn.addEventListener('click', () => {
    let rgbColor = '';
    for(let i = 0; i < 3; i++) {
        rgbColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    }

    color.textContent = rgbColor;
    document.body.style.backgroundColor = rgbColor;

})



