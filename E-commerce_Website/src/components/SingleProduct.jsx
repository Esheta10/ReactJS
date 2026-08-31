import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import Loader from "./Loader"
import axios from 'axios'

const SingleProduct = () => {

  const {id} = useParams(); 
  const [product, setProduct] = useState([]); // ek single product ko set kar do
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true); // jab data aa raha hoga 
    const response = await axios(`https://fakestoreapi.com/products/${id}`)
    setProduct(response.data);
    setLoading(false); // jab data aa chuka hoga
  }

  useEffect(()=>{
    fetchData();
  },[])

   if(loading)
      return <Loader/>
  
  return (
   <div className="text-white text-2xl m-10"
       >
         
            <div className="bg-gray-900 rounded-lg flex flex-col items-center justify-center p-4 group cursor-pointer" key={product.id}>

              {/* Product image */}
              <img src={product?.image} alt="" className="h-80 w-60 object-contain"/>

              {/* Product description */}
             <div className="flex flex-col items-center justify-center">
                {/* Product description */}
                 <h1 className="text-4xl font-medium mt-10 items-center">{product?.title}</h1>
                 
                 {/* rating and count */}
                 <div className="flex gap-4 mt-4">
                    <p className="bg-green-600 py-1 px-2 rounded-sm w-fit text-xl">{product?.rating?.rate}⭐</p>
                    <p className="text-xl text-white/70 font-small py-1">{product?.rating?.count} left</p>
                 </div>

                  {/* Product price */}
                  <p className="text-3xl font-medium py-2 text-white/70">{product?.price}$</p>

                  {/* Product description */}
                 
                 <p className="text-2xl p-8">{product.description}</p>
             </div>
            </div>
          
        
    </div>
  )
}

export default SingleProduct
