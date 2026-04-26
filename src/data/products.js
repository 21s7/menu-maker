// src/data/products.js

export const products = {
  // ========== ДОБАВКИ ДЛЯ РАСЧЕТОВ ==========
  добавить_углевод: {
    белки: 0,
    жиры: 0,
    углеводы: 100,
    ккал: 400,
    note: "100г чистых углеводов",
  },
  добавить_жир: {
    белки: 0,
    жиры: 100,
    углеводы: 0,
    ккал: 900,
    note: "100г чистого жира",
  },
  добавить_белок: {
    белки: 100,
    жиры: 0,
    углеводы: 0,
    ккал: 400,
    note: "100г чистого белка (животного происхождения)",
  },

  // ==========================================
  // МЯСО И ПТИЦА (полноценный белок)
  // ==========================================
  куриная_грудка: {
    белки: 23.6,
    жиры: 1.9,
    углеводы: 0.4,
    ккал: 113,
    proteinSource: "animal",
  },
  куриное_филе: {
    белки: 23.1,
    жиры: 1.2,
    углеводы: 0,
    ккал: 110,
    proteinSource: "animal",
  },
  куриные_бёдра: {
    белки: 17.0,
    жиры: 16.0,
    углеводы: 0,
    ккал: 210,
    proteinSource: "animal",
  },
  куриные_крылья: {
    белки: 19.2,
    жиры: 12.2,
    углеводы: 0,
    ккал: 186,
    proteinSource: "animal",
  },
  куриные_голени: {
    белки: 18.6,
    жиры: 9.8,
    углеводы: 0,
    ккал: 163,
    proteinSource: "animal",
  },
  куриная_печень: {
    белки: 20.4,
    жиры: 5.9,
    углеводы: 1.4,
    ккал: 137,
    proteinSource: "animal",
  },
  индейка: {
    белки: 23.7,
    жиры: 1.5,
    углеводы: 0.1,
    ккал: 114,
    proteinSource: "animal",
  },
  индейка_филе: {
    белки: 19.2,
    жиры: 0.7,
    углеводы: 0,
    ккал: 84,
    proteinSource: "animal",
  },
  постная_индейка: {
    белки: 12.0,
    жиры: 2.0,
    углеводы: 3.0,
    ккал: 78,
    proteinSource: "animal",
  },
  говядина: {
    белки: 19.0,
    жиры: 12.0,
    углеводы: 0,
    ккал: 187,
    proteinSource: "animal",
  },
  говядина_вырезка: {
    белки: 20.2,
    жиры: 2.8,
    углеводы: 0,
    ккал: 106,
    proteinSource: "animal",
  },
  говяжий_фарш: {
    белки: 17.2,
    жиры: 20.0,
    углеводы: 0,
    ккал: 254,
    proteinSource: "animal",
  },
  телятина: {
    белки: 19.7,
    жиры: 1.2,
    углеводы: 0,
    ккал: 90,
    proteinSource: "animal",
  },
  свинина: {
    белки: 19.4,
    жиры: 7.1,
    углеводы: 0,
    ккал: 142,
    proteinSource: "animal",
  },
  свинина_вырезка: {
    белки: 19.4,
    жиры: 4.5,
    углеводы: 0,
    ккал: 118,
    proteinSource: "animal",
  },
  свинина_шея: {
    белки: 16.0,
    жиры: 21.5,
    углеводы: 0,
    ккал: 259,
    proteinSource: "animal",
  },
  жирный_фарш: {
    белки: 12.0,
    жиры: 28.0,
    углеводы: 3.0,
    ккал: 300,
    proteinSource: "animal",
  },
  куриный_фарш: {
    белки: 17.4,
    жиры: 8.1,
    углеводы: 0,
    ккал: 143,
    proteinSource: "animal",
  },
  баранина: {
    белки: 16.3,
    жиры: 15.3,
    углеводы: 0,
    ккал: 203,
    proteinSource: "animal",
  },
  утка: {
    белки: 16.5,
    жиры: 61.2,
    углеводы: 0,
    ккал: 617,
    proteinSource: "animal",
  },
  гусь: {
    белки: 16.4,
    жиры: 33.6,
    углеводы: 0,
    ккал: 371,
    proteinSource: "animal",
  },
  кролик: {
    белки: 21.2,
    жиры: 8.0,
    углеводы: 0,
    ккал: 156,
    proteinSource: "animal",
  },

  // ==========================================
  // КОЛБАСЫ И МЯСНЫЕ ИЗДЕЛИЯ
  // ==========================================
  колбаса_докторская: {
    белки: 12.8,
    жиры: 22.2,
    углеводы: 1.5,
    ккал: 257,
    proteinSource: "animal",
  },
  колбаса_сервелат: {
    белки: 16.1,
    жиры: 40.0,
    углеводы: 0.2,
    ккал: 425,
    proteinSource: "animal",
  },
  сосиски_молочные: {
    белки: 11.0,
    жиры: 23.9,
    углеводы: 1.6,
    ккал: 266,
    proteinSource: "animal",
  },
  сардельки: {
    белки: 12.0,
    жиры: 25.0,
    углеводы: 1.5,
    ккал: 279,
    proteinSource: "animal",
  },
  ветчина: {
    белки: 17.6,
    жиры: 6.2,
    углеводы: 0,
    ккал: 126,
    proteinSource: "animal",
  },
  бекон: {
    белки: 11.6,
    жиры: 45.0,
    углеводы: 0.7,
    ккал: 458,
    proteinSource: "animal",
  },
  карбонад: {
    белки: 17.0,
    жиры: 8.0,
    углеводы: 0,
    ккал: 140,
    proteinSource: "animal",
  },

  // ==========================================
  // РЫБА
  // ==========================================
  форель: {
    белки: 21.0,
    жиры: 7.0,
    углеводы: 0,
    ккал: 148,
    proteinSource: "animal",
  },
  лосось: {
    белки: 20.8,
    жиры: 15.3,
    углеводы: 0,
    ккал: 208,
    proteinSource: "animal",
  },
  сёмга: {
    белки: 20.5,
    жиры: 8.1,
    углеводы: 0,
    ккал: 153,
    proteinSource: "animal",
  },
  горбуша: {
    белки: 20.5,
    жиры: 6.5,
    углеводы: 0,
    ккал: 140,
    proteinSource: "animal",
  },
  кета: {
    белки: 22.0,
    жиры: 5.6,
    углеводы: 0,
    ккал: 138,
    proteinSource: "animal",
  },
  сельдь: {
    белки: 16.3,
    жиры: 10.7,
    углеводы: 0,
    ккал: 161,
    proteinSource: "animal",
  },
  сельдь_слабосоленая: {
    белки: 17.5,
    жиры: 12.5,
    углеводы: 0,
    ккал: 186,
    proteinSource: "animal",
  },
  скумбрия: {
    белки: 18.0,
    жиры: 9.0,
    углеводы: 0,
    ккал: 153,
    proteinSource: "animal",
  },
  тунец: {
    белки: 24.4,
    жиры: 4.6,
    углеводы: 0,
    ккал: 139,
    proteinSource: "animal",
  },
  тунец_консервы: {
    белки: 22.5,
    жиры: 0.7,
    углеводы: 0,
    ккал: 96,
    proteinSource: "animal",
  },
  треска: {
    белки: 17.7,
    жиры: 0.7,
    углеводы: 0,
    ккал: 78,
    proteinSource: "animal",
  },
  минтай: {
    белки: 15.9,
    жиры: 0.9,
    углеводы: 0,
    ккал: 72,
    proteinSource: "animal",
  },
  хек: {
    белки: 16.6,
    жиры: 2.2,
    углеводы: 0,
    ккал: 86,
    proteinSource: "animal",
  },
  пикша: {
    белки: 17.2,
    жиры: 0.5,
    углеводы: 0,
    ккал: 73,
    proteinSource: "animal",
  },
  камбала: {
    белки: 15.7,
    жиры: 3.0,
    углеводы: 0,
    ккал: 90,
    proteinSource: "animal",
  },
  карп: {
    белки: 17.0,
    жиры: 5.3,
    углеводы: 0,
    ккал: 115,
    proteinSource: "animal",
  },
  судак: {
    белки: 19.2,
    жиры: 0.7,
    углеводы: 0,
    ккал: 83,
    proteinSource: "animal",
  },
  щука: {
    белки: 18.8,
    жиры: 0.7,
    углеводы: 0,
    ккал: 82,
    proteinSource: "animal",
  },
  окунь_морской: {
    белки: 18.6,
    жиры: 3.3,
    углеводы: 0,
    ккал: 103,
    proteinSource: "animal",
  },
  сардины_консервы: {
    белки: 24.6,
    жиры: 11.5,
    углеводы: 0,
    ккал: 203,
    proteinSource: "animal",
  },
  шпроты: {
    белки: 17.4,
    жиры: 32.4,
    углеводы: 0,
    ккал: 363,
    proteinSource: "animal",
  },
  красная_икра: {
    белки: 32.0,
    жиры: 15.0,
    углеводы: 0,
    ккал: 263,
    proteinSource: "animal",
  },
  икра_минтая: {
    белки: 28.0,
    жиры: 2.0,
    углеводы: 0,
    ккал: 130,
    proteinSource: "animal",
  },

  // ==========================================
  // МОРЕПРОДУКТЫ
  // ==========================================
  креветки: {
    белки: 20.3,
    жиры: 1.7,
    углеводы: 0,
    ккал: 96,
    proteinSource: "animal",
  },
  кальмары: {
    белки: 18.0,
    жиры: 2.2,
    углеводы: 0,
    ккал: 92,
    proteinSource: "animal",
  },
  мидии: {
    белки: 11.5,
    жиры: 2.0,
    углеводы: 3.3,
    ккал: 77,
    proteinSource: "animal",
  },
  осьминоги: {
    белки: 14.9,
    жиры: 1.0,
    углеводы: 2.2,
    ккал: 79,
    proteinSource: "animal",
  },
  крабовые_палочки: {
    белки: 8.5,
    жиры: 0.5,
    углеводы: 11.0,
    ккал: 85,
    proteinSource: "animal",
  },

  // ==========================================
  // МОЛОЧНЫЕ ПРОДУКТЫ
  // ==========================================
  молоко: {
    белки: 2.9,
    жиры: 2.5,
    углеводы: 4.8,
    ккал: 54,
    proteinSource: "animal",
  },
  молоко_32: {
    белки: 2.9,
    жиры: 3.2,
    углеводы: 4.7,
    ккал: 59,
    proteinSource: "animal",
  },
  молоко_15: {
    белки: 2.8,
    жиры: 1.5,
    углеводы: 4.8,
    ккал: 44,
    proteinSource: "animal",
  },
  безлактозное_молоко: {
    белки: 3.5,
    жиры: 1.5,
    углеводы: 2.5,
    ккал: 40,
    proteinSource: "animal",
  },
  кефир: {
    белки: 2.8,
    жиры: 1.0,
    углеводы: 4.0,
    ккал: 36,
    proteinSource: "animal",
  },
  кефир_25: {
    белки: 2.8,
    жиры: 2.5,
    углеводы: 4.0,
    ккал: 50,
    proteinSource: "animal",
  },
  кефир_32: {
    белки: 3.0,
    жиры: 3.2,
    углеводы: 4.0,
    ккал: 57,
    proteinSource: "animal",
  },
  ряженка: {
    белки: 2.8,
    жиры: 4.0,
    углеводы: 4.2,
    ккал: 67,
    proteinSource: "animal",
  },
  простокваша: {
    белки: 3.0,
    жиры: 2.5,
    углеводы: 4.1,
    ккал: 53,
    proteinSource: "animal",
  },
  сметана_10: {
    белки: 2.7,
    жиры: 10.0,
    углеводы: 4.1,
    ккал: 119,
    proteinSource: "animal",
  },
  сметана_15: {
    белки: 2.6,
    жиры: 15.0,
    углеводы: 3.6,
    ккал: 160,
    proteinSource: "animal",
  },
  сметана_20: {
    белки: 2.5,
    жиры: 20.0,
    углеводы: 3.4,
    ккал: 206,
    proteinSource: "animal",
  },
  сметана_30: {
    белки: 2.3,
    жиры: 30.0,
    углеводы: 3.1,
    ккал: 293,
    proteinSource: "animal",
  },
  творог_0: {
    белки: 18.0,
    жиры: 0.5,
    углеводы: 3.3,
    ккал: 90,
    proteinSource: "animal",
  },
  творог_2: {
    белки: 17.0,
    жиры: 2.0,
    углеводы: 3.0,
    ккал: 98,
    proteinSource: "animal",
  },
  творог_5: {
    белки: 17.0,
    жиры: 5.0,
    углеводы: 3.0,
    ккал: 121,
    proteinSource: "animal",
  },
  творог_9: {
    белки: 16.7,
    жиры: 9.0,
    углеводы: 3.0,
    ккал: 159,
    proteinSource: "animal",
  },
  творог_18: {
    белки: 14.0,
    жиры: 18.0,
    углеводы: 2.8,
    ккал: 229,
    proteinSource: "animal",
  },
  мягкий_творог: {
    белки: 8.6,
    жиры: 5.0,
    углеводы: 4.0,
    ккал: 95,
    proteinSource: "animal",
  },
  сыр: {
    белки: 23.2,
    жиры: 29.5,
    углеводы: 0,
    ккал: 364,
    proteinSource: "animal",
  },
  сыр_российский: {
    белки: 24.1,
    жиры: 29.5,
    углеводы: 0,
    ккал: 364,
    proteinSource: "animal",
  },
  сыр_адыгейский: {
    белки: 18.5,
    жиры: 14.0,
    углеводы: 0,
    ккал: 240,
    proteinSource: "animal",
  },
  сыр_моцарелла: {
    белки: 22.2,
    жиры: 22.4,
    углеводы: 2.2,
    ккал: 300,
    proteinSource: "animal",
  },
  сыр_сулугуни: {
    белки: 20.5,
    жиры: 24.0,
    углеводы: 0.4,
    ккал: 290,
    proteinSource: "animal",
  },
  сыр_фета: {
    белки: 14.2,
    жиры: 21.3,
    углеводы: 4.1,
    ккал: 264,
    proteinSource: "animal",
  },
  сыр_плавленный: {
    белки: 8.5,
    жиры: 18.0,
    углеводы: 8.5,
    ккал: 230,
    proteinSource: "animal",
  },
  сыр_творожный: {
    белки: 6.8,
    жиры: 26.0,
    углеводы: 3.5,
    ккал: 275,
    proteinSource: "animal",
  },
  греческий_йогурт: {
    белки: 7.0,
    жиры: 2.0,
    углеводы: 5.0,
    ккал: 64,
    proteinSource: "animal",
  },
  йогурт_натуральный: {
    белки: 5.0,
    жиры: 3.2,
    углеводы: 3.5,
    ккал: 68,
    proteinSource: "animal",
  },
  сывороточный_концентрат: {
    белки: 76.9,
    жиры: 6.7,
    углеводы: 8.5,
    ккал: 402,
    proteinSource: "animal",
  },
  изолят_сывороточного_белка: {
    белки: 90.0,
    жиры: 1.0,
    углеводы: 3.0,
    ккал: 381,
    proteinSource: "animal",
  },

  // ==========================================
  // ЯЙЦА
  // ==========================================
  яйца: {
    белки: 12.7,
    жиры: 11.5,
    углеводы: 0.7,
    ккал: 157,
    proteinSource: "animal",
  },
  яйцо_вареное: {
    белки: 12.8,
    жиры: 11.5,
    углеводы: 0.7,
    ккал: 158,
    proteinSource: "animal",
  },
  яйцо_жареное: {
    белки: 12.9,
    жиры: 13.8,
    углеводы: 0.9,
    ккал: 178,
    proteinSource: "animal",
  },
  яичный_белок: {
    белки: 11.1,
    жиры: 0.2,
    углеводы: 0.7,
    ккал: 52,
    proteinSource: "animal",
  },
  яичный_желток: {
    белки: 16.2,
    жиры: 30.9,
    углеводы: 1.8,
    ккал: 352,
    proteinSource: "animal",
  },
  омлет: {
    белки: 10.1,
    жиры: 10.2,
    углеводы: 2.6,
    ккал: 144,
    proteinSource: "animal",
  },
  перепелиные_яйца: {
    белки: 13.0,
    жиры: 11.0,
    углеводы: 0.4,
    ккал: 153,
    proteinSource: "animal",
  },

  // ==========================================
  // КРУПЫ И ЗЕРНОВЫЕ (растительный белок обнулён)
  // ==========================================
  гречка: {
    белки: 0,
    жиры: 3.3,
    углеводы: 57.1,
    ккал: 308,
    proteinSource: "plant",
    originalProteins: 12.6,
  },
  гречка_вареная: {
    белки: 0,
    жиры: 1.0,
    углеводы: 19.9,
    ккал: 110,
    proteinSource: "plant",
    originalProteins: 4.2,
  },
  рис: {
    белки: 0,
    жиры: 1.0,
    углеводы: 77.0,
    ккал: 333,
    proteinSource: "plant",
    originalProteins: 7.5,
  },
  рис_бурый: {
    белки: 0,
    жиры: 1.8,
    углеводы: 72.9,
    ккал: 338,
    proteinSource: "plant",
    originalProteins: 7.5,
  },
  рис_дикий: {
    белки: 0,
    жиры: 1.1,
    углеводы: 68.7,
    ккал: 327,
    proteinSource: "plant",
    originalProteins: 14.7,
  },
  овсянка: {
    белки: 0,
    жиры: 6.2,
    углеводы: 61.0,
    ккал: 352,
    proteinSource: "plant",
    originalProteins: 12.3,
  },
  овсяные_хлопья: {
    белки: 0,
    жиры: 6.1,
    углеводы: 59.5,
    ккал: 358,
    proteinSource: "plant",
    originalProteins: 11.0,
  },
  перловка: {
    белки: 0,
    жиры: 1.1,
    углеводы: 73.7,
    ккал: 320,
    proteinSource: "plant",
    originalProteins: 9.3,
  },
  пшено: {
    белки: 0,
    жиры: 3.3,
    углеводы: 66.5,
    ккал: 348,
    proteinSource: "plant",
    originalProteins: 11.5,
  },
  полба: {
    белки: 0,
    жиры: 2.4,
    углеводы: 59.5,
    ккал: 330,
    proteinSource: "plant",
    originalProteins: 14.6,
  },
  кукурузная_крупа: {
    белки: 0,
    жиры: 1.2,
    углеводы: 75.0,
    ккал: 328,
    proteinSource: "plant",
    originalProteins: 8.3,
  },
  булгур: {
    белки: 0,
    жиры: 1.3,
    углеводы: 75.9,
    ккал: 342,
    proteinSource: "plant",
    originalProteins: 12.3,
  },
  кускус: {
    белки: 0,
    жиры: 0.6,
    углеводы: 73.4,
    ккал: 334,
    proteinSource: "plant",
    originalProteins: 12.8,
  },
  киноа: {
    белки: 0,
    жиры: 6.1,
    углеводы: 57.2,
    ккал: 368,
    proteinSource: "plant",
    originalProteins: 14.1,
  },
  манка: {
    белки: 0,
    жиры: 1.0,
    углеводы: 73.3,
    ккал: 331,
    proteinSource: "plant",
    originalProteins: 10.3,
  },

  // ==========================================
  // БОБОВЫЕ (растительный белок обнулён)
  // ==========================================
  чечевица: {
    белки: 0,
    жиры: 1.1,
    углеводы: 53.0,
    ккал: 284,
    proteinSource: "plant",
    originalProteins: 24.0,
  },
  фасоль: {
    белки: 0,
    жиры: 1.5,
    углеводы: 47.0,
    ккал: 298,
    proteinSource: "plant",
    originalProteins: 21.0,
  },
  горох: {
    белки: 0,
    жиры: 1.2,
    углеводы: 53.3,
    ккал: 298,
    proteinSource: "plant",
    originalProteins: 23.0,
  },
  нут: {
    белки: 0,
    жиры: 6.0,
    углеводы: 46.2,
    ккал: 309,
    proteinSource: "plant",
    originalProteins: 20.1,
  },
  маш: {
    белки: 0,
    жиры: 1.1,
    углеводы: 46.3,
    ккал: 300,
    proteinSource: "plant",
    originalProteins: 23.5,
  },
  соя: {
    белки: 0,
    жиры: 17.3,
    углеводы: 17.3,
    ккал: 381,
    proteinSource: "plant",
    originalProteins: 36.5,
  },

  // ==========================================
  // МАКАРОННЫЕ ИЗДЕЛИЯ (растительный белок обнулён)
  // ==========================================
  макароны: {
    белки: 0,
    жиры: 1.5,
    углеводы: 75.0,
    ккал: 371,
    proteinSource: "plant",
    originalProteins: 10.4,
  },
  спагетти: {
    белки: 0,
    жиры: 1.5,
    углеводы: 71.5,
    ккал: 344,
    proteinSource: "plant",
    originalProteins: 10.4,
  },
  макароны_твердые: {
    белки: 0,
    жиры: 1.8,
    углеводы: 71.2,
    ккал: 350,
    proteinSource: "plant",
    originalProteins: 12.0,
  },
  лапша: {
    белки: 0,
    жиры: 1.2,
    углеводы: 69.0,
    ккал: 330,
    proteinSource: "plant",
    originalProteins: 9.0,
  },

  // ==========================================
  // ХЛЕБ И ВЫПЕЧКА (растительный белок обнулён)
  // ==========================================
  хлеб: {
    белки: 0,
    жиры: 3.3,
    углеводы: 46.7,
    ккал: 266,
    proteinSource: "plant",
    originalProteins: 8.9,
  },
  хлеб_белый: {
    белки: 0,
    жиры: 2.7,
    углеводы: 49.6,
    ккал: 266,
    proteinSource: "plant",
    originalProteins: 8.0,
  },
  хлеб_ржаной: {
    белки: 0,
    жиры: 1.2,
    углеводы: 40.9,
    ккал: 201,
    proteinSource: "plant",
    originalProteins: 5.6,
  },
  хлеб_бородинский: {
    белки: 0,
    жиры: 1.3,
    углеводы: 41.0,
    ккал: 208,
    proteinSource: "plant",
    originalProteins: 6.8,
  },
  хлеб_цельнозерновой: {
    белки: 0,
    жиры: 3.4,
    углеводы: 41.3,
    ккал: 247,
    proteinSource: "plant",
    originalProteins: 9.7,
  },
  батон: {
    белки: 0,
    жиры: 3.4,
    углеводы: 48.0,
    ккал: 262,
    proteinSource: "plant",
    originalProteins: 8.2,
  },
  хлебцы: {
    белки: 0,
    жиры: 2.3,
    углеводы: 57.1,
    ккал: 290,
    proteinSource: "plant",
    originalProteins: 11.0,
  },
  лаваш: {
    белки: 0,
    жиры: 1.2,
    углеводы: 55.7,
    ккал: 277,
    proteinSource: "plant",
    originalProteins: 9.1,
  },
  сухари: {
    белки: 0,
    жиры: 4.0,
    углеводы: 70.0,
    ккал: 367,
    proteinSource: "plant",
    originalProteins: 10.5,
  },
  бублики: {
    белки: 0,
    жиры: 2.0,
    углеводы: 58.0,
    ккал: 284,
    proteinSource: "plant",
    originalProteins: 10.4,
  },

  // ==========================================
  // ОРЕХИ И СЕМЕНА (растительный белок обнулён)
  // ==========================================
  арахис: {
    белки: 0,
    жиры: 49.0,
    углеводы: 16.0,
    ккал: 567,
    proteinSource: "plant",
    originalProteins: 26.0,
  },
  грецкий_орех: {
    белки: 0,
    жиры: 60.8,
    углеводы: 11.1,
    ккал: 656,
    proteinSource: "plant",
    originalProteins: 16.2,
  },
  миндаль: {
    белки: 0,
    жиры: 53.7,
    углеводы: 10.5,
    ккал: 609,
    proteinSource: "plant",
    originalProteins: 18.6,
  },
  фундук: {
    белки: 0,
    жиры: 66.9,
    углеводы: 9.9,
    ккал: 653,
    proteinSource: "plant",
    originalProteins: 15.0,
  },
  кешью: {
    белки: 0,
    жиры: 48.5,
    углеводы: 22.5,
    ккал: 600,
    proteinSource: "plant",
    originalProteins: 18.5,
  },
  фисташки: {
    белки: 0,
    жиры: 44.4,
    углеводы: 17.2,
    ккал: 557,
    proteinSource: "plant",
    originalProteins: 20.6,
  },
  кедровые_орехи: {
    белки: 0,
    жиры: 68.4,
    углеводы: 9.4,
    ккал: 673,
    proteinSource: "plant",
    originalProteins: 13.7,
  },
  семена_подсолнечника: {
    белки: 0,
    жиры: 52.9,
    углеводы: 11.4,
    ккал: 601,
    proteinSource: "plant",
    originalProteins: 20.7,
  },
  семена_тыквы: {
    белки: 0,
    жиры: 50.7,
    углеводы: 8.9,
    ккал: 574,
    proteinSource: "plant",
    originalProteins: 30.2,
  },
  семена_льна: {
    белки: 0,
    жиры: 42.2,
    углеводы: 1.6,
    ккал: 534,
    proteinSource: "plant",
    originalProteins: 18.3,
  },
  семена_чиа: {
    белки: 0,
    жиры: 32.8,
    углеводы: 6.9,
    ккал: 512,
    proteinSource: "plant",
    originalProteins: 15.6,
  },
  кунжут: {
    белки: 0,
    жиры: 49.7,
    углеводы: 12.2,
    ккал: 565,
    proteinSource: "plant",
    originalProteins: 19.4,
  },

  // ==========================================
  // СУХОФРУКТЫ (растительный белок обнулён)
  // ==========================================
  изюм: {
    белки: 0,
    жиры: 0.5,
    углеводы: 71.2,
    ккал: 296,
    proteinSource: "plant",
    originalProteins: 2.5,
  },
  курага: {
    белки: 0,
    жиры: 0.3,
    углеводы: 55.0,
    ккал: 232,
    proteinSource: "plant",
    originalProteins: 5.2,
  },
  чернослив: {
    белки: 0,
    жиры: 0.5,
    углеводы: 57.5,
    ккал: 256,
    proteinSource: "plant",
    originalProteins: 2.3,
  },
  финики: {
    белки: 0,
    жиры: 0.5,
    углеводы: 69.2,
    ккал: 292,
    proteinSource: "plant",
    originalProteins: 2.5,
  },
  инжир_сушеный: {
    белки: 0,
    жиры: 1.3,
    углеводы: 57.9,
    ккал: 249,
    proteinSource: "plant",
    originalProteins: 3.3,
  },

  // ==========================================
  // ОВОЩИ
  // ==========================================
  картофель: {
    белки: 0,
    жиры: 0.4,
    углеводы: 16.3,
    ккал: 77,
    proteinSource: "plant",
    originalProteins: 2.0,
  },
  картофель_варёный: {
    белки: 0,
    жиры: 0.4,
    углеводы: 15.8,
    ккал: 75,
    proteinSource: "plant",
    originalProteins: 1.7,
  },
  картофельное_пюре: {
    белки: 0,
    жиры: 4.2,
    углеводы: 14.7,
    ккал: 105,
    proteinSource: "plant",
    originalProteins: 2.5,
  },
  капуста_белокочанная: {
    белки: 0,
    жиры: 0.1,
    углеводы: 4.7,
    ккал: 28,
    proteinSource: "plant",
    originalProteins: 1.8,
  },
  капуста_цветная: {
    белки: 0,
    жиры: 0.2,
    углеводы: 4.0,
    ккал: 30,
    proteinSource: "plant",
    originalProteins: 2.5,
  },
  брокколи: {
    белки: 0,
    жиры: 0.4,
    углеводы: 5.2,
    ккал: 28,
    proteinSource: "plant",
    originalProteins: 2.8,
  },
  капуста_брюссельская: {
    белки: 0,
    жиры: 0.3,
    углеводы: 5.2,
    ккал: 36,
    proteinSource: "plant",
    originalProteins: 4.5,
  },
  помидоры: {
    белки: 0,
    жиры: 0.2,
    углеводы: 3.8,
    ккал: 24,
    proteinSource: "plant",
    originalProteins: 1.1,
  },
  томаты: {
    белки: 0,
    жиры: 0.2,
    углеводы: 4.2,
    ккал: 24,
    proteinSource: "plant",
    originalProteins: 1.0,
  },
  огурцы: {
    белки: 0,
    жиры: 0.1,
    углеводы: 2.5,
    ккал: 14,
    proteinSource: "plant",
    originalProteins: 0.8,
  },
  морковь: {
    белки: 0,
    жиры: 0.1,
    углеводы: 6.9,
    ккал: 32,
    proteinSource: "plant",
    originalProteins: 1.3,
  },
  свекла: {
    белки: 0,
    жиры: 0.1,
    углеводы: 8.8,
    ккал: 42,
    proteinSource: "plant",
    originalProteins: 1.5,
  },
  лук: {
    белки: 0,
    жиры: 0.1,
    углеводы: 9.0,
    ккал: 40,
    proteinSource: "plant",
    originalProteins: 1.4,
  },
  лук_зелёный: {
    белки: 0,
    жиры: 0.2,
    углеводы: 5.7,
    ккал: 27,
    proteinSource: "plant",
    originalProteins: 1.3,
  },
  чеснок: {
    белки: 0,
    жиры: 0.5,
    углеводы: 29.9,
    ккал: 143,
    proteinSource: "plant",
    originalProteins: 6.5,
  },
  кабачки: {
    белки: 0,
    жиры: 0.3,
    углеводы: 3.3,
    ккал: 17,
    proteinSource: "plant",
    originalProteins: 1.2,
  },
  баклажаны: {
    белки: 0,
    жиры: 0.1,
    углеводы: 4.5,
    ккал: 24,
    proteinSource: "plant",
    originalProteins: 1.2,
  },
  перец_болгарский: {
    белки: 0,
    жиры: 0.2,
    углеводы: 4.9,
    ккал: 26,
    proteinSource: "plant",
    originalProteins: 1.3,
  },
  тыква: {
    белки: 0,
    жиры: 0.1,
    углеводы: 6.5,
    ккал: 28,
    proteinSource: "plant",
    originalProteins: 1.0,
  },
  редис: {
    белки: 0,
    жиры: 0.1,
    углеводы: 3.4,
    ккал: 19,
    proteinSource: "plant",
    originalProteins: 1.2,
  },
  редька: {
    белки: 0,
    жиры: 0.1,
    углеводы: 6.7,
    ккал: 34,
    proteinSource: "plant",
    originalProteins: 1.9,
  },
  сельдерей: {
    белки: 0,
    жиры: 0.2,
    углеводы: 2.1,
    ккал: 12,
    proteinSource: "plant",
    originalProteins: 0.9,
  },
  спаржа: {
    белки: 0,
    жиры: 0.1,
    углеводы: 3.1,
    ккал: 20,
    proteinSource: "plant",
    originalProteins: 2.2,
  },
  шпинат: {
    белки: 0,
    жиры: 0.4,
    углеводы: 2.9,
    ккал: 23,
    proteinSource: "plant",
    originalProteins: 2.9,
  },
  салат_листовой: {
    белки: 0,
    жиры: 0.2,
    углеводы: 2.3,
    ккал: 15,
    proteinSource: "plant",
    originalProteins: 1.4,
  },
  руккола: {
    белки: 0,
    жиры: 0.7,
    углеводы: 3.7,
    ккал: 25,
    proteinSource: "plant",
    originalProteins: 2.6,
  },
  петрушка: {
    белки: 0,
    жиры: 0.4,
    углеводы: 7.4,
    ккал: 47,
    proteinSource: "plant",
    originalProteins: 3.7,
  },
  укроп: {
    белки: 0,
    жиры: 0.5,
    углеводы: 4.5,
    ккал: 38,
    proteinSource: "plant",
    originalProteins: 2.5,
  },
  кукуруза_консервы: {
    белки: 0,
    жиры: 1.2,
    углеводы: 23.0,
    ккал: 106,
    proteinSource: "plant",
    originalProteins: 3.3,
  },
  горошек_консервы: {
    белки: 0,
    жиры: 0.2,
    углеводы: 9.8,
    ккал: 55,
    proteinSource: "plant",
    originalProteins: 3.6,
  },
  фасоль_стручковая: {
    белки: 0,
    жиры: 0.2,
    углеводы: 4.5,
    ккал: 24,
    proteinSource: "plant",
    originalProteins: 2.0,
  },

  // ==========================================
  // ГРИБЫ
  // ==========================================
  шампиньоны: {
    белки: 0,
    жиры: 0.3,
    углеводы: 3.3,
    ккал: 22,
    proteinSource: "plant",
    originalProteins: 4.3,
  },
  вешенки: {
    белки: 0,
    жиры: 0.4,
    углеводы: 6.1,
    ккал: 38,
    proteinSource: "plant",
    originalProteins: 3.3,
  },
  белые_грибы: {
    белки: 0,
    жиры: 0.5,
    углеводы: 3.2,
    ккал: 25,
    proteinSource: "plant",
    originalProteins: 3.7,
  },
  лисички: {
    белки: 0,
    жиры: 0.5,
    углеводы: 3.1,
    ккал: 22,
    proteinSource: "plant",
    originalProteins: 1.5,
  },

  // ==========================================
  // ФРУКТЫ
  // ==========================================
  яблоко: {
    белки: 0,
    жиры: 0.2,
    углеводы: 10.0,
    ккал: 47,
    proteinSource: "plant",
    originalProteins: 0.4,
  },
  банан: {
    белки: 0,
    жиры: 0.3,
    углеводы: 21.0,
    ккал: 89,
    proteinSource: "plant",
    originalProteins: 1.1,
  },
  апельсин: {
    белки: 0,
    жиры: 0.1,
    углеводы: 8.1,
    ккал: 36,
    proteinSource: "plant",
    originalProteins: 0.9,
  },
  мандарин: {
    белки: 0,
    жиры: 0.2,
    углеводы: 7.5,
    ккал: 33,
    proteinSource: "plant",
    originalProteins: 0.8,
  },
  лимон: {
    белки: 0,
    жиры: 0.1,
    углеводы: 3.0,
    ккал: 16,
    proteinSource: "plant",
    originalProteins: 0.9,
  },
  лимоны: {
    белки: 0,
    жиры: 0.1,
    углеводы: 9.0,
    ккал: 29,
    proteinSource: "plant",
    originalProteins: 0.9,
  },
  грейпфрут: {
    белки: 0,
    жиры: 0.1,
    углеводы: 6.5,
    ккал: 35,
    proteinSource: "plant",
    originalProteins: 0.7,
  },
  помело: {
    белки: 0,
    жиры: 0,
    углеводы: 10.0,
    ккал: 38,
    proteinSource: "plant",
    originalProteins: 0.8,
  },
  киви: {
    белки: 0,
    жиры: 0.4,
    углеводы: 8.1,
    ккал: 47,
    proteinSource: "plant",
    originalProteins: 0.8,
  },
  персик: {
    белки: 0,
    жиры: 0.1,
    углеводы: 9.5,
    ккал: 45,
    proteinSource: "plant",
    originalProteins: 0.9,
  },
  нектарин: {
    белки: 0,
    жиры: 0.2,
    углеводы: 8.9,
    ккал: 44,
    proteinSource: "plant",
    originalProteins: 1.1,
  },
  груша: {
    белки: 0,
    жиры: 0.2,
    углеводы: 10.3,
    ккал: 47,
    proteinSource: "plant",
    originalProteins: 0.4,
  },
  виноград: {
    белки: 0,
    жиры: 0.2,
    углеводы: 15.4,
    ккал: 65,
    proteinSource: "plant",
    originalProteins: 0.6,
  },
  слива: {
    белки: 0,
    жиры: 0.2,
    углеводы: 8.6,
    ккал: 42,
    proteinSource: "plant",
    originalProteins: 0.7,
  },
  вишня: {
    белки: 0,
    жиры: 0.2,
    углеводы: 10.6,
    ккал: 50,
    proteinSource: "plant",
    originalProteins: 0.8,
  },
  черешня: {
    белки: 0,
    жиры: 0.2,
    углеводы: 11.5,
    ккал: 52,
    proteinSource: "plant",
    originalProteins: 1.1,
  },
  арбуз: {
    белки: 0,
    жиры: 0.1,
    углеводы: 5.8,
    ккал: 27,
    proteinSource: "plant",
    originalProteins: 0.6,
  },
  дыня: {
    белки: 0,
    жиры: 0.2,
    углеводы: 7.4,
    ккал: 33,
    proteinSource: "plant",
    originalProteins: 0.6,
  },
  ананас: {
    белки: 0,
    жиры: 0.1,
    углеводы: 11.8,
    ккал: 50,
    proteinSource: "plant",
    originalProteins: 0.5,
  },
  хурма: {
    белки: 0,
    жиры: 0.2,
    углеводы: 15.2,
    ккал: 67,
    proteinSource: "plant",
    originalProteins: 0.5,
  },
  авокадо: {
    белки: 0,
    жиры: 14.7,
    углеводы: 1.8,
    ккал: 160,
    proteinSource: "plant",
    originalProteins: 2.0,
  },

  // ==========================================
  // ЯГОДЫ
  // ==========================================
  клубника: {
    белки: 0,
    жиры: 0.4,
    углеводы: 5.7,
    ккал: 30,
    proteinSource: "plant",
    originalProteins: 0.7,
  },
  малина: {
    белки: 0,
    жиры: 0.5,
    углеводы: 6.5,
    ккал: 41,
    proteinSource: "plant",
    originalProteins: 0.8,
  },
  черника: {
    белки: 0,
    жиры: 0.3,
    углеводы: 8.6,
    ккал: 44,
    proteinSource: "plant",
    originalProteins: 1.1,
  },
  голубика: {
    белки: 0,
    жиры: 0.3,
    углеводы: 9.6,
    ккал: 43,
    proteinSource: "plant",
    originalProteins: 0.7,
  },
  смородина_красная: {
    белки: 0,
    жиры: 0.2,
    углеводы: 7.3,
    ккал: 39,
    proteinSource: "plant",
    originalProteins: 0.6,
  },
  смородина_чёрная: {
    белки: 0,
    жиры: 0.4,
    углеводы: 7.3,
    ккал: 44,
    proteinSource: "plant",
    originalProteins: 1.0,
  },
  клюква: {
    белки: 0,
    жиры: 0.1,
    углеводы: 3.7,
    ккал: 26,
    proteinSource: "plant",
    originalProteins: 0.5,
  },
  брусника: {
    белки: 0,
    жиры: 0.5,
    углеводы: 8.2,
    ккал: 43,
    proteinSource: "plant",
    originalProteins: 0.7,
  },
  облепиха: {
    белки: 0,
    жиры: 5.4,
    углеводы: 5.7,
    ккал: 82,
    proteinSource: "plant",
    originalProteins: 1.2,
  },
  ежевика: {
    белки: 0,
    жиры: 0.5,
    углеводы: 5.3,
    ккал: 32,
    proteinSource: "plant",
    originalProteins: 1.5,
  },
  крыжовник: {
    белки: 0,
    жиры: 0.6,
    углеводы: 9.1,
    ккал: 43,
    proteinSource: "plant",
    originalProteins: 0.8,
  },

  // ==========================================
  // МАСЛА И ЖИРЫ
  // ==========================================
  масло_сливочное: {
    белки: 0.8,
    жиры: 72.5,
    углеводы: 1.3,
    ккал: 661,
    proteinSource: "animal",
  },
  масло_сливочное_82: {
    белки: 0.5,
    жиры: 82.5,
    углеводы: 0.8,
    ккал: 748,
    proteinSource: "animal",
  },
  масло_подсолнечное: {
    белки: 0,
    жиры: 99.9,
    углеводы: 0,
    ккал: 899,
    proteinSource: "plant",
  },
  масло_оливковое: {
    белки: 0,
    жиры: 99.8,
    углеводы: 0,
    ккал: 898,
    proteinSource: "plant",
  },
  масло_льняное: {
    белки: 0,
    жиры: 99.8,
    углеводы: 0,
    ккал: 898,
    proteinSource: "plant",
  },
  масло_кокосовое: {
    белки: 0,
    жиры: 99.9,
    углеводы: 0,
    ккал: 899,
    proteinSource: "plant",
  },
  майонез: {
    белки: 0,
    жиры: 67.0,
    углеводы: 2.6,
    ккал: 616,
    proteinSource: "animal",
  },
  майонез_лёгкий: {
    белки: 0.5,
    жиры: 30.0,
    углеводы: 7.0,
    ккал: 300,
    proteinSource: "animal",
  },
  маргарин: {
    белки: 0,
    жиры: 82.0,
    углеводы: 0.5,
    ккал: 743,
    proteinSource: "plant",
  },

  // ==========================================
  // САХАР И ПОДСЛАСТИТЕЛИ
  // ==========================================
  сахар: {
    белки: 0,
    жиры: 0,
    углеводы: 99.8,
    ккал: 399,
    proteinSource: "plant",
  },
  мёд: {
    белки: 0,
    жиры: 0,
    углеводы: 82.4,
    ккал: 329,
    proteinSource: "plant",
    originalProteins: 0.3,
  },
  варенье: {
    белки: 0,
    жиры: 0,
    углеводы: 62.0,
    ккал: 254,
    proteinSource: "plant",
    originalProteins: 0.3,
  },
  джем: {
    белки: 0,
    жиры: 0,
    углеводы: 60.0,
    ккал: 245,
    proteinSource: "plant",
    originalProteins: 0.5,
  },

  // ==========================================
  // КОНДИТЕРСКИЕ ИЗДЕЛИЯ
  // ==========================================
  шоколад_молочный: {
    белки: 0,
    жиры: 30.6,
    углеводы: 56.9,
    ккал: 535,
    proteinSource: "plant",
    originalProteins: 6.9,
  },
  шоколад_горький: {
    белки: 0,
    жиры: 35.4,
    углеводы: 48.2,
    ккал: 539,
    proteinSource: "plant",
    originalProteins: 6.2,
  },
  мармелад: {
    белки: 0,
    жиры: 0,
    углеводы: 74.0,
    ккал: 296,
    proteinSource: "plant",
    originalProteins: 0.4,
  },
  зефир: {
    белки: 0,
    жиры: 0,
    углеводы: 78.0,
    ккал: 304,
    proteinSource: "plant",
    originalProteins: 0.8,
  },
  пастила: {
    белки: 0,
    жиры: 0,
    углеводы: 80.0,
    ккал: 310,
    proteinSource: "plant",
    originalProteins: 0.5,
  },
  печенье_овсяное: {
    белки: 0,
    жиры: 14.0,
    углеводы: 65.0,
    ккал: 437,
    proteinSource: "plant",
    originalProteins: 6.5,
  },
  печенье_сдобное: {
    белки: 0,
    жиры: 20.0,
    углеводы: 67.0,
    ккал: 471,
    proteinSource: "plant",
    originalProteins: 7.4,
  },
  пряники: {
    белки: 0,
    жиры: 6.0,
    углеводы: 72.0,
    ккал: 350,
    proteinSource: "plant",
    originalProteins: 5.0,
  },
  вафли: {
    белки: 0,
    жиры: 26.0,
    углеводы: 62.0,
    ккал: 502,
    proteinSource: "plant",
    originalProteins: 5.2,
  },
  халва: {
    белки: 0,
    жиры: 30.0,
    углеводы: 48.0,
    ккал: 502,
    proteinSource: "plant",
    originalProteins: 14.0,
  },

  // ==========================================
  // НАПИТКИ
  // ==========================================
  кофе_чёрный: {
    белки: 0,
    жиры: 0,
    углеводы: 0,
    ккал: 2,
    proteinSource: "plant",
  },
  чай_чёрный: {
    белки: 0,
    жиры: 0,
    углеводы: 0,
    ккал: 1,
    proteinSource: "plant",
  },
  чай_зелёный: {
    белки: 0,
    жиры: 0,
    углеводы: 0,
    ккал: 0,
    proteinSource: "plant",
  },
  какао: {
    белки: 0,
    жиры: 13.7,
    углеводы: 12.0,
    ккал: 227,
    proteinSource: "plant",
    originalProteins: 24.3,
  },
  молоко_овсяное: {
    белки: 0,
    жиры: 0.6,
    углеводы: 6.0,
    ккал: 30,
    proteinSource: "plant",
    originalProteins: 1.0,
  },
  молоко_соевое: {
    белки: 0,
    жиры: 1.2,
    углеводы: 5.7,
    ккал: 38,
    proteinSource: "plant",
    originalProteins: 3.3,
  },
  молоко_миндальное: {
    белки: 0,
    жиры: 1.0,
    углеводы: 6.0,
    ккал: 35,
    proteinSource: "plant",
    originalProteins: 0.5,
  },
  сок_апельсиновый: {
    белки: 0,
    жиры: 0.2,
    углеводы: 11.0,
    ккал: 47,
    proteinSource: "plant",
    originalProteins: 0.7,
  },
  сок_яблочный: {
    белки: 0,
    жиры: 0.1,
    углеводы: 11.0,
    ккал: 46,
    proteinSource: "plant",
    originalProteins: 0.4,
  },

  // ==========================================
  // ПРОЧЕЕ
  // ==========================================
  кетчуп: {
    белки: 0,
    жиры: 0.1,
    углеводы: 23.0,
    ккал: 97,
    proteinSource: "plant",
    originalProteins: 1.0,
  },
  соевый_соус: {
    белки: 0,
    жиры: 0,
    углеводы: 8.0,
    ккал: 53,
    proteinSource: "plant",
    originalProteins: 7.0,
  },
  горчица: {
    белки: 0,
    жиры: 8.0,
    углеводы: 5.0,
    ккал: 120,
    proteinSource: "plant",
    originalProteins: 4.5,
  },
  уксус: {
    белки: 0,
    жиры: 0,
    углеводы: 0.5,
    ккал: 11,
    proteinSource: "plant",
  },
  соль: {
    белки: 0,
    жиры: 0,
    углеводы: 0,
    ккал: 0,
    proteinSource: "plant",
  },
  желатин: {
    белки: 87.2,
    жиры: 0.4,
    углеводы: 0.7,
    ккал: 355,
    proteinSource: "animal",
  },
  разрыхлитель: {
    белки: 0,
    жиры: 0,
    углеводы: 27.0,
    ккал: 79,
    proteinSource: "plant",
  },
  дрожжи: {
    белки: 0,
    жиры: 2.0,
    углеводы: 12.0,
    ккал: 109,
    proteinSource: "plant",
    originalProteins: 12.7,
  },

  // ==========================================
  // ПРОДУКТЫ С НИЗКОЙ БИОДОСТУПНОСТЬЮ БЕЛКА
  // ==========================================
  пудинг_hyper_high_protein: {
    белки: 10.0,
    жиры: 1.5,
    углеводы: 6.0,
    ккал: 80,
    proteinSource: "mixed",
    note: "Проверить источник белка",
  },
};

/**
 * Получить питательную ценность продукта для указанного веса
 * @param {string} productName - название продукта
 * @param {number} grams - вес в граммах
 * @returns {Object|null}
 */
export const getProductNutrition = (productName, grams) => {
  const product = products[productName];
  if (!product) return null;

  const calories = ((product.ккал || 0) * grams) / 100;
  const proteins = ((product.белки || 0) * grams) / 100;
  const fats = ((product.жиры || 0) * grams) / 100;
  const carbs = ((product.углеводы || 0) * grams) / 100;

  return {
    calories,
    proteins,
    fats,
    carbs,
    proteinSource: product.proteinSource,
    originalProteins: product.originalProteins,
  };
};

/**
 * Поиск продуктов по названию
 * @param {string} query - поисковый запрос
 * @returns {Array} массив названий продуктов
 */
export const searchProducts = (query) => {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return Object.keys(products).filter((product) =>
    product.toLowerCase().includes(q)
  );
};

/**
 * Получить продукты с животным белком
 * @returns {Array}
 */
export const getAnimalProteinProducts = () => {
  return Object.keys(products).filter(
    (product) => products[product].proteinSource === "animal"
  );
};

/**
 * Добавление нового продукта
 * @param {string} name
 * @param {Object} nutrition
 */
export const addProduct = (name, nutrition) => {
  if (products[name]) {
    console.warn(`Продукт "${name}" уже существует`);
    return false;
  }

  products[name] = {
    белки: nutrition.proteins || 0,
    жиры: nutrition.fats || 0,
    углеводы: nutrition.carbs || 0,
    ккал: nutrition.calories || 0,
    proteinSource: nutrition.proteinSource || "unknown",
  };

  return true;
};

/**
 * Обновление данных продукта
 * @param {string} name
 * @param {Object} nutrition
 */
export const updateProduct = (name, nutrition) => {
  if (!products[name]) {
    console.warn(`Продукт "${name}" не найден`);
    return false;
  }

  products[name] = {
    ...products[name],
    белки: nutrition.proteins ?? products[name].белки,
    жиры: nutrition.fats ?? products[name].жиры,
    углеводы: nutrition.carbs ?? products[name].углеводы,
    ккал: nutrition.calories ?? products[name].ккал,
    proteinSource: nutrition.proteinSource ?? products[name].proteinSource,
  };

  return true;
};
