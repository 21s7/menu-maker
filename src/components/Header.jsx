// src/components/Header.jsx
import React from "react";

const AppsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const ExternalLink = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo-link">
          Калькулятор КБЖУ
          <img src="/logo.png" alt="Логотип" className="header__logo-img" />
        </a>

        <div className="header__right">
          <a
            href="https://sarigma.ru"
            className="header__apps-btn"
            target="_blank"
            rel="noopener noreferrer"
            title="Все приложения Sarigma"
          >
            <AppsIcon />
            <span>Другие наши приложения</span>
            <ExternalLink />
          </a>

          <div className="header__copy">
            Copyright © 2026 created by yurizakhv
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
