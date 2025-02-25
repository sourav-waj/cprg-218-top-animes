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

toggle.addEventListener('click', function () {

    if (this.classList.contains('fa-lightbulb')) {
        this.classList.remove('fa-lightbulb');
        this.classList.add('fa-moon');
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.borderColor = 'white';
    } else {
        this.classList.remove('fa-moon');
        this.classList.add('fa-lightbulb');
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.borderColor = 'black';
    }
});
