

function hookJump() {
  document.querySelectorAll('.content__standfirst em').forEach((el) => {
    el.addEventListener('click', jumpToPoem);
  })
}

function jumpToPoem() {
  console.log('hey');
  const poemEl = document.querySelector('.poem');
  const poemY = poemEl.getBoundingClientRect().top + window.scrollY;
  console.log(poemY)

  window.scroll({
    top: poemY,
    left: 0,
    behavior: 'smooth'
  });

}

hookJump();
