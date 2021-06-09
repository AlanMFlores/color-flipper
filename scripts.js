const colors = ['green', 'red', '#39a6a3', '#bf1363', '#ffd8cc', 'slateblue', 'orange', '#d8b69b','#141110']
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const main = document.querySelector('.main');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);  
}