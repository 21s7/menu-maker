// src/hooks/useHelpMessage.js
import { useState, useCallback } from "react";

export const useHelpMessage = () => {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const showMessage = useCallback((text) => {
    setMessage(text);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  return {
    message,
    show,
    showMessage,
  };
};
