const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const vid = document.getElementById('ytvideo');

btn.onclick = function () {
  modal.style.display = 'block';
};
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    const iframeSrc = vid.src;
    vid.src = iframeSrc;
  }
};
const mymap = L.map('mapid').setView([53.9, 27.56667], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoibW9vcDcwOSIsImEiOiJjanJleGZiMnYwcGt5NGFvZzU0YnZtOHoyIn0.gd2GZzwXsY9IQozLfgVmow',
}).addTo(mymap);
const marker = L.marker([53.9, 27.56970]).addTo(mymap);
marker.bindPopup('Месца творчасці');
