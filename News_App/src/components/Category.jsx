import React from 'react'
import Wrapper from './Wrapper'

const Category = () => {

  const categories = ["Business", "Entertainment", "General", "Health", "Sciences", "Sports", "Technology"]
  return (
    <div className="bg-gray-950 sticky top-15 z-8 p-2">
        <Wrapper>
         <div className="flex flex-row flex-wrap items-center justify-center gap-5">

            {
                categories.map((category) => (
                        <div key={category}>
                          <button type="submit" className="btn bg-purple-800 mt-5">{category}</button>
                        </div>
                ))
            }
         </div>
    </Wrapper>
    </div>
    
  )
}

export default Category
