/**
 * Andijan Premium Driving School — UzAuto Motors Style
 * Primary Language: Russian (ru), Secondary: Uzbek (uz)
 */

const UZAUTO_DATA = {
  currentLang: 'ru', // Default primary language

  // Dealership Company Info
  company: {
    name: "ANDIJAN PREMIUM",
    subtitle: {
      ru: "Официальный образовательный портал автошколы",
      uz: "Avtomaktab rasmiy ta'lim portali"
    },
    hotline: "+998 (74) 228-00-55",
    phoneSecondary: "+998 (90) 123-45-67",
    city: {
      ru: "г. Андижан",
      uz: "Andijon sh."
    },
    workHours: {
      ru: "Пн - Сб: 08:00 - 20:00, Вс: 09:00 - 16:00",
      uz: "Dush - Shan: 08:00 - 20:00, Yak: 09:00 - 16:00"
    },
    license: {
      ru: "Лицензия Государственной инспекции № AVTO-AN-2024/098",
      uz: "Davlat ta'lim inspeksiyasi litsenziyasi № AVTO-AN-2024/098"
    }
  },

  // 1. HERO SLIDER — INSTRUCTORS ("Учителя вместо машин")
  heroSlides: [
    {
      id: "slide_1",
      instructorName: {
        ru: "АЛИШЕР КАРИМОВ",
        uz: "ALISHER KARIMOV"
      },
      position: {
        ru: "Главный шеф-инструктор",
        uz: "Bosh katta yo'riqchi"
      },
      tagline: {
        ru: "Мастер спорта и контраварийного вождения высшей категории",
        uz: "Sport ustasi va oliy toifali kontravariya murabbiyi"
      },
      experience: {
        ru: "14+ лет стажа",
        uz: "14+ yil tajriba"
      },
      graduates: "2 400+",
      // Condition Boxes formatted as Chevrolet Financial Promo
      conditions: [
        {
          value: "0%",
          label: {
            ru: "СТРАХА И НЕУВЕРЕННОСТИ",
            uz: "QO'RQUV VA SAROSIMA"
          },
          desc: {
            ru: "Психологический комфорт и спокойствие за рулем с 1-го занятия",
            uz: "Birinchi darsdanoq to'liq xotirjamlik va ruldagi ishonch"
          }
        },
        {
          value: "12",
          unit: {
            ru: "МЕСЯЦЕВ",
            uz: "OY"
          },
          label: {
            ru: "СОПРОВОЖДЕНИЯ",
            uz: "QO'LLAB-QUVVATLASH"
          },
          desc: {
            ru: "Бесплатные консультации инструктора даже после получения прав",
            uz: "Haydovchilik guvohnomasidan keyin ham bepul maslahat va yordam"
          }
        },
        {
          value: "98%",
          label: {
            ru: "СДАЧИ С ПЕРВОГО РАЗА",
            uz: "BIRINCHI MARTADAN TOPSHIRISH"
          },
          desc: {
            ru: "Официальная статистика в Едином экзаменационном центре",
            uz: "Yagona imtihon markazida tasdiqlangan rasmiy natija"
          }
        }
      ],
      // Professional portrait image
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
      specialty: {
        ru: "Категории B, C, CE • Экстремальное маневрирование",
        uz: "B, C, CE toifalar • Ekstremal manevr qilish"
      }
    },
    {
      id: "slide_2",
      instructorName: {
        ru: "ЕЛЕНА ДМИТРИЕВА",
        uz: "ELENA DMITRIEVA"
      },
      position: {
        ru: "Преподаватель высшей категории (АКПП / МКПП)",
        uz: "Oliy toifali amaliyot yo'riqchisi (AKPP / MKPP)"
      },
      tagline: {
        ru: "Обучение с нуля в условиях плотного городского потока",
        uz: "Noldan boshlab shahar tig'iz tirbandligida erkin boshqaruv"
      },
      experience: {
        ru: "11+ лет стажа",
        uz: "11+ yil tajriba"
      },
      graduates: "1 850+",
      conditions: [
        {
          value: "100%",
          label: {
            ru: "ТЕРПЕНИЕ И ВНИМАНИЕ",
            uz: "SABR VA DIQQAT"
          },
          desc: {
            ru: "Никаких криков и стресса — тактичная подача каждого элемента",
            uz: "Hech qanday asabiylashuvsiz — har bir manevrni sokin o'zlashtirish"
          }
        },
        {
          value: "2",
          unit: {
            ru: "ТИПА КПП",
            uz: "XIL TRANSMISSIYA"
          },
          label: {
            ru: "АВТОМАТ И МЕХАНИКА",
            uz: "AVTOMAT VA MEXANIKA"
          },
          desc: {
            ru: "Отработка плавного старта, парковки и безопасной дистанции",
            uz: "Tekis harakatlanish, murakkab parkovka va xavfsiz masofa saqlash"
          }
        },
        {
          value: "99%",
          label: {
            ru: "ПОЛОЖИТЕЛЬНЫХ ОТЗЫВОВ",
            uz: "IJOBIY MINNATDORCHILIK"
          },
          desc: {
            ru: "Высший рейтинг среди женщин и начинающих водителей Андижана",
            uz: "Andijon shahrida yangi boshlovchilar orasida eng yuqori reyting"
          }
        }
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
      specialty: {
        ru: "Категория B • Городская парковка 360°",
        uz: "B toifa • Shahar sharoitida 360° parkovka"
      }
    },
    {
      id: "slide_3",
      instructorName: {
        ru: "САРДОР МАХМУДОВ",
        uz: "SARDOR MAHMUDOV"
      },
      position: {
        ru: "Мастер контраварийного вождения",
        uz: "Kontravariya va sport haydash ustasi"
      },
      tagline: {
        ru: "Управление автомобилем в дождь, гололед и экстренных ситуациях",
        uz: "Yomg'ir, muzlama va favqulodda vaziyatlarda avtomobilni to'liq nazorat qilish"
      },
      experience: {
        ru: "10+ лет стажа",
        uz: "10+ yil tajriba"
      },
      graduates: "1 550+",
      conditions: [
        {
          value: "0.2s",
          label: {
            ru: "СКОРОСТЬ РЕАКЦИИ",
            uz: "REAKSIYA TEZKORLIGI"
          },
          desc: {
            ru: "Отработка экстренного торможения и объезда препятствий",
            uz: "To'satdan chiqqan to'siqni aylanib o'tish va tezkor to'xtash"
          }
        },
        {
          value: "100%",
          label: {
            ru: "КОНТРОЛЬ ЗАНОСА",
            uz: "SIRPANCHIQ YO'L NAZORATI"
          },
          desc: {
            ru: "Безопасное прохождение скользких поворотов и аквапланирования",
            uz: "Muzlama va nam asfaltdagi burilishlarda mashinani ushlash"
          }
        },
        {
          value: "97%",
          label: {
            ru: "ПРАКТИЧЕСКИХ НАВЫКОВ",
            uz: "AMALIY KO'NIKMALAR"
          },
          desc: {
            ru: "Подготовка к реальным сложным дорогам Узбекистана",
            uz: "O'zbekistonning tog'li va tirband yo'llarida erkin harakat"
          }
        }
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
      specialty: {
        ru: "Категории B, C • Безопасность на серпантинах",
        uz: "B, C toifalar • Dovon va trassalarda xavfsizlik"
      }
    },
    {
      id: "slide_4",
      instructorName: {
        ru: "БОБУР ЮСУПОВ",
        uz: "BOBUR YUSUPOV"
      },
      position: {
        ru: "Эксперт теории ПДД и экзаменационных тестов",
        uz: "YHQ nazariyasi va test sinovlari bo'yicha ekspert"
      },
      tagline: {
        ru: "Понимание логики дорожного движения вместо заучивания",
        uz: "Qoidalarni yodlamasdan yo'l mantig'ini chuqur anglash"
      },
      experience: {
        ru: "13+ лет стажа",
        uz: "13+ yil tajriba"
      },
      graduates: "2 100+",
      conditions: [
        {
          value: "1000+",
          label: {
            ru: "ТЕСТОВЫХ СИТУАЦИЙ",
            uz: "TEST VAZIYATLARI"
          },
          desc: {
            ru: "Интерактивный разбор билетов на сенсорных экранах автошколы",
            uz: "Sensorli ekranlarda har bir yo'l vaziyatini interaktiv tahlil qilish"
          }
        },
        {
          value: "0",
          label: {
            ru: "ОШИБОК НА ЭКЗАМЕНЕ",
            uz: "IMTIHONDA XATOLIK"
          },
          desc: {
            ru: "Авторская методика запоминания знаков и перекрестков",
            uz: "Chorrahalar va yo'l belgilarini 100% oson eslab qolish metodikasi"
          }
        },
        {
          value: "99.4%",
          label: {
            ru: "СДАЧА ТЕОРИИ С 1 РАЗА",
            uz: "NAZARIYA 1-URINISHDA"
          },
          desc: {
            ru: "Рекордный показатель сдачи компьютерного теста в Андижане",
            uz: "Andijon bo'yicha kompyuter testini bir urinishda topshirish rekordi"
          }
        }
      ],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
      specialty: {
        ru: "Теория ПДД • Электронный симулятор ЕИЦ",
        uz: "YHQ Nazariyasi • Yagona imtihon markazi simulyatori"
      }
    }
  ],

  // 2. DEALERSHIP QUICK SERVICES BAR
  quickServices: [
    {
      icon: "fa-car-side",
      title: {
        ru: "Тест-драйв (Пробный урок)",
        uz: "Sinov darsi (Test-drayv)"
      },
      subtitle: {
        ru: "Бесплатное первое занятие за рулем",
        uz: "Rulda bepul dastlabki amaliyot"
      },
      action: "openBookingModal"
    },
    {
      icon: "fa-calculator",
      title: {
        ru: "Рассрочка 0%",
        uz: "0% Muddatli to'lov"
      },
      subtitle: {
        ru: "Оплата частями на 3, 6 или 12 месяцев",
        uz: "3, 6 yoki 12 oyga foizsiz bo'lib to'lash"
      },
      action: "scrollToCalculator"
    },
    {
      icon: "fa-shield-halved",
      title: {
        ru: "Гарантия сдачи 98%",
        uz: "98% Kafolatlangan natija"
      },
      subtitle: {
        ru: "Официальный договор с автошколой",
        uz: "Rasmiy kafolat shartnomasi asosida"
      },
      action: "scrollToCourses"
    },
    {
      icon: "fa-location-dot",
      title: {
        ru: "4 филиала в Андижане",
        uz: "Andijonda 4 ta filial"
      },
      subtitle: {
        ru: "Удобные локации и собственный автодром",
        uz: "Qulay manzillar va shaxsiy avtodrom"
      },
      action: "scrollToBranches"
    }
  ],

  // 3. COURSES LIST (Adapted like Chevrolet Car Model Lineup)
  courses: [
    {
      id: "cat_b_cobalt",
      categoryKey: "cat_b",
      badge: {
        ru: "ХИТ ПРОДАЖ • НОВЫЙ АВТОПАРК",
        uz: "ENG OMMABOP • YANGI AVTOPARK"
      },
      title: {
        ru: "Категория B — Chevrolet Cobalt (АКПП / МКПП)",
        uz: "B toifa — Chevrolet Cobalt (AKPP / MKPP)"
      },
      shortDesc: {
        ru: "Базовый и самый популярный курс для вождения легковых автомобилей. Полная подготовка к ЕИЦ.",
        uz: "Yengil avtomobillarni erkin boshqarish bo'yicha eng ommabop ta'lim kursi. YHXBB imtihoniga to'liq tayyorgarlik."
      },
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
      specs: [
        {
          icon: "fa-clock",
          name: { ru: "Срок обучения", uz: "O'qish muddati" },
          value: { ru: "2.5 - 3 месяца", uz: "2.5 - 3 oy" }
        },
        {
          icon: "fa-road",
          name: { ru: "Практика", uz: "Amaliyot" },
          value: { ru: "40+ часов вождения", uz: "40+ soat haydash" }
        },
        {
          icon: "fa-book-open",
          name: { ru: "Теория", uz: "Nazariya" },
          value: { ru: "70 часов (ПДД)", uz: "70 soat (YHQ)" }
        },
        {
          icon: "fa-gear",
          name: { ru: "Трансмиссия", uz: "Transmissiya" },
          value: { ru: "Автомат или Механика", uz: "Avtomat yoki Mexanika" }
        }
      ],
      priceNum: 3800000,
      priceFormatted: {
        ru: "3 800 000 сум",
        uz: "3 800 000 so'm"
      },
      installmentMonthly: {
        ru: "от 1 266 000 сум/мес",
        uz: "oyiga 1 266 000 so'mdan"
      },
      installmentDetail: {
        ru: "Рассрочка на 3 месяца без переплаты (0%)",
        uz: "3 oyga 0% ustamasiz teng bo'lib to'lash"
      }
    },
    {
      id: "cat_b_gentra",
      categoryKey: "cat_b",
      badge: {
        ru: "КОМФОРТ И ПРАКТИКА",
        uz: "QULAYLIK VA AMALIYOT"
      },
      title: {
        ru: "Категория B — Chevrolet Gentra (МКПП / АКПП)",
        uz: "B toifa — Chevrolet Gentra (MKPP / AKPP)"
      },
      shortDesc: {
        ru: "Идеально выверенное обучение на классическом городском седане. Изучение маневров и парковки.",
        uz: "Shahar sharoitida mukammal boshqaruv va tirbandliklarda o'zini ishonchli tutish mahorati."
      },
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      specs: [
        {
          icon: "fa-clock",
          name: { ru: "Срок обучения", uz: "O'qish muddati" },
          value: { ru: "2.5 - 3 месяца", uz: "2.5 - 3 oy" }
        },
        {
          icon: "fa-road",
          name: { ru: "Практика", uz: "Amaliyot" },
          value: { ru: "40+ часов вождения", uz: "40+ soat haydash" }
        },
        {
          icon: "fa-book-open",
          name: { ru: "Теория", uz: "Nazariya" },
          value: { ru: "70 часов (ПДД)", uz: "70 soat (YHQ)" }
        },
        {
          icon: "fa-gear",
          name: { ru: "Трансмиссия", uz: "Transmissiya" },
          value: { ru: "Механика / Автомат", uz: "Mexanika / Avtomat" }
        }
      ],
      priceNum: 3800000,
      priceFormatted: {
        ru: "3 800 000 сум",
        uz: "3 800 000 so'm"
      },
      installmentMonthly: {
        ru: "от 1 266 000 сум/мес",
        uz: "oyiga 1 266 000 so'mdan"
      },
      installmentDetail: {
        ru: "Рассрочка на 3 месяца без переплаты (0%)",
        uz: "3 oyga 0% ustamasiz teng bo'lib to'lash"
      }
    },
    {
      id: "cat_c_isuzu",
      categoryKey: "cat_c",
      badge: {
        ru: "ПРОФЕССИОНАЛЬНЫЙ СТАНДАРТ",
        uz: "PROFESSIONAL STANDART"
      },
      title: {
        ru: "Категория C / CE — Грузовой транспорт (Isuzu)",
        uz: "C / CE toifa — Og'ir yuk avtomobili (Isuzu)"
      },
      shortDesc: {
        ru: "Подготовка профессиональных водителей коммерческого и грузового транспорта. Пневматика и прицепы.",
        uz: "Tijorat va og'ir yuk mashinalari haydovchilarini tayyorlash. Pnevmatik tormoz va tirkama bilan ishlash."
      },
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
      specs: [
        {
          icon: "fa-clock",
          name: { ru: "Срок обучения", uz: "O'qish muddati" },
          value: { ru: "3 месяца", uz: "3 oy" }
        },
        {
          icon: "fa-road",
          name: { ru: "Практика", uz: "Amaliyot" },
          value: { ru: "35 часов вождения", uz: "35 soat haydash" }
        },
        {
          icon: "fa-book-open",
          name: { ru: "Теория", uz: "Nazariya" },
          value: { ru: "85 часов курса", uz: "85 soat dars" }
        },
        {
          icon: "fa-truck-moving",
          name: { ru: "Техника", uz: "Texnika" },
          value: { ru: "Isuzu NPR 75L", uz: "Isuzu NPR 75L" }
        }
      ],
      priceNum: 4600000,
      priceFormatted: {
        ru: "4 600 000 сум",
        uz: "4 600 000 so'm"
      },
      installmentMonthly: {
        ru: "от 1 533 000 сум/мес",
        uz: "oyiga 1 533 000 so'mdan"
      },
      installmentDetail: {
        ru: "Доступна оплата частями на 3 или 6 месяцев",
        uz: "3 yoki 6 oyga teng bo'lib to'lash imkoniyati"
      }
    },
    {
      id: "cat_a_moto",
      categoryKey: "cat_a",
      badge: {
        ru: "СКОРОСТЬ И ДРАЙВ",
        uz: "TEZLIK VA ERKINLIK"
      },
      title: {
        ru: "Категория A / A1 — Мотоциклы и макси-скутеры",
        uz: "A / A1 toifa — Mototsikllar va Skuterlar"
      },
      shortDesc: {
        ru: "Обучение на закрытом мотодромном комплексе. Баланс, безопасное маневрирование, экипировка включена.",
        uz: "Yopiq motodromda xavfsiz boshqaruv. To'liq professional himoya kiyimlari maktab hisobidan taqdim etiladi."
      },
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
      specs: [
        {
          icon: "fa-clock",
          name: { ru: "Срок обучения", uz: "O'qish muddati" },
          value: { ru: "1.5 месяца", uz: "1.5 oy" }
        },
        {
          icon: "fa-road",
          name: { ru: "Практика", uz: "Amaliyot" },
          value: { ru: "18 часов мотодрома", uz: "18 soat motodrom" }
        },
        {
          icon: "fa-shield-halved",
          name: { ru: "Экипировка", uz: "Ekipirovka" },
          value: { ru: "Бесплатно", uz: "Bepul beriladi" }
        },
        {
          icon: "fa-motorcycle",
          name: { ru: "Мотопарк", uz: "Motopark" },
          value: { ru: "250cc & Maxi-Scooter", uz: "250cc & Maksi-Skuter" }
        }
      ],
      priceNum: 2400000,
      priceFormatted: {
        ru: "2 400 000 сум",
        uz: "2 400 000 so'm"
      },
      installmentMonthly: {
        ru: "от 800 000 сум/мес",
        uz: "oyiga 800 000 so'mdan"
      },
      installmentDetail: {
        ru: "3 платежа по 800 000 сум без процентов",
        uz: "3 bosqichda 800 000 so'mdan foizsiz"
      }
    },
    {
      id: "cat_vip_tracker",
      categoryKey: "cat_vip",
      badge: {
        ru: "ПРЕМИАЛЬНЫЙ СЕРВИС",
        uz: "PREMIUM XIZMAT"
      },
      title: {
        ru: "VIP Обучение — Chevrolet Tracker & Onix Turbo",
        uz: "VIP Kurs — Chevrolet Tracker & Onix Turbo"
      },
      shortDesc: {
        ru: "Персональный график в любое время, подача авто к дому или офису, персональный шеф-инструктор.",
        uz: "Erkin individual jadval, avtomobilni uy yoki ofisga yetkazish, shaxsiy bosh instruktor hamrohligi."
      },
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80",
      specs: [
        {
          icon: "fa-clock",
          name: { ru: "График", uz: "Jadval" },
          value: { ru: "Индивидуальный (24/7)", uz: "Shaxsiy (24/7)" }
        },
        {
          icon: "fa-road",
          name: { ru: "Практика", uz: "Amaliyot" },
          value: { ru: "50 часов вождения", uz: "50 soat haydash" }
        },
        {
          icon: "fa-star",
          name: { ru: "Автомобиль", uz: "Avtomobil" },
          value: { ru: "Chevrolet Tracker / Onix", uz: "Chevrolet Tracker / Onix" }
        },
        {
          icon: "fa-handshake",
          name: { ru: "Сервис", uz: "Xizmat" },
          value: { ru: "Подача авто к двери", uz: "Avtomobilni eshikkacha eltish" }
        }
      ],
      priceNum: 5900000,
      priceFormatted: {
        ru: "5 900 000 сум",
        uz: "5 900 000 so'm"
      },
      installmentMonthly: {
        ru: "от 1 966 000 сум/мес",
        uz: "oyiga 1 966 000 so'mdan"
      },
      installmentDetail: {
        ru: "Рассрочка до 12 месяцев через банки-партнеры",
        uz: "Hamkor banklar orqali 12 oygacha bo'lib to'lash"
      }
    },
    {
      id: "cat_bc_upgrade",
      categoryKey: "cat_c",
      badge: {
        ru: "ПЕРЕПОДГОТОВКА С B НА C",
        uz: "B DAN C GA QAYTA TAYYORLASH"
      },
      title: {
        ru: "Повышение квалификации: B на C (Isuzu)",
        uz: "Malaka oshirish: B dan C ga o'tish (Isuzu)"
      },
      shortDesc: {
        ru: "Ускоренный профессиональный курс для водителей со стажем категории B. Полная подготовка к экзамену.",
        uz: "B toifaga ega haydovchilar uchun tezlashtirilgan professional dastur. Rasmiy imtihonga to'liq tayyorgarlik."
      },
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
      specs: [
        {
          icon: "fa-clock",
          name: { ru: "Срок обучения", uz: "O'qish muddati" },
          value: { ru: "1.5 месяца", uz: "1.5 oy" }
        },
        {
          icon: "fa-road",
          name: { ru: "Практика", uz: "Amaliyot" },
          value: { ru: "20 часов на грузовике", uz: "20 soat yuk avtomobilida" }
        },
        {
          icon: "fa-certificate",
          name: { ru: "Аттестат", uz: "Attestat" },
          value: { ru: "Государственный образец", uz: "Davlat standarti" }
        },
        {
          icon: "fa-truck-front",
          name: { ru: "Автопарк", uz: "Avtopark" },
          value: { ru: "Isuzu NPR 75L", uz: "Isuzu NPR 75L" }
        }
      ],
      priceNum: 2800000,
      priceFormatted: {
        ru: "2 800 000 сум",
        uz: "2 800 000 so'm"
      },
      installmentMonthly: {
        ru: "от 933 000 сум/мес",
        uz: "oyiga 933 000 so'mdan"
      },
      installmentDetail: {
        ru: "3 платежа по 933 000 сум",
        uz: "3 qismda 933 000 so'mdan"
      }
    }
  ],

  // 4. TRAINING FLEET (Bizning Avtopark — Authentic Chevrolet & UzAuto)
  fleet: [
    {
      name: "CHEVROLET COBALT 2024",
      transmission: "АКПП / МКПП (Автомат & Механика)",
      category: "Категория B",
      features: {
        ru: ["Двойные педали с датчиками усилия", "Климат-контроль и гидроусилитель", "Видеорегистраторы с записью салона и дороги 360°", "Официальная сертификация ГАИ для экзаменов"],
        uz: ["Bosim datchiklariga ega qo'shaloq pedallar", "Konditsioner va gidrokuchaytirgich", "Salonga va yo'lga qaragan 360° videoregistrator", "YHXBB imtihonlari uchun rasmiy sertifikatsiya"]
      },
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "CHEVROLET GENTRA 2024",
      transmission: "МКПП (Механика) & АКПП",
      category: "Категория B",
      features: {
        ru: ["Идеальная обратная связь сцепления", "Удобная посадка и отличный круговой обзор", "Системы ABS и курсовой устойчивости", "Регулярное ТО у официального дилера UzAuto"],
        uz: ["Ulanish (stsepleniye) mexanizmining aniq ishlashi", "Keng ko'rish burchagi va qulay boshqaruv", "ABS va xavfsizlik tormoz tizimi", "UzAuto rasmiy dilerida rejali texnik ko'rik"]
      },
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "CHEVROLET TRACKER PREMIER",
      transmission: "6-АКПП Turbo",
      category: "VIP Обучение",
      features: {
        ru: ["Камеры кругового обзора и ассистенты парковки", "Кожаный салон и панорамная крыша", "Электронный стояночный тормоз и Autohold", "Индивидуальный шеф-инструктор"],
        uz: ["Aylana kamera va avtomatik parkovka yordamchilari", "Teri qoplamali qulay salon va lyuk", "Elektron to'xtash tormozi (Autohold)", "Individual shaxsiy bosh yo'riqchi"]
      },
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "ISUZU NPR 75L DIESEL",
      transmission: "6-МКПП с пневмоприводом",
      category: "Категории C / CE",
      features: {
        ru: ["Пневматическая тормозная система с осушителем", "Гидроусилитель руля и регулировка колонки", "Грузовая платформа для практической загрузки", "Подготовка к междугородним рейсам"],
        uz: ["Pnevmatik tormoz va quritgich tizimi", "Gidravlik kuchaytirgichli rul mexanizmi", "Haqiqiy yuk bilan mashq qilish imkoniyati", "Shaharlararo reyslarga professional tayyorgarlik"]
      },
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // 5. DEALERSHIP BRANCHES IN ANDIJAN
  branches: [
    {
      id: "central",
      name: {
        ru: "Дилерский филиал «Центральный»",
        uz: "«Markaziy» rasmiy filiali"
      },
      address: {
        ru: "г. Андижан, проспект Алишера Навои, 45",
        uz: "Andijon sh., Alisher Navoiy shoh ko'chasi, 45"
      },
      landmark: {
        ru: "Ориентир: рядом с Хокимиятом области и площадью Регистан",
        uz: "Mo'ljal: Viloyat Hokimiyati va Registon maydoni yaqinida"
      },
      hours: {
        ru: "Пн - Сб: 08:00 - 20:00, Вс: 09:00 - 16:00",
        uz: "Dush - Shan: 08:00 - 20:00, Yak: 09:00 - 16:00"
      },
      phone: "+998 (74) 228-00-55",
      manager: {
        ru: "Шодиев А.К. (Руководитель филиала)",
        uz: "Shodiyev A.K. (Filial rahbari)"
      },
      coords: [40.7821, 72.3442],
      yandexMapUrl: "https://yandex.com/maps/?text=40.7821,72.3442"
    },
    {
      id: "vokzal",
      name: {
        ru: "Филиал «Микрорайон / Вокзал»",
        uz: "«Vokzal / Mikrorayon» filiali"
      },
      address: {
        ru: "г. Андижан, проспект Бабура, 12",
        uz: "Andijon sh., Bobur shoh ko'chasi, 12"
      },
      landmark: {
        ru: "Ориентир: напротив Железнодорожного вокзала, 1-й микрорайон",
        uz: "Mo'ljal: Temiryo'l vokzali ro'parasida, 1-mikrorayon"
      },
      hours: {
        ru: "Пн - Сб: 08:00 - 20:00",
        uz: "Dush - Shan: 08:00 - 20:00"
      },
      phone: "+998 (74) 228-00-56",
      manager: {
        ru: "Умаров Д.М. (Старший координатор)",
        uz: "Umarov D.M. (Katta koordinator)"
      },
      coords: [40.7932, 72.3585],
      yandexMapUrl: "https://yandex.com/maps/?text=40.7932,72.3585"
    },
    {
      id: "eski_shahar",
      name: {
        ru: "Филиал «Старый город»",
        uz: "«Eski Shahar» filiali"
      },
      address: {
        ru: "г. Андижан, улица Чулпон, 88",
        uz: "Andijon sh., Cho'lpon ko'chasi, 88"
      },
      landmark: {
        ru: "Ориентир: перекресток Новый Базар, ТЦ «Старый Город»",
        uz: "Mo'ljal: Yangi Bozor chorrahasi, «Eski Shahar» majmuasi"
      },
      hours: {
        ru: "Пн - Сб: 08:30 - 19:30",
        uz: "Dush - Shan: 08:30 - 19:30"
      },
      phone: "+998 (74) 228-00-57",
      manager: {
        ru: "Каримова Н.Б. (Руководитель учебного отдела)",
        uz: "Karimova N.B. (O'quv bo'limi boshlig'i)"
      },
      coords: [40.7685, 72.3210],
      yandexMapUrl: "https://yandex.com/maps/?text=40.7685,72.3210"
    },
    {
      id: "bogishamol",
      name: {
        ru: "Автодромный комплекс «Богишамол»",
        uz: "«Bog'ishamol» avtodrom majmuasi"
      },
      address: {
        ru: "г. Андижан, массив Богишамол, 5А",
        uz: "Andijon sh., Bog'ishamol massivi, 5A"
      },
      landmark: {
        ru: "Ориентир: напротив парка имени Бабура, освещенный полигон",
        uz: "Mo'ljal: Bobur nomidagi bog' ro'parasida, yoritilgan poligon"
      },
      hours: {
        ru: "Ежедневно: 07:00 - 21:00 (Освещенная трасса)",
        uz: "Har kuni: 07:00 - 21:00 (Yoritilgan trassa)"
      },
      phone: "+998 (90) 123-45-67",
      manager: {
        ru: "Эргашев С.Т. (Начальник полигона)",
        uz: "Ergashev S.T. (Poligon boshlig'i)"
      },
      coords: [40.7490, 72.3780],
      yandexMapUrl: "https://yandex.com/maps/?text=40.7490,72.3780"
    }
  ],

  // 6. FREQUENTLY ASKED QUESTIONS (FAQ)
  faq: [
    {
      q: {
        ru: "Как оформляется рассрочка 0% на обучение?",
        uz: "0% muddatli to'lov qanday rasmiylashtiriladi?"
      },
      a: {
        ru: "Рассрочка оформляется непосредственно в офисе автошколы без участия банков и без процентов. Сумма курса делится на 3 равных платежа: 1-й взнос при заключении договора, 2-й — через 30 дней, 3-й — перед выходом на экзамен.",
        uz: "Muddatli to'lov to'g'ridan-to'g'ri avtomaktab ofisida banklarsiz va foizsiz rasmiylashtiriladi. Shartnoma summasi 3 teng qismga bo'linadi: dastlabki to'lov shartnoma tuzishda, ikkinchisi 30 kundan so'ng, uchinchisi imtihon oldidan to'lanadi."
      }
    },
    {
      q: {
        ru: "Какие документы нужны для записи в автошколу?",
        uz: "Avtomaktabga yozilish uchun qanday hujjatlar talab qilinadi?"
      },
      a: {
        ru: "Вам потребуется только оригинал паспорта (ID-карты) и 4 фотографии 3х4. Прохождение медицинской справки формы 083 мы помогаем организовать прямо в день заключения договора.",
        uz: "Sizdan faqat pasport (ID-karta) nusxasi va 4 dona 3x4 rasm talab qilinadi. 083-shakldagi tibbiy ma'lumotnomani shartnoma tuzilgan kunning o'zida rasmiylashtirishga yordam beramiz."
      }
    },
    {
      q: {
        ru: "Действительно ли сдача экзамена гарантирована на 98%?",
        uz: "Haqiqatan ham 98% birinchi urinishda topshirish kafolatlanadimi?"
      },
      a: {
        ru: "Да. Наш собственный автодром в Богишамол полностью повторяет разметку, эстакаду, параллельную парковку и датчики Единого экзаменационного центра Андижана. Вы тренируетесь на тех же машинах и по тем же нормативам, поэтому экзамен проходит легко и без стресса.",
        uz: "Ha. Bog'ishamoldagi shaxsiy avtodromimiz Andijon Yagona imtihon markazining estakada, parallel parkovka va datchiklarini 100% takrorlaydi. O'quvchilarimiz aynan o'sha avtomobillarda mashq qilgani sababli imtihonni oson topshirishadi."
      }
    },
    {
      q: {
        ru: "Можно ли выбрать коробку передач: Механику или Автомат?",
        uz: "Uzatma qutisini (Mexanika yoki Avtomat) tanlash mumkinmi?"
      },
      a: {
        ru: "Да, при записи на курс Категории B вы сами выбираете Chevrolet Cobalt или Gentra с автоматической (АКПП) либо механической (МКПП) коробкой передач без доплат.",
        uz: "Ha, B toifaga yozilishda Chevrolet Cobalt yoki Gentra mashinalarida Avtomat (AKPP) yoki Mexanika (MKPP) transmissiyasini qo'shimcha to'lovlarsiz o'zingiz tanlaysiz."
      }
    }
  ],

  // 7. UI DICTIONARY (Dual Language: RU / UZ)
  translations: {
    // Header & Top Bar
    topbar_call: { ru: "Единая горячая линия:", uz: "Yagona ishonch telefoni:" },
    topbar_location: { ru: "г. Андижан", uz: "Andijon sh." },
    topbar_hours: { ru: "Пн - Сб: 08:00 - 20:00", uz: "Dush - Shan: 08:00 - 20:00" },
    topbar_lang_title: { ru: "Язык сайта", uz: "Sayt tili" },
    nav_courses: { ru: "Курсы и категории", uz: "Kurslar va toifalar" },
    nav_instructors: { ru: "Инструкторы", uz: "Instruktorlar" },
    nav_fleet: { ru: "Автопарк", uz: "Avtopark" },
    nav_calc: { ru: "Калькулятор рассрочки", uz: "Muddatli to'lov" },
    nav_branches: { ru: "Филиалы и карта", uz: "Filiallar va xarita" },
    nav_faq: { ru: "Вопросы и ответы", uz: "Savol-javoblar" },
    nav_contact: { ru: "Контакты", uz: "Aloqa" },
    cta_test_drive: { ru: "Записаться на тест-драйв", uz: "Sinov darsiga yozilish" },
    btn_enroll: { ru: "Записаться на курс", uz: "Kursga yozilish" },
    btn_details: { ru: "Подробнее", uz: "Batafsil" },
    btn_calculate: { ru: "Рассчитать платеж", uz: "To'lovni hisoblash" },
    btn_submit_order: { ru: "Отправить заявку", uz: "Arizani yuborish" },
    btn_close: { ru: "Закрыть", uz: "Yopish" },

    // Hero section
    hero_badge: { ru: "ОФИЦИАЛЬНЫЙ ПОРТАЛ АВТОШКОЛЫ • СТИЛЬ UZAUTO MOTORS", uz: "RASMIY AVTOMAKTAB PORTALI • UZAUTO MOTORS USLUBI" },
    hero_slide_of: { ru: "из", uz: "dan" },
    hero_prev: { ru: "Предыдущий наставник", uz: "Oldingi ustoz" },
    hero_next: { ru: "Следующий наставник", uz: "Keyingi ustoz" },

    // Courses Section
    courses_heading_badge: { ru: "ОБРАЗОВАТЕЛЬНЫЙ МОДЕЛЬНЫЙ РЯД", uz: "TA'LIM MODELLAR QATORI" },
    courses_title: { ru: "Каталог курсов и категорий обучения", uz: "O'quv kurslari va toifalar katalogi" },
    courses_subtitle: { ru: "Выберите подходящую категорию подготовки с фиксированной стоимостью, новыми автомобилями и официальной гарантией сдачи.", uz: "Qat'iy belgilangan narxlar, yangi avtopark va imtihon kafolati bilan mos ta'lim toifasini tanlang." },
    filter_all: { ru: "Все категории", uz: "Barcha toifalar" },
    filter_b: { ru: "Категория B (Легковые)", uz: "B toifa (Yengil avtolar)" },
    filter_c: { ru: "Категория C / CE (Грузовые)", uz: "C / CE toifa (Yuk transporti)" },
    filter_a: { ru: "Категория A (Мото)", uz: "A toifa (Mototsikllar)" },
    filter_vip: { ru: "VIP Обучение", uz: "VIP Kurslar" },
    label_full_price: { ru: "Полная стоимость курса:", uz: "Kursning to'liq qiymati:" },
    label_installment_from: { ru: "Рассрочка 0% переплаты:", uz: "0% ustamasiz muddatli to'lov:" },

    // Calculator Section
    calc_heading_badge: { ru: "ФИНАНСОВЫЕ УСЛОВИЯ CHEVROLET", uz: "CHEVROLET MOLIYAVIY SHARTLARI" },
    calc_title: { ru: "Калькулятор беспроцентной рассрочки", uz: "Foizsiz muddatli to'lov kalkulyatori" },
    calc_subtitle: { ru: "Рассчитайте ежемесячный платеж без банковских процентов и скрытых комиссий за 10 секунд.", uz: "10 soniyada bank foizlarisiz va yashirin to'lovlarsiz oylik to'lovni hisoblang." },
    calc_step1: { ru: "1. Выберите курс обучения", uz: "1. Ta'lim kursini tanlang" },
    calc_step2: { ru: "2. Первоначальный взнос", uz: "2. Boshlang'ich to'lov" },
    calc_step3: { ru: "3. Срок рассрочки (месяцы)", uz: "3. Muddatli to'lov davri (oy)" },
    calc_summary_title: { ru: "Предварительный финансовый расчет", uz: "Dastlabki moliyaviy hisob-kitob" },
    calc_total_cost: { ru: "Общая стоимость обучения:", uz: "Ta'limning umumiy qiymati:" },
    calc_down_payment: { ru: "Первоначальный платеж:", uz: "Boshlang'ich to'lov miqdori:" },
    calc_monthly_payment: { ru: "Ежемесячный платеж:", uz: "Oylik to'lov summasi:" },
    calc_overpayment: { ru: "Переплата по рассрочке:", uz: "Qo'shimcha foiz ustamasi:" },
    calc_overpayment_value: { ru: "0 сум (0% годовых)", uz: "0 so'm (0% ustama)" },
    calc_order_btn: { ru: "Оформить рассрочку онлайн", uz: "Muddatli to'lovni rasmiylashtirish" },

    // Fleet Section
    fleet_heading_badge: { ru: "УЧЕБНЫЙ АВТОПАРК", uz: "O'QUV AVTOPARKI" },
    fleet_title: { ru: "Современные автомобили UzAuto Motors", uz: "UzAuto Motors zamonaviy avtomobillari" },
    fleet_subtitle: { ru: "Все автомобили 2024-2026 года выпуска, оборудованы сертифицированными дублирующими педалями и системами безопасности.", uz: "Barcha avtomobillar 2024-2026 yilda ishlab chiqarilgan, sertifikatlangan qo'shaloq pedallar va xavfsizlik tizimlari bilan jihozlangan." },

    // Branches Section
    branches_heading_badge: { ru: "ДИЛЕРСКАЯ СЕТЬ В АНДИЖАНЕ", uz: "ANDIJON DILERLIK TARMOG'I" },
    branches_title: { ru: "Филиалы и собственный автодромный полигон", uz: "Rasmiy filiallar va shaxsiy avtodrom poligoni" },
    branches_subtitle: { ru: "Учитесь рядом с домом или работой. Все филиалы оснащены мультимедийными компьютерными классами.", uz: "Uy yoki ishxonangizga yaqin joyda o'qing. Barcha filiallar multimedia kompyuter xonalari bilan ta'minlangan." },
    branches_show_on_map: { ru: "Показать на карте", uz: "Xaritada ko'rsatish" },

    // FAQ Section
    faq_heading_badge: { ru: "СПРАВОЧНАЯ ИНФОРМАЦИЯ", uz: "MA'LUMOT VA JAVOBLAR" },
    faq_title: { ru: "Часто задаваемые вопросы", uz: "Ko'p beriladigan savollar" },

    // Modal
    modal_title: { ru: "Запись на бесплатный тест-драйв / Обучение", uz: "Bepul sinov darsi / O'qishga yozilish" },
    modal_subtitle: { ru: "Оставьте ваши данные, и старший менеджер свяжется с вами в течение 10 минут для подтверждения бронирования.", uz: "Ma'lumotlaringizni qoldiring, katta menejer 10 daqiqa ichida bronni tasdiqlash uchun siz bilan bog'lanadi." },
    modal_name_label: { ru: "Ваше имя и фамилия", uz: "Ismingiz va familiyangiz" },
    modal_name_placeholder: { ru: "Например: Алишер Усманов", uz: "Masalan: Alisher Usmonov" },
    modal_phone_label: { ru: "Номер телефона", uz: "Telefon raqamingiz" },
    modal_course_label: { ru: "Интересующая категория", uz: "Sizni qiziqtirgan toifa" },
    modal_branch_label: { ru: "Удобный филиал в Андижане", uz: "Andijondagi qulay filial" },
    modal_success_title: { ru: "Заявка успешно принята!", uz: "Arizangiz muvaffaqiyatli qabul qilindi!" },
    modal_success_desc: { ru: "Менеджер автошколы Andijan Premium свяжется с вами по указанному номеру для подбора удобного времени.", uz: "Andijan Premium avtomaktabi menejeri qulay vaqtni tanlash uchun siz bilan ko'rsatilgan raqam orqali bog'lanadi." },

    // Footer
    footer_desc: {
      ru: "Официальный образовательный портал автошколы Andijan Premium в визуальном стиле UzAuto Motors. Подготовка водителей высшей категории в Андижане.",
      uz: "UzAuto Motors uslubidagi Andijan Premium avtomaktabining rasmiy ta'lim portali. Andijonda oliy toifali haydovchilarni tayyorlash."
    },
    footer_hotline_title: { ru: "Телефон горячей линии:", uz: "Ishonch telefoni:" },
    footer_rights: { ru: "Все права защищены. Государственная лицензия № AVTO-AN-2024/098.", uz: "Barcha huquqlar himoyalangan. Davlat litsenziyasi № AVTO-AN-2024/098." }
  }
};
