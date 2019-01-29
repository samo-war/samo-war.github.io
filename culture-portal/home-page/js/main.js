const man = document.getElementById('manId');
const thisDayPhotographerid = document.getElementById('thisDayPhotographer');
const date = new Date().getDate();
const quotient = Math.round(date / 6);

function defineMan(quotient) {
  switch (quotient) {
    case 0:
      man.setAttribute('style', 'background-image: url(\'./home-page/assets/Aniempadystau_Michal_min.png\'); background-repeat: no-repeat; background-size: cover; background-position: center top;');
      thisDayPhotographerid.setAttribute('href', './photographers/amnepadzistau/amnepadzistau.html');
      break;
    case 1:
      man.setAttribute('style', 'background-image: url(\'./home-page/assets/Georgy_Likhtarovich_min.png\'); background-repeat: no-repeat; background-size: cover; background-position: center top;');
      thisDayPhotographerid.setAttribute('href', './photographers/likhtarovich/likhtarovich.html');
      break;
    case 2:
      man.setAttribute('style', 'background-image: url(\'./home-page/assets/Jan_Bulhak_min.png\'); background-repeat: no-repeat; background-size: cover; background-position: center top;');
      thisDayPhotographerid.setAttribute('href', './photographers/bulgak/bulgak.html');
      break;
    case 3:
      man.setAttribute('style', 'background-image: url(\'./home-page/assets/Leu_Dashkevich_min.png\'); background-repeat: no-repeat; background-size: cover; background-position: center top;');
      thisDayPhotographerid.setAttribute('href', './photographers/dashkevich/dashkevich.html');
      break;
    case 4:
      man.setAttribute('style', 'background-image: url(\'./home-page/assets/Lucjan_Kraszewski_min.png\'); background-repeat: no-repeat; background-size: cover; background-position: center top;');
      thisDayPhotographerid.setAttribute('href', './photographers/krasheuski/krasheuski.html');
      break;
    case 5:
      man.setAttribute('style', 'background-image: url(\'./home-page/assets/Mikhail_Borozna_min.png\'); background-repeat: no-repeat; background-size: cover; background-position: center top;');
      thisDayPhotographerid.setAttribute('href', './photographers/barazna/barazna.html');
      break;
    default: undefined;
  }
}

document.onload = defineMan(quotient);
