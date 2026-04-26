// src/utils/calculations.js

export const calculateTotals = (products) => {
  let totalCalories = 0;
  let totalProteins = 0;
  let totalFats = 0;
  let totalCarbs = 0;

  products.forEach((p) => {
    totalCalories += p.calories;
    totalProteins += p.proteins;
    totalFats += p.fats;
    totalCarbs += p.carbs;
  });

  const kcalFromProteins = totalProteins * 4;
  const kcalFromFats = totalFats * 9;
  const kcalFromCarbs = totalCarbs * 4;
  const kcalSum = kcalFromProteins + kcalFromFats + kcalFromCarbs;

  const proteinsPercent = kcalSum ? (kcalFromProteins / kcalSum) * 100 : 0;
  const fatsPercent = kcalSum ? (kcalFromFats / kcalSum) * 100 : 0;
  const carbsPercent = kcalSum ? (kcalFromCarbs / kcalSum) * 100 : 0;

  return {
    calories: totalCalories,
    proteins: totalProteins,
    fats: totalFats,
    carbs: totalCarbs,
    proteinsPercent,
    fatsPercent,
    carbsPercent,
  };
};
