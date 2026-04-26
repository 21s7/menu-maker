// src/components/HelpMessage.jsx
import React from "react";

const HelpMessage = ({ show, message }) => {
  if (!show) return null;
  return <div className="help">{message}</div>;
};

export default HelpMessage;
