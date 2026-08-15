import React from "react";
import Card from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import Layout from "./components/Layout";
import "./App.css";
const App = () => {
  const items = ["Smart Phone", "TV", "Watch", "Microwave"];

  const handleSubmit = () => {
    console.log("Data submitted");
  };
  const handleReset = () => {
    console.log("Data reset");
  };
  return (
    // <div className="layout">
    //   <Card name="Esheta Jaiswal" />
    //   <Card name="Riya Soni" />
    //   <Card name="Ritocheta Biswas" />
    //   <Card name="Sangjukta Sarkar" />
    //   <List items={items}/>
    // </div>
    <div>
      {/* <Button name={"Submit"} func={handleSubmit}></Button>
      <Button name={"Reset"} func={handleReset}></Button> */}
      <Layout>
        <h1>Let's learn Props as Children</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
          quis.
        </p>
      </Layout>
    </div>
  );
};

export default App;
