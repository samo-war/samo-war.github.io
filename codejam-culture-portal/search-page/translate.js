i18next.init({
    lng: 'ru',
    debug: true,
    resources: {
      en: {
        translation: {
          "header__photographers": "Photographers directory",
          "header__home": "Home",
          "header__search": "Search",
          "bulgak": 'Jan Bułhak (October 6, 1876, Ostashino under Novogrudok - February 4, 1950, Giżycko (Lec), Warmia-Mazury, buried in Warsaw) - Russian and Polish photographer and the photographer," Polish photography father ", one of the pioneers of Polish art photography.',
          "likhtarovich": "Georgy Leonidovich Likhtorovich (6 snezhnya 1947, Minsk) - Belarussian photo artist, writer. Member of the Belarussian Union of Designers (2000). Member of the Belarussian Union of Writers (2006).",
          "kraszewski": "Lucian Kraszewski (July 24, 1820, township Pruzhany, Grodno Province, now Brest Region. - February 2, 1892, Ganyatychy Hrubieshovskiy Village, Poland) - Belarussian and Polish artist, photographer.",
          "anempodistov": "Mikhail Vladimirovich Anempodistov (March 16, 1964, Minsk - January 23, 2018, Minsk, Belarus) - Belarussian artist, designer, poet, cultural scientist, art historian.",
          "dashkevich": "Lev Urbanavich Dashkevich (February 12, 1882, Minsk - December 4, 1957 Minsk) - Belarussian photo artist, scientist, inventor, publicist, teacher.",
          "barazna": "Mikhail Grigorievich Barazna (November 20, 1962, D. Rakushava, Kruglyansky District, Mogilev Region) - Belarussian art historian, art critic, photo artist.",
          "up": "Up",
          "group": "RSS 2019 Group28",
        }
      },
      ru: {
        translation: {
          "header__photographers": "Каталог фотографов",
          "header__home": "Домой",
          "header__search": "Поиск",
          "bulgak": 'Ян Бу́лгак (6 октября 1876, Осташино под Новогрудком — 4 февраля 1950, Гижицко (Лец), Варминско-Мазурское воеводство; похоронен в Варшаве) — белорусский и польский фотограф и фотохудожник, «отец польской фотографии», один из пионеров польской художественной фотографии.',
          "likhtarovich": "Георгий Леонидович Лихторович (6 снежня 1947, Минск) - белорусский фотохудожник, литератор. Член Белорусского союза дизайнеров (2000). Член Белорусского союза писателей (2006 г.).",
          "kraszewski": "Люциан Крашевский (24 июля 1820, мест. Пружаны Гродненской губернии, ныне Брестской обл. - 2 февраля 1892, Ганятычы Грубешовский д., Польша) - белорусский и польский художник, фотограф.",
          "anempodistov": "Михаил Владимирович Анемподистов (16 марта 1964, Минск — 23 января 2018, Минск, Беларусь) — белорусский художник, дизайнер, поэт, культуролог, искусствовед.",
          "dashkevich": "Лев Урбанавич Дашкевич (12 февраля 1882, Минск - 4 декабря 1957 Минск) - белорусский фотохудожник, ученый, изобретатель, публицист, педагог.",
          "barazna": "Михаил Григорьевич Баразна (20 ноября 1962, д. Ракушава Круглянского района Могилевской области) - белорусский искусствовед, художественный критик, фотохудожник.",
          "up": "Вверх",
          "group": "RSS 2019 Группа28",
        }
      },
      be: {
        translation: {
          "header__photographers": "Каталог фатографаў",
          "header__home": "Дадому",
          "header__search": "Пошук",
          "bulgak": 'Ян Булгак (6 кастрычніка 1876, Асташына пад Наваградкам - 4 лютага, 1950, Гижицко (Лец), Вармінска-Мазурскае ваяводства; пахаваны ў Варшаве) - беларускі і польскі фатограф і фотамастак,« бацька польскай фатаграфіі », адзін з піянераў польскай мастацкай фатаграфіі.',
          "likhtarovich": "Георгій Леанідавіч Ліхтаровіч (6 Снежная 1947, Мінск) - беларускі фотамастак, літаратар. Член Беларускага саюза дызайнераў (2000). Член Беларускага саюза пісьменнікаў (2006 г.).",
          "kraszewski": "Люцыян Крашэўскі (24 ліпеня 1820, месц. Пружаны Гродзенскай губерні, цяпер Брэсцкай вобл. - 2 лютага 1892, Ганятычы Грубешаўскі д., Польшча) - беларускі і польскі мастак, фатограф.",
          "anempodistov": "Міхаіл Уладзіміравіч Анемпадыстаў (16 сакавіка 1964 Мінск - 23 студзеня 2018, Мiнск, Беларусь) - беларускі мастак, дызайнер, паэт, культуролаг, мастацтвазнаўца.",
          "dashkevich": "Леў Урбанавич Дашкевіч (12 лютага 1882, Мінск - 4 снежня 1957 Мінск) - беларускі фотамастак, вучоны, вынаходнік, публіцыст, педагог.",
          "barazna": "Міхаіл Рыгоравіч Баразна (20 лістапада 1962, в. Ракушава Круглянскага раёна Магілёўскай вобласці) - беларускі мастацтвазнаўца, мастацкі крытык, фотамастак.",
          "up": "Наверх",
          "group": "RSS 2019 Група28",
        }
      },

    }
  }, function(err, t) {
    updateContent();
  });
  
  export default function updateContent() {
    document.getElementById('header__photographers').innerHTML = i18next.t('header__photographers');
    document.getElementById('header__home').innerHTML = i18next.t('header__home');
    document.getElementById('header__search').innerHTML = i18next.t('header__search');
    if(document.getElementById('bulgak')) {
      document.getElementById('bulgak').innerHTML = i18next.t('bulgak');
    }
    if(document.getElementById('likhtarovich')) {
      document.getElementById('likhtarovich').innerHTML = i18next.t('likhtarovich');
    }
    if(document.getElementById('kraszewski')) {
      document.getElementById('kraszewski').innerHTML = i18next.t('kraszewski');
    }
    if(document.getElementById('anempodistov')) {
      document.getElementById('anempodistov').innerHTML = i18next.t('anempodistov');
    }
    if(document.getElementById('dashkevich')) {
      document.getElementById('dashkevich').innerHTML = i18next.t('dashkevich');
    }
    if(document.getElementById('barazna')) {
      document.getElementById('barazna').innerHTML = i18next.t('barazna');
    }
    document.getElementById('up').innerHTML = i18next.t('up');
    document.getElementById('group').innerHTML = i18next.t('group');
  }
  
  function changeLng(lng) {
    i18next.changeLanguage(lng);
  }
  
  i18next.on('languageChanged', () => {
    updateContent();
  });