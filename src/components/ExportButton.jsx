// src/components/ExportButton.jsx
import React, { useState } from "react";
import html2canvas from "html2canvas";

const ExportIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ExportButton = ({ meals, totals, mealsCount }) => {
  const [isExporting, setIsExporting] = useState(false);

  // Группируем продукты по названиям
  const getGroupedProducts = () => {
    const productMap = new Map();

    meals.forEach((meal) => {
      meal.products.forEach((product) => {
        const key = product.name;
        if (productMap.has(key)) {
          productMap.set(key, productMap.get(key) + product.grams);
        } else {
          productMap.set(key, product.grams);
        }
      });
    });

    return Array.from(productMap.entries())
      .map(([name, grams]) => ({ name, grams }))
      .sort((a, b) => b.grams - a.grams);
  };

  // Функция для конвертации изображения в base64
  const getLogoBase64 = () => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      };
      img.onerror = () => {
        // Если логотип не загрузился, возвращаем null
        resolve(null);
      };
      img.src = "/logo.png";
    });
  };

  const handleExport = async () => {
    setIsExporting(true);

    const logoBase64 = await getLogoBase64();
    const groupedProducts = getGroupedProducts();

    // Создаем временный контейнер для экспорта
    const exportContainer = document.createElement("div");
    exportContainer.style.position = "absolute";
    exportContainer.style.left = "-9999px";
    exportContainer.style.top = "0";
    exportContainer.style.width = "420px";
    exportContainer.style.padding = "24px";
    exportContainer.style.background = "#0d0d0d";
    exportContainer.style.color = "#f0f0f0";
    exportContainer.style.fontFamily =
      "Inter, -apple-system, BlinkMacSystemFont, sans-serif";
    exportContainer.style.borderRadius = "8px";

    exportContainer.innerHTML = `
      <div>
        <!-- Заголовок с логотипом и ссылкой -->
        <div style="
          display: flex; 
          align-items: center; 
          gap: 12px; 
          margin-bottom: 20px; 
          padding-bottom: 16px; 
          border-bottom: 1px solid rgba(255,255,255,0.1);
        ">
          ${
            logoBase64
              ? `
            <img 
              src="${logoBase64}" 
              alt="Логотип" 
              style="
                width: 32px; 
                height: 32px; 
                object-fit: contain;
                flex-shrink: 0;
              "
            />
          `
              : `
            <div style="
              width: 32px; 
              height: 32px; 
              background: rgba(255,255,255,0.05);
              border-radius: 6px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              color: #888;
              flex-shrink: 0;
            ">
              КБ
            </div>
          `
          }
          <div style="flex: 1;">
            <div style="
              font-size: 15px; 
              font-weight: 600; 
              color: #e0e0e0;
              letter-spacing: 0.5px;
            ">
              Калькулятор КБЖУ
            </div>
            <div style="
              font-size: 11px; 
              color: #5a8fd4;
              margin-top: 2px;
              text-decoration: none;
              letter-spacing: 0.5px;
            ">
              mp.sarigma.ru
            </div>
          </div>
        </div>
        
        <!-- Продукты -->
        <div style="margin-bottom: 20px;">
          <h3 style="
            font-size: 12px; 
            color: #888; 
            margin: 0 0 10px 0; 
            font-weight: 600; 
            text-transform: uppercase; 
            letter-spacing: 1.5px;
          ">
            Продукты
          </h3>
          <div style="display: flex; flex-wrap: wrap; gap: 6px;">
            ${groupedProducts
              .map(
                (product) => `
              <div style="
                background: rgba(255,255,255,0.04);
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 6px;
                padding: 6px 10px;
                font-size: 12px;
                display: inline-flex;
                gap: 6px;
                align-items: center;
              ">
                <span style="color: #e0e0e0;">${product.name.replace(
                  /_/g,
                  " "
                )}</span>
                <span style="color: #888; font-weight: 500;">${
                  product.grams
                }г</span>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        
        <!-- КБЖУ таблица -->
        <div>
          <h3 style="
            font-size: 12px; 
            color: #888; 
            margin: 0 0 10px 0; 
            font-weight: 600; 
            text-transform: uppercase; 
            letter-spacing: 1.5px;
          ">
            КБЖУ
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 8px 12px; color: #888;">Приемов пищи</td>
              <td style="padding: 8px 12px; color: #e0e0e0; text-align: right; font-weight: 500;">${mealsCount}</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,80,80,0.03);">
              <td style="padding: 8px 12px; color: #888;">Калорийность</td>
              <td style="padding: 8px 12px; color: #ff6b6b; text-align: right; font-weight: 600;">${totals.calories.toFixed(
                1
              )} ккал</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(80,140,255,0.03);">
              <td style="padding: 8px 12px; color: #888;">Белки</td>
              <td style="padding: 8px 12px; color: #6b9fff; text-align: right; font-weight: 600;">${totals.proteins.toFixed(
                1
              )} г (${totals.proteinsPercent.toFixed(1)}%)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,180,60,0.03);">
              <td style="padding: 8px 12px; color: #888;">Жиры</td>
              <td style="padding: 8px 12px; color: #ffb43c; text-align: right; font-weight: 600;">${totals.fats.toFixed(
                1
              )} г (${totals.fatsPercent.toFixed(1)}%)</td>
            </tr>
            <tr style="background: rgba(60,200,120,0.03);">
              <td style="padding: 8px 12px; color: #888;">Углеводы</td>
              <td style="padding: 8px 12px; color: #3cc878; text-align: right; font-weight: 600;">${totals.carbs.toFixed(
                1
              )} г (${totals.carbsPercent.toFixed(1)}%)</td>
            </tr>
          </table>
        </div>
        
        <!-- Футер с ссылкой -->
        <div style="
          margin-top: 20px;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <a href="https://mp.sarigma.ru" style="
            font-size: 10px; 
            color: #5a8fd4;
            text-decoration: none;
            opacity: 0.8;
          ">
            mp.sarigma.ru
          </a>
          <span style="
            font-size: 10px; 
            color: #555;
          ">
            Калькулятор КБЖУ © 2026
          </span>
        </div>
      </div>
    `;

    document.body.appendChild(exportContainer);

    try {
      const canvas = await html2canvas(exportContainer, {
        backgroundColor: "#0d0d0d",
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      const link = document.createElement("a");
      link.download = `рацион-${new Date()
        .toLocaleDateString("ru-RU")
        .replace(/\./g, "-")}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Ошибка при экспорте:", error);
    } finally {
      document.body.removeChild(exportContainer);
      setIsExporting(false);
    }
  };

  return (
    <button
      className="export-btn"
      onClick={handleExport}
      disabled={isExporting}
      title="Экспортировать рацион в PNG"
    >
      <ExportIcon />
      <span>{isExporting ? "Экспорт..." : "Экспорт PNG"}</span>
    </button>
  );
};

export default ExportButton;
