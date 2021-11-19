const burgerMenu = document.getElementById('burger-menu');
const burgerBtn = document.getElementById('burger-btn');
let open = false;


burgerBtn.addEventListener('click', () => {
    if (!open) {
        burgerMenu.classList.add('show');
        burgerBtn.classList.add('show');
        body.classList.add('no-scroll');
        header.classList.add('inversed')
        open = true;
    } else {
        burgerMenu.classList.remove('show');
        burgerBtn.classList.remove('show')
        body.classList.remove('no-scroll');
        header.classList.remove('inversed')
        open = false;
    }
});
