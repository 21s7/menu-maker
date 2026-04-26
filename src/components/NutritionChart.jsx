// src/components/NutritionChart.jsx
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const NutritionChart = ({ proteinsPercent, fatsPercent, carbsPercent }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: "pie",
        data: {
          labels: ["Белки", "Жиры", "Углеводы"],
          datasets: [
            {
              data: [proteinsPercent, fatsPercent, carbsPercent],
              backgroundColor: ["#2c3e50", "#7f8c8d", "#bdc3c7"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.label}: ${context.raw.toFixed(1)}%`;
                },
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [proteinsPercent, fatsPercent, carbsPercent]);

  return (
    <div className="diagram">
      <canvas ref={chartRef} className="diagram__canvas"></canvas>
    </div>
  );
};

export default NutritionChart;
