// src/components/InfoBanner.jsx
import React from "react";

const InfoBanner = () => {
  return (
    <div className="info-banner">
      <div className="info-banner__content">
        <h1 className="info-banner__title">
          Калькулятор калорийности продуктов
        </h1>
        <p className="info-banner__description">
          Калькулятор калорий позволит рассчитать калорийность отдельных
          продуктов в режиме онлайн. Просто выберите продукт и получите не
          только его калорийность, но и содержание белков, жиров и углеводов
          (БЖУ).
        </p>
        <div className="info-banner__features"></div>
      </div>
    </div>
  );
};

export default InfoBanner;
