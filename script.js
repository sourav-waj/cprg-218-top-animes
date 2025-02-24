function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('fa-regular', 'fa-moon');
    if (this.classList.contains('fa-regular', 'fa-moon')) {
        body.style.background = 'white';
    } else {
        body.style.background = 'black';
    }
});
