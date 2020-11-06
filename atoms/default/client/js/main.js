['app', 'poem', 'jump-to-poem'].forEach((s) => {
  var el = document.createElement('script');
  el.src = `<%= atomPath %>/${s}.js`;
  document.body.appendChild(el);
});


function init() {
  setupHeader();
}
init();

function setupHeader() {
  const headerEl = document.querySelector('.content__headline');
  splitHeadline(headerEl);
  injectImage(headerEl);
}

function splitHeadline(headerEl) {
  const headerText = headerEl.innerText.split(': ');
  headerEl.innerHTML = `<span class='h'>${headerText[0]}</span><span class='b'>${headerText[1]}</span>`;
}

function injectImage(headerEl) {
  let pictureEl = document.createElement('picture');
  pictureEl.classList.add('bg-illustration');
  // <source srcset='https://uploads.guim.co.uk/2020/11/05/Opener.avif' type='image/avif'></source>
  pictureEl.innerHTML = `<source srcset='https://uploads.guim.co.uk/2020/11/05/Opener.webp' type='image/webp'><source srcset='https://uploads.guim.co.uk/2020/11/05/Opener.jpg' type='image/jpeg'><img src='https://uploads.guim.co.uk/2020/11/05/Opener.jpg'>`;
  headerEl.parentElement.appendChild(pictureEl);
}

setTimeout(() => {
  if (window.resize) {
    const html = document.querySelector('html')
    const body = document.querySelector('body')

    html.style.overflow = 'hidden'
    html.style.margin = '0px'
    html.style.padding = '0px'

    body.style.overflow = 'hidden'
    body.style.margin = '0px'
    body.style.padding = '0px'

    window.resize()
  }
}, 100)
