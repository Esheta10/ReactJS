import React, {useEffect, useState} from 'react'
import axios from "axios"
import Loader from "./Loader"
import {useNavigate} from "react-router-dom"

const Products = () => {

  const [products, setProducts] = useState([]); // products ko set kar do
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true); // jab data aa raha hoga 
    const response = await axios("https://fakestoreapi.com/products")
    setProducts(response.data);
    setLoading(false); // jab data aa chuka hoga
  }

  useEffect(()=>{
    fetchData();
  },[])

   if(loading)
      return <Loader/>

  return (
    <div className="text-white text-2xl grid grid-cols-5 max-[1200px]:grid-cols-4  max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 gap-7 m-10"
       >
    
      {
        products.map((product) => {
          return (
            <div className="bg-gray-800 rounded-lg flex flex-col items-center justify-center p-4 group cursor-pointer" key={product.id}
             onClick={()=>navigate(`/products/${product.id}`)}>

              {/* Product image */}
              <img src={product.image} alt="" className="h-50 w-60 object-contain group-hover:scale-90 transition-all duration-200"/>

              {/* Product description */}
             <div>
                {/* Product description */}
                 <h1 className="text-xl items-center py-6 line-clamp-2 group-hover:text-blue-400">{product.title}</h1>
                 
                 {/* rating and count */}
                 <div className="flex gap-4 mt-4">
                    <p className="bg-green-600 py-1 px-2 rounded-sm w-fit text-lg">{product.rating.rate}⭐</p>
                    <p className="text-xl text-white/70 font-small py-1">{product.rating.count} left</p>
                 </div>

                  {/* Product price */}
                  <p className="text-xl font-medium py-2 text-white/70">{product.price}$</p>

             </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products
