let randomNumber = document.querySelectorAll('.random');
const btn = document.querySelector('#newNum');

btn.addEventListener('click', () => {
    let arr = [];
    randomNumber.forEach(numb => {
        numb.value = Math.floor(Math.random() * 50) + 1;
        arr.push(numb.value);
        arr.sort(function (a, b) { return a - b });
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                arr[i + 1] = Math.floor(Math.random() * 50) + 1;
            }
        }

    });
    console.log(arr)
    for (k in arr) {
        console.log(arr[k])
    }
})
