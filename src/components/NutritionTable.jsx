// src/components/NutritionTable.jsx
import React, { useState } from "react";
import { useDismissibleWarning } from "../hooks/useDismissibleWarning";

const NutritionTable = ({ totals, hasPlantProteins, mealsCount }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { isDismissed, dismiss } = useDismissibleWarning("plant_protein_table");

  const baseTableContent = (
    <>
      <tr>
        <td>Приемов пищи</td>
        <td>{mealsCount}</td>
      </tr>
      <tr>
        <td>Калории</td>
        <td className={totals.calories > 2000 ? "high-calories" : ""}>
          {totals.calories.toFixed(2)} ккал
        </td>
      </tr>
      <tr>
        <td>Белки</td>
        <td>
          {totals.proteins.toFixed(2)} г ({totals.proteinsPercent.toFixed(1)}%)
        </td>
      </tr>
      <tr>
        <td>Жиры</td>
        <td>
          {totals.fats.toFixed(2)} г ({totals.fatsPercent.toFixed(1)}%)
        </td>
      </tr>
      <tr>
        <td>Углеводы</td>
        <td>
          {totals.carbs.toFixed(2)} г ({totals.carbsPercent.toFixed(1)}%)
        </td>
      </tr>
    </>
  );

  if (!hasPlantProteins || isDismissed) {
    return (
      <div className="info">
        <table className="info__table">
          <thead>
            <tr>
              <th>Показатель</th>
              <th>Значение</th>
            </tr>
          </thead>
          <tbody>{baseTableContent}</tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="info">
      <div className="info__warning">
        <div className="info__warning-header">
          <span className="warning-icon">⚠️</span>
          <strong>Внимание! Растительные белки не учитываются</strong>
        </div>
        <p className="info__warning-text">
          Растительные белки имеют низкую биодоступность (40-70%) и неполный
          аминокислотный профиль. В расчете учитываются только животные белки.
        </p>
        <div className="info__warning-actions">
          <button
            className="info__warning-btn info__warning-btn--details"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Скрыть детали" : "Подробнее"}
          </button>
          <button
            className="info__warning-btn info__warning-btn--ok"
            onClick={dismiss}
          >
            Ок, больше не показывать
          </button>
        </div>

        {showDetails && (
          <div className="info__warning-details">
            <p>
              <strong>Почему растительные белки не учитываются?</strong>
            </p>
            <ul>
              <li>Биодоступность растительных белков: 40-70%</li>
              <li>Биодоступность животных белков: 90-100%</li>
              <li>Растительные белки содержат неполный набор аминокислот</li>
            </ul>
          </div>
        )}
      </div>

      <table className="info__table">
        <thead>
          <tr>
            <th>Показатель</th>
            <th>Значение</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Приемов пищи</td>
            <td>{mealsCount}</td>
          </tr>
          <tr>
            <td>Калории</td>
            <td className={totals.calories > 2000 ? "high-calories" : ""}>
              {totals.calories.toFixed(2)} ккал
            </td>
          </tr>
          <tr className="protein-warning-row">
            <td>
              Белки
              <span
                className="protein-warning-icon"
                title="Растительные белки не учитываются"
              >
                ⚠️
              </span>
            </td>
            <td>
              {totals.proteins.toFixed(2)} г
              <span className="protein-percent">
                ({totals.proteinsPercent.toFixed(1)}%)
              </span>
              <div className="protein-warning-tooltip">
                ⚠️ Учтены только животные белки
              </div>
            </td>
          </tr>
          <tr>
            <td>Жиры</td>
            <td>
              {totals.fats.toFixed(2)} г ({totals.fatsPercent.toFixed(1)}%)
            </td>
          </tr>
          <tr>
            <td>Углеводы</td>
            <td>
              {totals.carbs.toFixed(2)} г ({totals.carbsPercent.toFixed(1)}%)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NutritionTable;
