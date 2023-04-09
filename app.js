let randomFourNumber = document.querySelectorAll('.randomFour');
let randomSixNumber = document.querySelectorAll('.randomSix');
let randomSevenNumber = document.querySelectorAll('.randomSeven');
let rando = document.getElementById('newNum');

let four = document.getElementById('four');
let six = document.getElementById('six');
let seven = document.getElementById('seven');



let val = document.querySelectorAll('.btn');
val.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.value === '4') {
            four.style.display = 'flex';
            six.style.display = 'none';
            seven.style.display = 'none';

            randomFourNumber.forEach(pos => {
                pos.innerHTML = '*';
            })
        }
        else if (btn.value === '6') {
            six.style.display = 'flex';
            four.style.display = 'none';
            seven.style.display = 'none';

            randomSixNumber.forEach(pos => {
                pos.innerHTML = '*';
            })
        } else {
            seven.style.display = 'flex';
            six.style.display = 'none';
            four.style.display = 'none';

            randomSevenNumber.forEach(pos => {
                pos.innerHTML = '*';
            })
        }
    })
})



rando.addEventListener('click', () => {
    let arr = random();

    for (let i = 0; i < randomFourNumber.length; i++) {
        randomFourNumber[i].innerHTML = arr[i];
    }

    for (let l = 0; l < randomSixNumber.length; l++) {
        randomSixNumber[l].innerHTML = arr[l];
    }

    for (let s = 0; s < randomSevenNumber.length; s++) {
        randomSevenNumber[s].innerHTML = arr[s];
    }
})



function random() {
    let start = [1, 1, 1, 1, 1, 1, 1];
    let randomN = [];

    start.forEach(n => {
        n = Math.floor(Math.random() * 49) + 1;
        randomN.push(n);
        randomN.sort(function (a, b) { return a - b });
        for (let i = 0; i < randomN.length; i++) {
            if (randomN[i] === randomN[i + 1]) {
                randomN[i + 1] = Math.floor(Math.random() * 50) + 1;
            }
        }
    })
    return randomN;
}
