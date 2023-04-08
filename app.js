let randomNumber = document.querySelectorAll('.random');
const btn = document.querySelector('#newNum');

btn.addEventListener('click', () => {

    let arr = random();

    for (let i = 0; i < randomNumber.length; i++) {

        randomNumber[i].innerHTML = arr[i];
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

