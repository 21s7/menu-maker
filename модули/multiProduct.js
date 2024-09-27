import { продукты, updateChart } from "./product.js"; // Убедитесь, что путь правильный

// Переменные для работы с DOM
const productSelect = document.getElementById("productSelect");
const gramsInput = document.getElementById("gramsInput");
const addProductButton = document.getElementById("addProductButton");
const removeProductButton = document.getElementById("removeProductButton");
const productsContainer = document.getElementById("productsContainer");
const caloriesField = document.getElementById("calories");
const proteinsField = document.getElementById("proteins");
const fatsField = document.getElementById("fats");
const carbsField = document.getElementById("carbs");
const helpField = document.querySelector(".help"); // Ссылка на div для сообщений

let selectedProducts = []; // Массив для хранения выбранных продуктов

// Функция для отображения сообщений в div .help
function showMessage(message) {
  helpField.textContent = message;
  helpField.style.display = "block"; // Показываем сообщение
  helpField.classList.remove("fade-out"); // Убираем класс, если он есть
  setTimeout(() => {
    helpField.classList.add("fade-out"); // Добавляем класс для анимации
    setTimeout(() => {
      helpField.style.display = "none"; // Скрываем элемент после анимации
    }, 500); // Скрываем через 0.5 секунды (длительность анимации)
  }, 3000); // Через 3 секунды начинаем анимацию
}

// Функция для добавления продукта
function addProduct() {
  const selectedProduct = productSelect.value;
  const grams = parseFloat(gramsInput.value);

  if (!selectedProduct || isNaN(grams) || grams <= 0) {
    showMessage("Пожалуйста, выберите продукт и введите количество грамм.");
    return;
  }

  const productData = продукты[selectedProduct];

  const calories = (productData.калорийность || productData.ккал || 0) * grams;
  const proteins = (productData.белки || 0) * grams;
  const fats = (productData.жиры || 0) * grams;
  const carbs = (productData.углеводы || 0) * grams;

  const productInfo = {
    name: selectedProduct,
    grams,
    calories,
    proteins,
    fats,
    carbs,
  };

  selectedProducts.push(productInfo);
  displaySelectedProduct(productInfo);
  updateTotalValues();
}

// Функция для отображения выбранного продукта
function displaySelectedProduct(product) {
  const productElement = document.createElement("div");
  productElement.className = "addedProduct";
  productElement.innerHTML = `
    <strong>${product.name}</strong>: 
    ${product.grams} г, 
    ${product.calories.toFixed(2)} ккал, 
    Белки: ${product.proteins.toFixed(2)}, 
    Жиры: ${product.fats.toFixed(2)}, 
    Углеводы: ${product.carbs.toFixed(2)}
  `;
  productsContainer.appendChild(productElement);
}

// Функция для обновления общих значений КБЖУ
function updateTotalValues() {
  let totalCalories = 0,
    totalProteins = 0,
    totalFats = 0,
    totalCarbs = 0;

  selectedProducts.forEach((product) => {
    totalCalories += product.calories;
    totalProteins += product.proteins;
    totalFats += product.fats;
    totalCarbs += product.carbs;
  });

  caloriesField.textContent = totalCalories.toFixed(2);
  proteinsField.textContent = totalProteins.toFixed(2);
  fatsField.textContent = totalFats.toFixed(2);
  carbsField.textContent = totalCarbs.toFixed(2);

  // Обновляем диаграмму с новыми значениями
  updateChart(totalProteins, totalFats, totalCarbs);
}

// Функция для удаления последнего добавленного продукта
function removeLastProduct() {
  if (selectedProducts.length === 0) {
    showMessage("Нет добавленных продуктов для удаления.");
    return;
  }

  // Удаляем последний продукт из массива
  selectedProducts.pop();

  // Обновляем отображение добавленных продуктов
  productsContainer.innerHTML = ""; // Очистить контейнер
  selectedProducts.forEach(displaySelectedProduct); // Пересоздать элементы

  // Обновляем общие значения
  updateTotalValues();
}

// События для добавления и удаления продукта
addProductButton.addEventListener("click", addProduct);
removeProductButton.addEventListener("click", removeLastProduct);
