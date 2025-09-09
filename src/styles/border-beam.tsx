"use client";

import React from "react";

export const BorderBeam = () => {
  return (
    <div className="absolute inset-0 animate-pulse">
      <div className="absolute inset-0 rounded-full border-2 border-blue-500 blur-md opacity-50"></div>
      <div className="absolute inset-0 rounded-full border-2 border-blue-400 blur-sm opacity-75"></div>
      <div className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-100"></div>
    </div>
  );
};