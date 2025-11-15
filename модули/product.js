import { продукты } from "./компоненты/info.js";

const productSearch = document.getElementById("productSearch");
const searchResults = document.getElementById("searchResults");
const gramsInput = document.getElementById("gramsInput");
const caloriesField = document.getElementById("calories");
const proteinsField = document.getElementById("proteins");
const fatsField = document.getElementById("fats");
const carbsField = document.getElementById("carbs");

let myPieChart = null;
let selectedProduct = "";

export function updateChart(proteins, fats, carbs) {
  const ctx = document.getElementById("myPieChart");
  if (!ctx) return console.error("Элемент canvas для диаграммы не найден.");

  const total = proteins + fats + carbs;
  const percProteins = total ? (proteins / total) * 100 : 0;
  const percFats = total ? (fats / total) * 100 : 0;
  const percCarbs = total ? (carbs / total) * 100 : 0;

  if (myPieChart) myPieChart.destroy();

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
              return `${context.label}: ${context.raw.toFixed(1)}%`;
            },
          },
        },
      },
    },
  });
}

// Функция для поиска продуктов
function searchProducts(query) {
  if (!query) {
    searchResults.innerHTML = "";
    searchResults.style.display = "none";
    return;
  }

  const filteredProducts = Object.keys(продукты).filter((product) =>
    product.toLowerCase().includes(query.toLowerCase())
  );

  displaySearchResults(filteredProducts);
}

// Функция для отображения результатов поиска
function displaySearchResults(products) {
  searchResults.innerHTML = "";

  if (products.length === 0) {
    searchResults.style.display = "none";
    return;
  }

  products.forEach((product) => {
    const resultItem = document.createElement("div");
    resultItem.className = "search-result-item";
    resultItem.textContent = product;
    resultItem.addEventListener("click", () => {
      selectProduct(product);
    });
    searchResults.appendChild(resultItem);
  });

  searchResults.style.display = "block";
}

// Функция для выбора продукта
function selectProduct(product) {
  selectedProduct = product;
  productSearch.value = product;
  searchResults.style.display = "none";
  gramsInput.focus();
}

// Обработчики событий
productSearch.addEventListener("input", (e) => {
  searchProducts(e.target.value);
});

productSearch.addEventListener("focus", () => {
  if (productSearch.value) {
    searchProducts(productSearch.value);
  }
});

// Скрываем результаты при клике вне поля поиска
document.addEventListener("click", (e) => {
  if (!e.target.closest(".product__search-container")) {
    searchResults.style.display = "none";
  }
});

// Экспортируем функции и переменные для использования в multiProduct.js
export { продукты, selectedProduct, selectProduct };
