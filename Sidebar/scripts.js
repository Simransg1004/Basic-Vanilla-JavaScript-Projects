const btn = document.querySelector('.toggle-btn');
// console.log(btn);

const close = document.querySelector('.close-btn');

sidebar = document.querySelector('.sidebar'); 

btn.addEventListener('click', showSidebar);
close.addEventListener('click', closeSidebar);

function showSidebar() {
    sidebar.classList.toggle("sidebar-toggle");
}

function closeSidebar() {
    close.style.border = "none";
    sidebar.classList.remove("sidebar-toggle");
}