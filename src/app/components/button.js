"use client";

import React from "react";

export default function Button({ color, handleColorChange }) {
  return (
    <button
      onClick={() => handleColorChange(color)}
      className={`h-[10px] w-[10px] bg-[${color}] text-black p-4 flex justify-center items-center rounded-full`}
    ></button>
  );
}
