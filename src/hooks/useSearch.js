// src/hooks/useSearch.js
import { useState, useEffect, useRef } from "react";
import { searchProducts } from "../data/products";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    setResults(searchProducts(query));
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setResults([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelect = (product) => {
    setSelected(product);
    setQuery(product);
    setResults([]);
  };

  const handleClear = () => {
    setQuery("");
    setSelected("");
    setResults([]);
  };

  return {
    query,
    setQuery,
    results,
    selected,
    handleSelect,
    handleClear,
    containerRef,
  };
};
