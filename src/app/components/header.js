"use client";

import React from "react";
import Button from "./button";

export default function Header({ addNote, handleColorChange, colors }) {
  return (
    <div className="fixed top-0 bottom-0 left-0 px-2 md:px-8 lg:px-14 border-r-[1px] flex flex-col items-center justify-center gap-4 md:gap-10">
      <button
        onClick={addNote}
        className="h-[10px] w-[10px] md:h-[20px] md:w-[20px] bg-black text-white p-6 md:p-8 flex justify-center items-center rounded-full"
      >
        <i class="fa-solid fa-plus"></i>
      </button>
      {colors?.map((color, index) => {
        return (
          <Button
            key={index}
            color={color}
            handleColorChange={handleColorChange}
          />
        );
      })}
    </div>
  );
}
