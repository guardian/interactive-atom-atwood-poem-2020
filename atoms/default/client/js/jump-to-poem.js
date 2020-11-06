

function hookJump() {
  document.querySelectorAll('.content__standfirst em').forEach((el) => {
    el.addEventListener('click', jumpToPoem);
  })
}

function jumpToPoem() {
  const poemEl = document.querySelector('.poem');
  const poemY = poemEl.getBoundingClientRect().top + window.scrollY;

  window.scroll({
    top: poemY,
    left: 0,
    behavior: 'smooth'
  });

}

hookJump();
