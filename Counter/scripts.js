const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', updateValue))
let count = 0;
function updateValue(e) {
    const btnPressed = e.srcElement.innerHTML;
    if(btnPressed == "decrement") {
        count--;
    }
    else if(btnPressed == "increment"){
        count++;
    }
    else {
        count = 0;
    }    
    value.textContent = count;
    const number = value.innerHTML;
    if(number > 0){
        value.classList.add('color-green');
        value.classList.remove('color-black');
    }
    else if(number < 0) {
        value.classList.add('color-red');
        value.classList.remove('color-black');
    }
    else {
        value.classList.remove('color-red');
        value.classList.remove('color-green');
        value.classList.add('color-black');
    }
}