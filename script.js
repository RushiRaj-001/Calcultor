let string = "";

let numbers = document.querySelectorAll('.number');

Array.from(numbers).forEach((number) => {
    number.addEventListener('click', (e) => {

        if (e.target.innerHTML == 'ENTER') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'clear') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})