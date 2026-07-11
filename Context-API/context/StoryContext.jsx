import React from 'react'
export const data = React.createContext()

function StoryContext({children}) {

    const subject = "Soul";
    const Plotline =" It's an amazing story about arrival fallacy and delaying happiness in life just to achieve your goal.";
  return (
    <div>
        <data.Provider value={{subject, Plotline}}>
              {children}
        </data.Provider>
    </div>
  )
}

export default StoryContext
