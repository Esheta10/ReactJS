import React from 'react'
import { useDispatch } from "react-redux"
import { addProduct, increment } from "./redux/action/productAction"
import Products from "./Products"

const App = () => {

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(
      {
        id: 1, 
        name: "Samsung Phone"
      }
    ));
  }
  const handleIncrement = () => {
    dispatch(increment());
  }
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-20">
        <button onClick={handleAddProduct} className="p-4 rounded-lg border-2 cursor-pointer">Add Product</button>
        <button onClick={handleIncrement} className="p-4 rounded-lg border-2 cursor-pointer">Increment</button>
        <Products/>
    </div>
  )
}

export default App
