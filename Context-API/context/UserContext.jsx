import React from 'react'
export const data = React.createContext();

function UserContext({children}) {

  const name="Esheta";

  return (
    <div>
       <data.Provider value={name}>
              <h1>{children}</h1>
        </data.Provider> 
    </div>
  )
}

export default UserContext
