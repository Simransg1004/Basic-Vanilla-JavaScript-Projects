const modalBtn = document.querySelector('.modal-btn');
// console.log(modalBtn);

const modal = document.querySelector('.modal');

const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);

const main = document.querySelector('.main');
function showModal() {
    // console.log(this);
    modal.classList.add('open-modal');
    main.classList.add('open-modal');
}

function hideModal() {
    modal.classList.remove('open-modal');
    main.classList.remove('open-modal');
}


