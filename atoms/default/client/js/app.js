// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

function changeSeason() {
  const nextSeason = {
    'autumn': 'winter',
    'winter': 'spring',
    'spring': 'summer',
    'summer': 'autumn'
  }

  const currentSeason = document.body.dataset.season;
  if (currentSeason) {
    document.body.dataset.season = nextSeason[currentSeason];
  } else {
    document.body.dataset.season = Object.keys(nextSeason)[0];
  }

}

changeSeason();
setInterval(() => {
  changeSeason();
}, 24000)
