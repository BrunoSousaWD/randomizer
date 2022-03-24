const numb1 = document.querySelector("#numb1");
const numb2 = document.querySelector("#numb2");
const numb3 = document.querySelector("#numb3");
const numb4 = document.querySelector("#numb4");
const numb5 = document.querySelector("#numb5");
const numb6 = document.querySelector("#numb6");
const numb7 = document.querySelector("#numb7");

const btn = document.querySelector('#newNum');

btn.addEventListener('click', () => {
    numb1.innerText = Math.floor(Math.random() * 50) + 1;
    numb2.innerText = Math.floor(Math.random() * 50) + 1;
    numb3.innerText = Math.floor(Math.random() * 50) + 1;
    numb4.innerText = Math.floor(Math.random() * 50) + 1;
    numb5.innerText = Math.floor(Math.random() * 50) + 1;
    numb6.innerText = Math.floor(Math.random() * 50) + 1;
    numb7.innerText = Math.floor(Math.random() * 50) + 1;
    if (numb1.innerText === numb2.innerText || numb1.innerText === numb3.innerText || numb1.innerText === numb4.innerText || numb1.innerText === numb5.innerText || numb1.innerText === numb6.innerText || numb1.innerText === numb7.innerText) {
        numb1.innerText = Math.floor(Math.random() * 50) + 1;
    }
})