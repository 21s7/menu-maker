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
import Controls from "./components/Controls";
import ProductsList from "./components/ProductsList";
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

  const totals = useMemo(
    () => calculateTotals(productsList.products),
    [productsList.products]
  );

  const handleAddProduct = () => {
    const success = productsList.addProduct(
      search.selected,
      parseFloat(grams),
      help.showMessage
    );
    if (success) {
      setGrams("");
      search.handleClear();
    }
  };

  const handleRemoveLast = () => {
    productsList.removeLastProduct(help.showMessage);
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
          </div>

          <Controls onAdd={handleAddProduct} onRemove={handleRemoveLast} />

          <ProductsList products={productsList.products} />
        </div>
      </div>

      <div className="bottom-container">
        <NutritionTable
          totals={totals}
          hasPlantProteins={productsList.hasPlantProteins}
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
