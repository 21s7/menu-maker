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

  // ========== МЯСО И ПТИЦА (полноценный белок) ==========
  индейка: {
    белки: 23.7,
    жиры: 1.5,
    углеводы: 0.1,
    ккал: 114,
    proteinSource: "animal",
  },
  куриная_грудка: {
    белки: 23.6,
    жиры: 1.9,
    углеводы: 0.4,
    ккал: 113,
    proteinSource: "animal",
  },
  свинина: {
    белки: 19.4,
    жиры: 7.1,
    углеводы: 0,
    ккал: 142,
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
  куриные_бёдра: {
    белки: 17.0,
    жиры: 16.0,
    углеводы: 0,
    ккал: 210,
    proteinSource: "animal",
  },
  жирный_фарш: {
    белки: 12.0,
    жиры: 28.0,
    углеводы: 3.0,
    ккал: 300,
    proteinSource: "animal",
  },

  // ========== РЫБА И МОРЕПРОДУКТЫ (полноценный белок) ==========
  форель: {
    белки: 21.0,
    жиры: 7.0,
    углеводы: 0,
    ккал: 148,
    proteinSource: "animal",
  },

  // ========== МОЛОЧНЫЕ ПРОДУКТЫ (полноценный белок) ==========
  творог_0: {
    белки: 18.0,
    жиры: 0.5,
    углеводы: 3.3,
    ккал: 90,
    proteinSource: "animal",
  },
  безлактозное_молоко: {
    белки: 3.5,
    жиры: 1.5,
    углеводы: 2.5,
    ккал: 40,
    proteinSource: "animal",
  },
  молоко: {
    белки: 2.9,
    жиры: 2.5,
    углеводы: 4.8,
    ккал: 54,
    proteinSource: "animal",
  },
  сыр: {
    белки: 23.2,
    жиры: 29.5,
    углеводы: 0,
    ккал: 364,
    proteinSource: "animal",
  },
  сметана_20: {
    белки: 2.5,
    жиры: 20.0,
    углеводы: 3.4,
    ккал: 206,
    proteinSource: "animal",
  },
  греческий_йогурт: {
    белки: 7.0,
    жиры: 2.0,
    углеводы: 5.0,
    ккал: 64,
    proteinSource: "animal",
  },
  сыр_плавленный: {
    белки: 8.5,
    жиры: 18.0,
    углеводы: 8.5,
    ккал: 230,
    proteinSource: "animal",
  },
  мягкий_творог: {
    белки: 8.6,
    жиры: 5.0,
    углеводы: 4.0,
    ккал: 95,
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

  // ========== ЯЙЦА (полноценный белок) ==========
  яйца: {
    белки: 12.7,
    жиры: 11.5,
    углеводы: 0.7,
    ккал: 157,
    proteinSource: "animal",
  },
  яичный_белок: {
    белки: 11.1,
    жиры: 0.2,
    углеводы: 0.7,
    ккал: 52,
    proteinSource: "animal",
  },

  // ========== РАСТИТЕЛЬНЫЕ ПРОДУКТЫ (белки обнулены) ==========
  макароны: {
    белки: 0, // растительный белок
    жиры: 1.5,
    углеводы: 75.0,
    ккал: 371,
    proteinSource: "plant",
    originalProteins: 10.4,
  },
  гречка: {
    белки: 0, // растительный белок
    жиры: 3.3,
    углеводы: 57.1,
    ккал: 308,
    proteinSource: "plant",
    originalProteins: 12.6,
  },
  рис: {
    белки: 0, // растительный белок
    жиры: 1.0,
    углеводы: 77.0,
    ккал: 333,
    proteinSource: "plant",
    originalProteins: 7.5,
  },
  рис_бурый: {
    белки: 0, // растительный белок
    жиры: 1.8,
    углеводы: 72.9,
    ккал: 338,
    proteinSource: "plant",
    originalProteins: 7.5,
  },
  арахис: {
    белки: 0, // растительный белок
    жиры: 49.0,
    углеводы: 16.0,
    ккал: 567,
    proteinSource: "plant",
    originalProteins: 26.0,
  },
  грецкий_орех: {
    белки: 0, // растительный белок
    жиры: 60.8,
    углеводы: 11.1,
    ккал: 656,
    proteinSource: "plant",
    originalProteins: 16.2,
  },
  хлеб: {
    белки: 0, // растительный белок
    жиры: 3.3,
    углеводы: 46.7,
    ккал: 266,
    proteinSource: "plant",
    originalProteins: 8.9,
  },
  хлебцы: {
    белки: 0, // растительный белок
    жиры: 2.3,
    углеводы: 57.1,
    ккал: 290,
    proteinSource: "plant",
    originalProteins: 11.0,
  },
  булгур: {
    белки: 0, // растительный белок
    жиры: 1.3,
    углеводы: 75.9,
    ккал: 342,
    proteinSource: "plant",
    originalProteins: 12.3,
  },
  овсяное_молоко: {
    белки: 0, // растительный белок
    жиры: 0.6,
    углеводы: 6.0,
    ккал: 30,
    proteinSource: "plant",
    originalProteins: 1.0,
  },

  // ========== ФРУКТЫ И ОВОЩИ (белки обнулены) ==========
  помело: {
    белки: 0,
    жиры: 0,
    углеводы: 10.0,
    ккал: 38,
    proteinSource: "plant",
  },
  лимоны: {
    белки: 0,
    жиры: 0.1,
    углеводы: 9.0,
    ккал: 29,
    proteinSource: "plant",
  },
  лук: {
    белки: 0,
    жиры: 0.1,
    углеводы: 9.0,
    ккал: 40,
    proteinSource: "plant",
  },

  // ========== ЖИРЫ ==========
  масло_сливочное: {
    белки: 0.8, // следы белка, можно оставить
    жиры: 72.5,
    углеводы: 1.3,
    ккал: 661,
    proteinSource: "animal",
  },

  // ========== ПРОДУКТЫ С НИЗКОЙ БИОДОСТУПНОСТЬЮ БЕЛКА ==========
  пудинг_hyper_high_protein: {
    белки: 10.0, // может быть растительный или смешанный
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
 * @returns {Object|null} объект с калориями, белками, жирами, углеводами
 */
export const getProductNutrition = (productName, grams) => {
  const product = products[productName];
  if (!product) return null;

  // Данные на 100г, пересчитываем на указанный вес
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
  return Object.keys(products).filter((product) =>
    product.toLowerCase().includes(query.toLowerCase())
  );
};

/**
 * Получить только продукты с животным белком
 * @returns {Array} массив названий продуктов с животным белком
 */
export const getAnimalProteinProducts = () => {
  return Object.keys(products).filter(
    (product) => products[product].proteinSource === "animal"
  );
};

/**
 * Добавление нового продукта в базу
 * @param {string} name - название продукта
 * @param {Object} nutrition - данные на 100г { белки, жиры, углеводы, ккал, proteinSource }
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
 * @param {string} name - название продукта
 * @param {Object} nutrition - новые данные на 100г
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
