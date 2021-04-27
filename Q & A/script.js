const questions = document.querySelectorAll('.question');

const btns = document.querySelectorAll('.btn');

questions.forEach(question => {
    const btn = question.querySelector('.btn');
    btn.addEventListener('click', (item) => {

        questions.forEach(item => {
            if(item !== question){
                item.classList.remove('show-text');    
            }
        })
        question.classList.toggle('show-text');
        
    })
    
})