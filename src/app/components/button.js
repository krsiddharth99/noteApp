import React from "react";

export default function Button({ color, handleColorChange }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`h-[10px] w-[10px] p-4 flex justify-center items-center rounded-full`}
      onClick={() => handleColorChange(color)}
    >
    </button>
  );
}
