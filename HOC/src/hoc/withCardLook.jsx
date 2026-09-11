import React from 'react'

const withCardLook = (WrappedComponent) => {
  return () => {
    return (
        <div className="bg-gray-700 p-10 rounded-2xl w-100 m-auto mt-20">
            This is nested Component
            <WrappedComponent/>
        </div>
    )
  }
}

export default withCardLook
