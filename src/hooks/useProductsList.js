// src/hooks/useProductsList.js
import { useState, useMemo, useCallback } from "react";
import { getProductNutrition } from "../data/products";

const DISMISSED_WARNINGS_KEY = "dismissed_product_warnings";

// Функция для получения текущего времени в формате HH:MM
const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const useProductsList = () => {
  // Изменяем структуру: теперь продукты группируются по приемам пищи
  const [meals, setMeals] = useState([
    {
      id: Date.now(),
      time: getCurrentTime(), // Автоматически текущее время
      name: "Прием пищи 1",
      products: [],
    },
  ]);

  const isWarningDismissed = (productName) => {
    try {
      const dismissed = localStorage.getItem(DISMISSED_WARNINGS_KEY);
      if (dismissed) {
        const dismissedList = JSON.parse(dismissed);
        return dismissedList.includes(productName);
      }
    } catch (e) {
      console.error("Error reading dismissed warnings:", e);
    }
    return false;
  };

  // Получить все продукты из всех приемов пищи
  const allProducts = useMemo(() => {
    return meals.flatMap((meal) => meal.products);
  }, [meals]);

  const addProduct = useCallback((mealId, name, grams, showMessage) => {
    if (!name || !grams || grams <= 0) {
      showMessage("Пожалуйста, выберите продукт и введите количество грамм.");
      return false;
    }

    const nutrition = getProductNutrition(name, grams);
    if (!nutrition) {
      showMessage("Продукт не найден.");
      return false;
    }

    const productInfo = {
      id: Date.now(),
      name,
      grams,
      ...nutrition,
    };

    // Показываем предупреждение только если оно не было отключено
    if (nutrition.proteinSource === "plant" && !isWarningDismissed(name)) {
      showMessage(
        `⚠️ "${name}" содержит растительный белок. Он не будет учитываться в расчете из-за низкой биодоступности.`
      );
    }

    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === mealId
          ? { ...meal, products: [...meal.products, productInfo] }
          : meal
      )
    );
    return true;
  }, []);

  // Удалить продукт по клику
  const removeProduct = useCallback((mealId, productId, showMessage) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === mealId
          ? {
              ...meal,
              products: meal.products.filter((p) => p.id !== productId),
            }
          : meal
      )
    );
  }, []);

  // Удалить целый прием пищи
  const removeMeal = useCallback(
    (mealId, showMessage) => {
      if (meals.length <= 1) {
        showMessage("Должен быть хотя бы один прием пищи.");
        return false;
      }
      setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== mealId));
      return true;
    },
    [meals.length]
  );

  // Добавить новый прием пищи (с автоматическим текущим временем)
  const addMeal = useCallback(() => {
    const mealNumber = meals.length + 1;
    const currentTime = getCurrentTime(); // Всегда текущее время

    const newMeal = {
      id: Date.now(),
      time: currentTime,
      name: `Прием пищи ${mealNumber}`,
      products: [],
    };
    setMeals((prevMeals) => [...prevMeals, newMeal]);
  }, [meals]);

  // Обновить время приема пищи
  const updateMealTime = useCallback((mealId, time) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) => (meal.id === mealId ? { ...meal, time } : meal))
    );
  }, []);

  // Обновить название приема пищи
  const updateMealName = useCallback((mealId, name) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) => (meal.id === mealId ? { ...meal, name } : meal))
    );
  }, []);

  const clearAllProducts = useCallback(() => {
    setMeals([
      {
        id: Date.now(),
        time: getCurrentTime(),
        name: "Прием пищи 1",
        products: [],
      },
    ]);
  }, []);

  const hasPlantProteins = useMemo(() => {
    return allProducts.some((product) => product.proteinSource === "plant");
  }, [allProducts]);

  const mealsCount = meals.length;

  return {
    meals,
    allProducts,
    hasPlantProteins,
    mealsCount,
    addProduct,
    removeProduct,
    removeMeal,
    addMeal,
    updateMealTime,
    updateMealName,
    clearAllProducts,
  };
};
