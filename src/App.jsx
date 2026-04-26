// src/App.jsx
import React, { useState, useMemo } from "react";
import { useSearch } from "./hooks/useSearch";
import { useProductsList } from "./hooks/useProductsList";
import { useHelpMessage } from "./hooks/useHelpMessage";
import { calculateTotals } from "./utils/calculations";
import Header from "./components/Header";
import InfoBanner from "./components/InfoBanner";
import SearchInput from "./components/SearchInput";
import GramsInput from "./components/GramsInput";
import MealBlock from "./components/MealBlock";
import NutritionTable from "./components/NutritionTable";
import NutritionChart from "./components/NutritionChart";
import Guide from "./components/Guide";
import HelpMessage from "./components/HelpMessage";
import LoadingScreen from "./components/LoadingScreen";
import "./styles/styles.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const search = useSearch();
  const productsList = useProductsList();
  const help = useHelpMessage();

  const [grams, setGrams] = useState("");
  const [activeMealId, setActiveMealId] = useState(null);

  // Устанавливаем активный прием пищи при первой загрузке
  useState(() => {
    if (productsList.meals.length > 0 && !activeMealId) {
      setActiveMealId(productsList.meals[0].id);
    }
  }, [productsList.meals]);

  const totals = useMemo(
    () => calculateTotals(productsList.allProducts),
    [productsList.allProducts]
  );

  const handleAddProduct = () => {
    const targetMealId = activeMealId || productsList.meals[0]?.id;
    if (!targetMealId) {
      help.showMessage("Создайте прием пищи сначала.");
      return;
    }

    const success = productsList.addProduct(
      targetMealId,
      search.selected,
      parseFloat(grams),
      help.showMessage
    );
    if (success) {
      setGrams("");
      search.handleClear();
    }
  };

  const handleRemoveProduct = (mealId, productId) => {
    productsList.removeProduct(mealId, productId, help.showMessage);
  };

  const handleRemoveMeal = (mealId) => {
    productsList.removeMeal(mealId, help.showMessage);
    // Если удалили активный прием пищи, переключаемся на первый
    if (activeMealId === mealId) {
      setActiveMealId(productsList.meals[0]?.id);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddProduct();
    }
  };

  if (isLoading) {
    return <LoadingScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <div className="app">
      <Header />
      <InfoBanner />

      <div className="top-container">
        <div className="top-container__main">
          <div className="product">
            <SearchInput
              query={search.query}
              setQuery={search.setQuery}
              results={search.results}
              isLoading={search.isLoading}
              onSelect={search.handleSelect}
              containerRef={search.containerRef}
            />
            <GramsInput
              grams={grams}
              setGrams={setGrams}
              onKeyPress={handleKeyPress}
            />
            <button
              className="add-product-btn"
              onClick={handleAddProduct}
              title="Добавить продукт (Enter)"
            >
              + Добавить
            </button>
          </div>

          <div className="meal-selector">
            <label className="meal-selector__label">В прием пищи:</label>
            <select
              className="meal-selector__select"
              value={activeMealId || ""}
              onChange={(e) => setActiveMealId(Number(e.target.value))}
            >
              {productsList.meals.map((meal) => (
                <option key={meal.id} value={meal.id}>
                  {meal.name} ({meal.time})
                </option>
              ))}
            </select>
            <button
              className="add-meal-btn"
              onClick={productsList.addMeal}
              title="Добавить новый прием пищи"
            >
              + Новый прием
            </button>
          </div>

          <div className="meals-container">
            {productsList.meals.map((meal, index) => (
              <MealBlock
                key={meal.id}
                meal={meal}
                onRemoveMeal={handleRemoveMeal}
                onUpdateTime={productsList.updateMealTime}
                onUpdateName={productsList.updateMealName}
                onRemoveProduct={handleRemoveProduct}
                isLast={productsList.meals.length === 1}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <NutritionTable
          totals={totals}
          hasPlantProteins={productsList.hasPlantProteins}
          mealsCount={productsList.mealsCount}
        />
        <NutritionChart
          proteinsPercent={totals.proteinsPercent}
          fatsPercent={totals.fatsPercent}
          carbsPercent={totals.carbsPercent}
        />
      </div>

      <Guide />
      <HelpMessage show={help.show} message={help.message} />
    </div>
  );
}

export default App;
