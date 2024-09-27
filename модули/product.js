import { продукты } from "./компоненты/info.js";

const productSelect = document.getElementById("productSelect");
const gramsInput = document.getElementById("gramsInput");
const caloriesField = document.getElementById("calories");
const proteinsField = document.getElementById("proteins");
const fatsField = document.getElementById("fats");
const carbsField = document.getElementById("carbs");

// Переменная для хранения диаграммы
let myPieChart = null;

// Функция для обновления диаграммы
export function updateChart(proteins, fats, carbs) {
  const ctx = document.getElementById("myPieChart");
  if (!ctx) {
    console.error("Элемент canvas для диаграммы не найден.");
    return;
  }

  // Удаляем старую диаграмму, если она уже существует
  if (myPieChart) {
    myPieChart.destroy(); // Удаляем предыдущий график перед созданием нового
  }

  // Создаем новую диаграмму
  myPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Белки", "Жиры", "Углеводы"],
      datasets: [
        {
          data: [proteins, fats, carbs],
          backgroundColor: ["black", "gray", "silver"], // Цвета для сегментов
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // Чтобы график занимал всё доступное пространство
    },
  });
}

// Экспортируем продукты
export { продукты };

// Подсасывает инфу из info и сует в опции
Object.keys(продукты).forEach((product) => {
  const option = document.createElement("option");
  option.value = product;
  option.textContent = product;
  productSelect.appendChild(option);
});
