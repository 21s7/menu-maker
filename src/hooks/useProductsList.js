// src/hooks/useProductsList.js
import { useState, useMemo } from "react";
import { getProductNutrition } from "../data/products";

const DISMISSED_WARNINGS_KEY = "dismissed_product_warnings";

export const useProductsList = () => {
  const [products, setProducts] = useState([]);

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

  const addProduct = (name, grams, showMessage) => {
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
        `⚠️ "${name}" содержит растительный белок. Он не будет учитываться в расчете из-за низкой биодоступности. Нажмите "×" на предупреждении, чтобы больше не видеть его.`
      );
    }

    setProducts((prev) => [...prev, productInfo]);
    return true;
  };

  const removeLastProduct = (showMessage) => {
    if (products.length === 0) {
      showMessage("Нет добавленных продуктов для удаления.");
      return false;
    }
    setProducts((prev) => prev.slice(0, -1));
    return true;
  };

  const clearProducts = () => {
    setProducts([]);
  };

  const hasPlantProteins = useMemo(() => {
    return products.some((product) => product.proteinSource === "plant");
  }, [products]);

  return {
    products,
    hasPlantProteins,
    addProduct,
    removeLastProduct,
    clearProducts,
  };
};
