import React from 'react'
import Wrapper from './Wrapper'

const Category = () => {

  const categories = ["Business", "Entertainment", "General", "Health", "Sciences", "Sports", "Technology"]
  return (
    <Wrapper>
         <div className="flex flex-row flex-wrap items-center justify-center gap-5">

            {
                categories.map((category) => (
                        <div>
                          <button type="submit" className="btn bg-purple-700 mt-5">{category}</button>
                        </div>
                ))
            }
         </div>
    </Wrapper>
  )
}

export default Category
