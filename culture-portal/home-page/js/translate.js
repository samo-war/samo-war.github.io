let currentLanguage = localStorage.getItem('ln');
function defineLanguage(currentLanguage) {
  if (!localStorage.getItem('ln')) {
    return 'en';
  } else {
    return currentLanguage;
  }
}

i18next.init({
    lng: `${defineLanguage(currentLanguage)}`,
    debug: true,
    resources: {
      en: {
        translation: {
          "header__photographers": "Photographers directory",
          "header__home": "Home",
          "header__search": "Search",
          "carousel__search-js": "Search Photographers",
          "thisDayPhotographer": "This day's photographer",
          "portal-info": "This is unique database of profiles of Belarussian photographers with the ability to search by their name or place of birth. All profiles contain biographical data, photographs, video materials and a map on which the most significant places for the photographer are marked.",
          "sudents-RSS": "Portal was created by students of The Rolling Scopes School",
          "up": "Up",
          "group": "RSS 2019 Group28",
        }
      },
      ru: {
        translation: {
          "header__photographers": "Каталог фотографов",
          "header__home": "Домой",
          "header__search": "Поиск",
          "carousel__search-js": "Поиск фотографов",
          "thisDayPhotographer": "Фотограф дня",
          "portal-info": "Это уникальная база данных профилей белорусских фотографов с возможностью поиска по имени или месту рождения. Все профили содержат биографические данные, фотографии, видеоматериалы и карту, на которой отмечены наиболее значимые места для фотографа.",
          "sudents-RSS": "Портал создан студентами школы The Rolling Scopes",
          "up": "Вверх",
          "group": "RSS 2019 Группа28",
        }
      },
      be: {
        translation: {
          "header__photographers": "Каталог фатографаў",
          "header__home": "Дадому",
          "header__search": "Пошук",
          "carousel__search-js": "Пошук фатографаў",
          "thisDayPhotographer": "Фатограф дня",
          "portal-info": "Гэта ўнікальная база дадзеных профіляў беларускіх фатографаў з магчымасцю пошуку па імі ці месцы народзінаў. Усе профілі ўтрымваюць біяграфічныя дадзеныя, фатаграфіі, відэаматэрыялы і карту, на якой адзначаны найболей значныя месцы для фатографа.",
          "sudents-RSS": "Партал створаны студэнтамі школы The Rolling Scopes",
          "up": "Наверх",
          "group": "RSS 2019 Група28",
        }
      },

    }
  }, function(err, t) {
    updateContent();
  });
  
  function updateContent() {
    document.getElementById('header__photographers').innerHTML = i18next.t('header__photographers');
    document.getElementById('header__home').innerHTML = i18next.t('header__home');
    document.getElementById('header__search').innerHTML = i18next.t('header__search');
    document.querySelectorAll('.carousel__photographers-js').forEach(element => element.innerHTML = i18next.t('header__photographers'));
    document.querySelectorAll('.carousel__search-js').forEach(element => element.innerHTML = i18next.t('carousel__search-js'));
    document.getElementById('thisDayPhotographer').innerHTML = i18next.t('thisDayPhotographer');
    document.getElementById('portal-info').innerHTML = i18next.t('portal-info');
    document.getElementById('students-RSS').innerHTML = i18next.t('sudents-RSS');
    document.getElementById('up').innerHTML = i18next.t('up');
    document.getElementById('group').innerHTML = i18next.t('group');
  }
  
  function changeLng(lng) {
    i18next.changeLanguage(lng);
  }
  
  i18next.on('languageChanged', () => {
    updateContent();
  });
  