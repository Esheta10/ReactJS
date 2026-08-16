import React from 'react'

const Header = (props) => {

  console.log(props);

    function changeState(){
        props.func("Child ka data hai ye");
    }
  return (
    <div>
      <div  onClick={changeState} className="bg-amber-400">Header</div>
    </div>
  )
}

export default Header
