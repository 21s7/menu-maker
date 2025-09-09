import { продукты, updateChart } from "./product.js";

const productSelect = document.getElementById("productSelect");
const gramsInput = document.getElementById("gramsInput");
const addProductButton = document.getElementById("addProductButton");
const removeProductButton = document.getElementById("removeProductButton");
const productsContainer = document.getElementById("productsContainer");
const caloriesField = document.getElementById("calories");
const proteinsField = document.getElementById("proteins");
const fatsField = document.getElementById("fats");
const carbsField = document.getElementById("carbs");
const helpField = document.querySelector(".help");

let selectedProducts = [];

function showMessage(message) {
  helpField.textContent = message;
  helpField.style.display = "block";
  helpField.classList.remove("fade-out");
  setTimeout(() => {
    helpField.classList.add("fade-out");
    setTimeout(() => {
      helpField.style.display = "none";
    }, 500);
  }, 3000);
}

function addProduct() {
  const selectedProduct = productSelect.value;
  const grams = parseFloat(gramsInput.value);

  if (!selectedProduct || isNaN(grams) || grams <= 0) {
    showMessage("Пожалуйста, выберите продукт и введите количество грамм.");
    return;
  }

  const productData = продукты[selectedProduct];

  const calories = (productData.ккал || productData.калорийность || 0) * grams;
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
  renderProducts();
  updateTotalValues();
}

function renderProducts() {
  productsContainer.innerHTML = "";
  selectedProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "products-list__item"; // BEM
    productElement.innerHTML = `
      <strong>${product.name}</strong>: 
      ${product.grams} г, 
      ${product.calories.toFixed(2)} ккал, 
      Белки: ${product.proteins.toFixed(2)}, 
      Жиры: ${product.fats.toFixed(2)}, 
      Углеводы: ${product.carbs.toFixed(2)}
    `;
    productsContainer.appendChild(productElement);
  });
}

function updateTotalValues() {
  let totalCalories = 0,
    totalProteins = 0,
    totalFats = 0,
    totalCarbs = 0;

  selectedProducts.forEach((p) => {
    totalCalories += p.calories;
    totalProteins += p.proteins;
    totalFats += p.fats;
    totalCarbs += p.carbs;
  });

  caloriesField.textContent = totalCalories.toFixed(2);
  proteinsField.textContent = totalProteins.toFixed(2);
  fatsField.textContent = totalFats.toFixed(2);
  carbsField.textContent = totalCarbs.toFixed(2);

  updateChart(totalProteins, totalFats, totalCarbs);
}

function removeLastProduct() {
  if (selectedProducts.length === 0) {
    showMessage("Нет добавленных продуктов для удаления.");
    return;
  }
  selectedProducts.pop();
  renderProducts();
  updateTotalValues();
}

addProductButton.addEventListener("click", addProduct);
removeProductButton.addEventListener("click", removeLastProduct);
