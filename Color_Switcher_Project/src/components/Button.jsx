import React from "react";

const Button = ({ children, color , setSelectedColor}) => {

const setColor = () => {
    setSelectedColor(color);
}
  return (
    <div>
      <button onClick={setColor}
        className="bg-gray-200 rounded-md outline-solid text-2xl px-4 py-2 my-10 cursor-pointer"
        style={{
          backgroundColor: color,
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
