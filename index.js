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

document.addEventListener('DOMContentLoaded', () => {
const cardslct = document.querySelectorAll('.card');
const cardwrap = document.querySelector('.flash_card');
const pdfviewer = document.querySelector('#project_report');
const pptviewer = document.querySelector('#project_presentation');
const codeviewer = document.querySelector('#project_code');

cardslct.forEach(card => {
  card.addEventListener('click', ()=>{
    if (card.id === "report") {
      pdfviewer.style.display = "block";
      pdfviewer.style.transition = "all 0.3s"
      // console.log(pdfviewer.style.display);
      cardwrap.style.display = "none";
      cardwrap.style.transition = "all 0.3s";
    } else if (card.id === "presentation"){
      pptviewer.style.display = "block";
      pptviewer.style.transition = "all 0.3s"
      // console.log(pdfviewer.style.display);
      cardwrap.style.display = "none";
      cardwrap.style.transition = "all 0.3s";
    } else {
      codeviewer.style.display = "block";
      codeviewer.style.transition = "all 0.3s"
      // console.log(pdfviewer.style.display);
      cardwrap.style.display = "none";
      cardwrap.style.transition = "all 0.3s";
    }
});
})

});

document.addEventListener('DOMContentLoaded', () => {
// const cardslct = document.querySelectorAll('.card');
const cardwrap = document.querySelector('.flash_card');
const pdfviewer = document.querySelectorAll('.wrapper');
const backway = document.querySelectorAll('#backbtn');

backway.forEach(backwaybtn => {
  backwaybtn.addEventListener('click', ()=>{
    pdfviewer.forEach(viewer =>{
      // viewer.addEventListener('click', ()=>{
        viewer.style.display = "none";
        viewer.style.transition = "all 0.3s";
        // console.log(pdfviewer.style.display);
        cardwrap.style.display = "flex";
        cardwrap.style.transition = "all 0.3s";});
    // });
});
})

});
