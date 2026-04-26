// src/hooks/useDismissibleWarning.js
import { useState, useEffect } from "react";

const STORAGE_KEY = "dismissed_warnings";

export const useDismissibleWarning = (warningId) => {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Загружаем состояние при монтировании
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const dismissedWarnings = JSON.parse(dismissed);
      setIsDismissed(dismissedWarnings.includes(warningId));
    }
  }, [warningId]);

  const dismiss = () => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    let dismissedWarnings = dismissed ? JSON.parse(dismissed) : [];

    if (!dismissedWarnings.includes(warningId)) {
      dismissedWarnings.push(warningId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dismissedWarnings));
    }

    setIsDismissed(true);
  };

  const reset = () => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      let dismissedWarnings = JSON.parse(dismissed);
      dismissedWarnings = dismissedWarnings.filter((id) => id !== warningId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dismissedWarnings));
    }
    setIsDismissed(false);
  };

  return { isDismissed, dismiss, reset };
};
