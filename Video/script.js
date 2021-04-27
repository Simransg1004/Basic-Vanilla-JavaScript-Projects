const preloader = document.querySelector('.preloader');
// console.log(preloader);

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader');
});

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', play);

function play() {
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    }
    else {
        btn.classList.remove('slide');
        video.play()
    }
}