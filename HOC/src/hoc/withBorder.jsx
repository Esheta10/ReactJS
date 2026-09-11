import React from "react";

const withBorder = (WrappedComponent) => {
  return (props) => {
    return <div className="border-4 border-black rounded-md mt-10 m-auto p-10 w-200">
        <WrappedComponent {...props} />
    </div>;
  };
};

export default withBorder;


