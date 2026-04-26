// src/components/SearchInput.jsx
import React from "react";

const SearchInput = ({ query, setQuery, results, onSelect, containerRef }) => {
  return (
    <div className="product__search-container" ref={containerRef}>
      <input
        type="text"
        className="product__search"
        placeholder="Поиск продукта..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <div className="product__search-results">
          {results.map((product) => (
            <div
              key={product}
              className="search-result-item"
              onClick={() => onSelect(product)}
            >
              {product}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
