const menuEls = document.querySelectorAll('.menuitem');

menuEls.forEach(menuEl => {
    menuEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        menuEl.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
const toglbtn = document.querySelector('.toogle_btn');
  const toglbtnicn = document.querySelector('.toogle_btn i');
  const dropdownmenu = document.querySelector('.dropdown');

  toglbtn.addEventListener('click', () => {
    const opndropdown = dropdownmenu.classList.toggle('open');
    toglbtnicn.classList = opndropdown ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered';
  });
});