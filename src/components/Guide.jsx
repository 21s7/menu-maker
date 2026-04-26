// src/components/Guide.jsx
import React from "react";

const Guide = () => {
  return (
    <div className="guide">
      <h2>Как пользоваться:</h2>
      <ul>
        <li>Введите название продукта в поле поиска</li>
        <li>Выберите продукт из выпадающего списка</li>
        <li>Введите вес продукта в граммах</li>
        <li>Нажмите "Добавить продукт" или Enter</li>
        <li>Продукт появится в списке выше</li>
        <li>Для удаления последнего продукта нажмите "Удалить последний"</li>
      </ul>
    </div>
  );
};

export default Guide;
