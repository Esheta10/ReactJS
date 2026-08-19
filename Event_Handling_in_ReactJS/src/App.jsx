import React from "react";

const App = () => {
  const handleClick = () => {
    alert("Clicked!");
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleData = (name) => {
    console.log(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents default form relaod
    console.log("Form submitted")
  }
  const parentClick = () =>{
    console.log("Parent pe click hua");
  }

  const childClick = (e) => {
    e.stopPropagation();
    console.log("Child pe click hua");
  }
  return (
    <div>
      <button
        className="bg-green-200 p-4 border-2 rounded-xl m-auto cursor-pointer"
        onClick={handleClick}
      >
        Submit
      </button>
      <input
        type="text"
        className="px-10 py-3 border-2 rounded-md"
        placeholder="Enter your text..."
        onChange={handleChange}
      />
      <button
        className="bg-red-200 p-4 border-2 rounded-xl m-auto cursor-pointer"
        onClick={() => handleData("Esheta")}
      >
        Submit
      </button>
       {/* runs on click */}
      <form onSubmit={handleSubmit}>
        <button className="bg-amber-200 p-4 border-2 rounded-xl m-auto cursor-pointer">Submit</button>
      </form>

      <div onClick={parentClick} className="bg-blue-400 p-8 border-2">Parent was Clicked
        <button onClick={childClick} className="bg-amber-400 p-4 border-2">Child was Clicked</button>
      </div>
    </div>
  );
};

export default App;
