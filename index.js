
const button = document.querySelector('.btn');
const navbar = document.querySelector('.navbar');
let active = false;

button.addEventListener('click', () => {
    navbar.classList.toggle('navbar');
    navbar.classList.toggle('navbar-open');
    active = !active;

    if (active) {
        button.innerHTML = `
            <img src="./images//javascript-96.png" alt="logo javascript">
            <img src="./images/icons8-flecha-contraer-24.png" alt="cerrar" class="arrow"> 
        `
    } else {
        button.innerHTML = `
            <img src="./images//javascript-96.png" alt="logo javascript">
            <img src="./images/icons8-flecha-ampliar-24.png" alt="abrir" class="arrow arrow-open"> `
    }

})