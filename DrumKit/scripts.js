
window.addEventListener('keydown', playSound)
// window.addEventListener('keydown', e => { ___ })  //arrow functn

function playSound(e) {
    const audio = document.querySelector(`audio[data-key = '${e.keyCode}' ]`);
    const key = document.querySelector(`.key[data-key = '${e.keyCode}' ]`);
    console.log(key);
    //stops the function
    if(!audio) 
    return;   
    
    audio.currentTime = 0;
    audio.play(); 
    
    key.classList.add('playing');
    
};

function removeTransition(e) {
    if(e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition) ) 
//      OR
// keys.forEach( function (key) {
//     key.addEventListener('transitionend', removeTransition);    
// } )