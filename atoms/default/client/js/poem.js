
function init() {
  const mainEl = document.querySelector('.content__main-column--interactive');

  findPoemStart(mainEl);
}

function findPoemStart(mainEl) {
  let poemStartEl;
  const pAll = mainEl.querySelectorAll('p');
  pAll.forEach((pEl) => {
    if (pEl.innerText.trim() == '***') {
      pEl.classList.add('poem-start');
      poemStartEl = pEl;
    }
  });

  wrapPoem(mainEl, poemStartEl);
}

function wrapPoem(mainEl, poemStartEl) {
  let poemWrapperEl = document.createElement('div');
  poemWrapperEl.classList.add('poem');
  poemWrapperEl.innerHTML = `<div class='poem__inner'></div>`;

  mainEl.insertBefore(poemWrapperEl, poemStartEl.nextElementSibling);

  let poemEl = poemWrapperEl.querySelector('.poem__inner');

  const poemAll = document.querySelectorAll('.poem-start~h2, .poem-start~p');

  poemAll.forEach((el) => {
    poemEl.appendChild(el);
  });

  addPoemImages(poemWrapperEl, poemEl);

}


function addPoemImages(wrapperEl, poemEl) {
  let imageWrapperEl = document.createElement('div');
  imageWrapperEl.classList.add('poem__images');

  imageWrapperEl.innerHTML = `
  <div class='poem__images__inner'>
    <div class='poem__images__autumn'><picture>
      <source srcset="https://uploads.guim.co.uk/2020/11/05/Autumn-mobile.webp" type="image/webp">
      <source srcset="https://uploads.guim.co.uk/2020/11/05/Autumn-mobile.png" type="image/png">
      <img src='https://uploads.guim.co.uk/2020/11/05/Autumn-mobile.png'>
    </picture></div>

    <div class='poem__images__spring'><picture>
      <source srcset="https://uploads.guim.co.uk/2020/11/05/Spring-mobile.webp" type="image/webp">
      <source srcset="https://uploads.guim.co.uk/2020/11/05/Spring-mobile.png" type="image/png">
      <img src='https://uploads.guim.co.uk/2020/11/05/Spring-mobile.png'>
    </picture></div>

    <div class='poem__images__summer'><picture>
      <source srcset="https://uploads.guim.co.uk/2020/11/05/Summer-mobile.webp" type="image/webp">
      <source srcset="https://uploads.guim.co.uk/2020/11/05/Summer-mobile.png" type="image/png">
      <img src='https://uploads.guim.co.uk/2020/11/05/Summer-mobile.png'>
    </picture></div>

    <div class='poem__images__winter'><picture>
      <source srcset="https://uploads.guim.co.uk/2020/11/05/Winter-mobile.webp" type="image/webp">
      <source srcset="https://uploads.guim.co.uk/2020/11/05/Winter-mobile.png" type="image/png">
      <img src='https://uploads.guim.co.uk/2020/11/05/Winter-mobile.png'>
    </picture></div>
  </div>
  `;

  wrapperEl.insertBefore(imageWrapperEl, poemEl)
}
init();
