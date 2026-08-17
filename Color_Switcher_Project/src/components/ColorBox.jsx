import React from "react";

const ColorBox = ({ color }) => {
  return (
    <div>
      <div
        className="w-[300px] h-[400px] bg-gray-400 flex items-center justify-center text-2xl border-3 rounded-md font-medium"
        style={{
          backgroundColor: color,
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default ColorBox;
