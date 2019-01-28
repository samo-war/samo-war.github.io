const searcher = document.getElementById('search-input');
const resultsSection = document.getElementById('results-section');
let arr;

function loadResults(str) {
  resultsSection.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name.includes(str.toLowerCase()) || arr[i].place.includes(str.toLowerCase()) || str === '') {
      const photographSection = document.createElement('div');
      photographSection.className = 'photograph-section';

      const link = document.createElement('a');
      link.href = arr[i].link;

      const img = document.createElement('img');
      img.setAttribute('src', `./assets/images/${arr[i].pict}`);
      img.setAttribute('alt', 'photographer photo');
      img.className = 'image';
      link.appendChild(img);

      const textContainer = document.createElement('div');
      const text = document.createElement('p');
      text.innerText = arr[i].info;
      textContainer.appendChild(text);

      photographSection.appendChild(link);
      photographSection.appendChild(textContainer);
      resultsSection.appendChild(photographSection);
    }
  }
}

function loadJson(str) {
  fetch('./assets/data/data.json')
    .then(response => response.json())
    .then((myJson) => {
      arr = myJson.photographers;
    })
    .then(() => loadResults(str))
    .catch('Can`t load users!');
}


function onClickEnterInSearch(e) {
  const str = searcher.value;
  if (e.keyCode === 13) {
    loadResults(str);
  }
}

window.onload = loadJson('');
searcher.addEventListener('keyup', onClickEnterInSearch);
