import { продукты } from "./компоненты/info.js";

const productSelect = document.getElementById("productSelect");
const gramsInput = document.getElementById("gramsInput");
const caloriesField = document.getElementById("calories");
const proteinsField = document.getElementById("proteins");
const fatsField = document.getElementById("fats");
const carbsField = document.getElementById("carbs");

// переменные диограммы
let myPieChart = null;

export function updateChart(proteins, fats, carbs) {
  const ctx = document.getElementById("myPieChart");
  if (!ctx) {
    console.error("Элемент canvas для диаграммы не найден.");
    return;
  }

  const total = proteins + fats + carbs;
  const percProteins = total ? (proteins / total) * 100 : 0;
  const percFats = total ? (fats / total) * 100 : 0;
  const percCarbs = total ? (carbs / total) * 100 : 0;

  if (myPieChart) {
    myPieChart.destroy();
  }

  myPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Белки", "Жиры", "Углеводы"],
      datasets: [
        {
          data: [percProteins, percFats, percCarbs],
          backgroundColor: ["black", "gray", "silver"],
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
              const label = context.label || "";
              const value = context.raw || 0;
              return `${label}: ${value.toFixed(1)}%`;
            },
          },
        },
      },
    },
  });
}

export { продукты };

Object.keys(продукты).forEach((product) => {
  const option = document.createElement("option");
  option.value = product;
  option.textContent = product;
  productSelect.appendChild(option);
});
