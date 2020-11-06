
function changeSeason() {
  console.log('changing season');
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

function startSeasons() {
  changeSeason();
  setInterval(() => {
    changeSeason();
  }, 30000)
}

window.addEventListener('scroll', () => {
  const bodyData = document.body.dataset;
  if (!bodyData.season) {
    console.log('might');
    if (window.scrollY > (window.innerHeight * 2)) {
      startSeasons();
    }
  }
})
