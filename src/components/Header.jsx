// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo-link">
          Калькулятор КБЖУ
          <img src="/logo.png" alt="Логотип" className="header__logo-img" />
        </a>
        <div className="header__copy">
          Copyright © 2026 created by yurizakhv
        </div>
      </div>
    </header>
  );
};

export default Header;
