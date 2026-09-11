import React from "react";

const withBorder = (WrappedComponent) => {
  return () => {
    return <div className="border-4 border-black rounded-md mt-10 m-auto p-10 w-200">
        <WrappedComponent/>
    </div>;
  };
};

export default withBorder;


