import React from 'react'
import data from "./data.json"
const App = () => {
  return (
    <div>
        {/* Card */}
        <div className="flex w-full flex-col gap-6 bg-black/70 p-8">
          {
            data.map((item, index) => {
              return (
               <div key={index} className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 rounded-md bg-black/40 p-6">
                    {/* image */}
                    <div className="w-1/4 h-[300px] flex items-center justify-center">
                      <img src={item.image} alt="phone image" className="rounded-lg"/>
                    </div>
                    {/* details */}
                    <div className="flex-1">
                      <h1 className="text-xl">{item.title}</h1>
                      <p>⭐ {item.rating} | {item.reviews}</p>
                      <ul className="my-3">
                        {
                          item.details.map((info, index) => (
                            <li key={index} className="list-disc ml-6">
                              {info}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                    {/* pricing */}
                    <div className="flex flex-col items-start">
                      <h2 className="text-xl font-bold">{item.price}</h2>
                      <h2 className="text-md mb-2 line-through">{item.originalPrice}</h2>
                      <div className="flex flex-col">
                        <p className="!text-green-500">{item.offers.bankOffer}</p>
                        <p className="!text-amber-500">{item.offers.exchangeOffer}</p>
                      </div>
                    </div>
               </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default App
