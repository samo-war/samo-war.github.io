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
          "up": "Up",
          "group": "RSS 2019 Group28",
          "likhtarovich": "Georgy Likhtarovich",
          "likhtarovich__birthday": "Date of Birth: December 6, 1947",
          "likhtarovich__birthPlace": "Place of Birth: Minsk, BSSR, USSR",
          "biography": "Biography",
          "gallery": "Gallery",
          "video": "Video",
          "myBtn": "Watch the video",
          "map": "Map",
          "dashkevich": "Lev Dashkevich",
          "dashkevich__birthday": "Date of Birth: February 12, 1882",
          "dashkevich__birthPlace": "Place of Birth: Minsk, Minsk district, Minsk province, Russian Empire",
          "bulgak": "Jan Bułhak",
          "bulgak__birthday": "Date of Birth: October 6, 1876",
          "bulgak__birthPlace": "Place of birth: Ostashino, Novogrudok district, Minsk province, Russian Empire",
          "anempodistov": "Mikhail Anempodistov",
          "anempodistov__birthday": "Date of Birth: March 16, 1964",
          "anempodistov__birthPlace": "Place of Birth: Minsk, BSSR, USSR",
          "barazna": "Mikhail Barazna",
          "barazna__birthday": "Date of Birth: November 20, 1962",
          "barazna__birthPlace": "Place of birth: Rakushava, Kruglaye village council, Kruhlaye District, Mogilev Oblast, BSSR, USSR",
          "kraszewski": "Lucian Kraszewski",
          "kraszewski__birthday": "Date of Birth: July 24, 1820",
          "kraszewski__birthPlace": "Place of birth: Pruzhany, Pruzhany district, Grodno province, Governor-General of Lithuania, Russian Empire"
        }
      },
      ru: {
        translation: {
          "header__photographers": "Каталог фотографов",
          "header__home": "Домой",
          "header__search": "Поиск",
          "up": "Вверх",
          "group": "RSS 2019 Группа28",
          "likhtarovich": "Георгий Лихтарович",
          "likhtarovich__birthday": "Дата рождения: 6 декабря 1947",
          "likhtarovich__birthPlace": "Место рождения: Минск, БССР, СССР",
          "biography": "Биография",
          "gallery": "Галерея",
          "video": "Видео",
          "myBtn": "Смотреть видео",
          "map": "Карта",
          "dashkevich": "Лев Дашкевич",
          "dashkevich__birthday": "Дата рождения: 12 февраля 1882",
          "dashkevich__birthPlace": "Место рождения: Минск, Минский район, Минская губерния, Российская империя",
          "bulgak": "Ян Булгак",
          "bulgak__birthday": "Дата рождения: 6 октября 1876",
          "bulgak__birthPlace": "Место рождения: Осташино, Новогрудский уезд, Минская губерния, Российская империя",
          "anempodistov": "Михаил Анемподистов",
          "anempodistov__birthday": "Дата рождения: 16 марта 1964",
          "anempodistov__birthPlace": "Место рождения: Минск, БССР, СССР",
          "barazna": "Михаил Баразна",
          "barazna__birthday": "Дата рождения: 20 ноября 1962",
          "barazna__birthPlace": "Место рождения: Ракушево, Круглянский сельсовет, Круглянский район, Могилевская область, БССР, СССР",
          "kraszewski": "Люциан Крашевский",
          "kraszewski__birthday": "Дата рождения: 24 июля 1820",
          "kraszewski__birthPlace": "Место рождения: Пружаны, Пружанский район, Гродненская губерния, Литовское генерал-губернаторство, Российская империя"
        }
      },
      be: {
        translation: {
          "header__photographers": "Каталог фатографаў",
          "header__home": "Дадому",
          "header__search": "Пошук",
          "up": "Наверх",
          "group": "RSS 2019 Група28",
          "likhtarovich": "Георгій Ліхтаровіч",
          "likhtarovich__birthday": "Дата нараджэння: 6 снежня 1947",
          "likhtarovich__birthPlace": "Месца нараджэння:	Мінск, БССР, СССР",
          "biography": "Біяграфія",
          "gallery": "Галерэя",
          "video": "Відэа",
          "myBtn": "Глядзець відэа",
          "map": "Карта",
          "dashkevich": "Леў Дашкевіч",
          "dashkevich__birthday": "Дата нараджэння: 12 лютага 1882",
          "dashkevich__birthPlace": "Месца нараджэння:	Мінск, Мінскі павет, Мінская губерня, Расійская імперыя",
          "bulgak": "Ян Булгак",
          "bulgak__birthday": "Дата нараджэння: 6 кастрычніка 1876",
          "bulgak__birthPlace": "Месца нараджэння: Асташын, Навагрудскі павет, Мінская губерня, Расійская імперыя",
          "anempodistov": "Міхаіл Анемпадыстаў",
          "anempodistov__birthday": "Дата нараджэння: 16 сакавіка 1964",
          "anempodistov__birthPlace": "Месца нараджэння:	Мінск, БССР, СССР",
          "barazna": "Міхаіл Баразна",
          "barazna__birthday": "Дата нараджэння: 20 лістапада 1962",
          "barazna__birthPlace": "Месца нараджэння: Ракушава, Круглянскі сельсавет, Круглянскі раён, Магілёўская вобласць, БССР, СССР",
          "kraszewski": "Люцыян Крашэўскі",
          "kraszewski__birthday": "Дата нараджэння: 24 ліпеня 1820",
          "kraszewski__birthPlace": "Месца нараджэння: Пружаны, Пружанскі павет, Гродзенская губерня, Літоўскае генерал-губернатарства, Расійская імперыя"
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
    document.getElementById('up').innerHTML = i18next.t('up');
    document.getElementById('group').innerHTML = i18next.t('group');
    if (document.getElementById('likhtarovich')) {
    document.getElementById('likhtarovich').innerHTML = i18next.t('likhtarovich');
    }
    if (document.getElementById('likhtarovich')) {
      document.getElementById('likhtarovich').innerHTML = i18next.t('likhtarovich');
      document.getElementById('likhtarovich__birthday').innerHTML = i18next.t('likhtarovich__birthday');
      document.getElementById('likhtarovich__birthPlace').innerHTML = i18next.t('likhtarovich__birthPlace');
    }
    if (document.getElementById('dashkevich')) {
      document.getElementById('dashkevich').innerHTML = i18next.t('dashkevich');
      document.getElementById('dashkevich__birthday').innerHTML = i18next.t('dashkevich__birthday');
      document.getElementById('dashkevich__birthPlace').innerHTML = i18next.t('dashkevich__birthPlace');
    }
    if (document.getElementById('bulgak')) {
      document.getElementById('bulgak').innerHTML = i18next.t('bulgak');
      document.getElementById('bulgak__birthday').innerHTML = i18next.t('bulgak__birthday');
      document.getElementById('bulgak__birthPlace').innerHTML = i18next.t('bulgak__birthPlace');
    }
    if (document.getElementById('anempodistov')) {
      document.getElementById('anempodistov').innerHTML = i18next.t('anempodistov');
      document.getElementById('anempodistov__birthday').innerHTML = i18next.t('anempodistov__birthday');
      document.getElementById('anempodistov__birthPlace').innerHTML = i18next.t('anempodistov__birthPlace');
    }
    if (document.getElementById('barazna')) {
      document.getElementById('barazna').innerHTML = i18next.t('barazna');
      document.getElementById('barazna__birthday').innerHTML = i18next.t('barazna__birthday');
      document.getElementById('barazna__birthPlace').innerHTML = i18next.t('barazna__birthPlace');
    }
    if (document.getElementById('kraszewski')) {
      document.getElementById('kraszewski').innerHTML = i18next.t('kraszewski');
      document.getElementById('kraszewski__birthday').innerHTML = i18next.t('kraszewski__birthday');
      document.getElementById('kraszewski__birthPlace').innerHTML = i18next.t('kraszewski__birthPlace');
    }
    document.getElementById('biography').innerHTML = i18next.t('biography');
    document.getElementById('gallery').innerHTML = i18next.t('gallery');
    if (document.getElementById('video')){
    document.getElementById('video').innerHTML = i18next.t('video');
    }
    if (document.getElementById('myBtn')) {
    document.getElementById('myBtn').innerHTML = i18next.t('myBtn');
    }
    if (document.getElementById('map')) {
      document.getElementById('map').innerHTML = i18next.t('map');
      }
  }
  
  function changeLng(lng) {
    i18next.changeLanguage(lng);
  }
  
  i18next.on('languageChanged', () => {
    updateContent();
  });