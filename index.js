const menuEls = document.querySelectorAll('.menuitem');

menuEls.forEach(menuEl => {
    menuEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        menuEl.classList.add('active');
    });
});
