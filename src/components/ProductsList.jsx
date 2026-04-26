// src/components/ProductsList.jsx
import React from "react";
import { useDismissibleWarning } from "../hooks/useDismissibleWarning";

const ProductWarning = ({ product, onDismiss }) => {
  const { isDismissed, dismiss } = useDismissibleWarning(
    `product_${product.id}`
  );

  if (isDismissed) return null;

  const handleDismiss = () => {
    dismiss();
    onDismiss?.();
  };

  return (
    <div className="products-list__item-warning">
      <div className="warning-content">
        <span className="warning-icon">⚠️</span>
        <span className="warning-text">
          "{product.name}" содержит растительный белок. Он не будет учитываться
          в расчете из-за низкой биодоступности.
          {product.originalProteins && (
            <span className="original-proteins">
              {" "}
              · исходно: {product.originalProteins.toFixed(2)} г
            </span>
          )}
        </span>
        <button
          className="warning-dismiss-btn"
          onClick={handleDismiss}
          title="Больше не показывать это предупреждение"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const ProductsList = ({
  products,
  mealId,
  onRemoveProduct,
  showMealContext,
}) => {
  if (products.length === 0) {
    return (
      <div className="products-list">
        <div className="products-list__empty">Нет добавленных продуктов</div>
      </div>
    );
  }

  return (
    <div className="products-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="products-list__item"
          onClick={() =>
            showMealContext && onRemoveProduct?.(mealId, product.id)
          }
          title={showMealContext ? "Нажмите, чтобы удалить продукт" : ""}
        >
          <div className="products-list__item-header">
            <strong className="products-list__item-name">{product.name}</strong>
            <div className="products-list__item-header-right">
              <span className="products-list__item-grams">
                {product.grams} г
              </span>
              {showMealContext && (
                <button
                  className="products-list__item-remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveProduct?.(mealId, product.id);
                  }}
                  title="Удалить продукт"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          <div className="products-list__item-nutrition">
            <span className="nutrition-badge calories">
              🔥 {product.calories.toFixed(2)} ккал
            </span>
            <span className="nutrition-badge proteins">
              🥩 {product.proteins.toFixed(2)} г
            </span>
            <span className="nutrition-badge fats">
              🧈 {product.fats.toFixed(2)} г
            </span>
            <span className="nutrition-badge carbs">
              🍚 {product.carbs.toFixed(2)} г
            </span>
          </div>

          {product.proteinSource === "plant" && (
            <ProductWarning product={product} />
          )}

          {product.proteinSource === "mixed" && (
            <div className="products-list__item-info">
              ℹ️ Источник белка требует проверки
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
