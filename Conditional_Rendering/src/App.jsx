import React, {useState} from 'react'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';


const App = () => {

  // Using if-statement
  // const login = true;

  // if(login){
  //      return (
  //         <div>
  //           Welcome! You are logged in.
  //         </div>
  //    )
  // }

  // return (
  //   <div>
  //     Please login!
  //   </div>
  // )


  // Using ternary-operator

  // const isLoggedIn = true;

  // return (
  //  <div>
  //     {
  //         isLoggedIn ? <h1>Welcome back! You are logged in.</h1> : <h1>Please login</h1>
  //     }
  //  </div>
  // )


  // Using & operator
  // const hasMessage = "Hello!"

  // return (
  //   <div>
  //    { 
  //       hasMessage && <h1>{hasMessage}</h1>
  //    }
  //   </div>
  // )

  // Conditional Rendering with variables
  // let option = "a";
  // let content = "";

  // if(option === "a"){
  //   content = <ComponentA/>
  // }
  // else if(option === "b"){
  //   content = <ComponentB/>
  // }else if(option === "c"){
  //   content = <ComponentC/>
  // }else{
  //   content = "Other Component"
  // }

  // return (
  //   <div>
  //     {content}
  //   </div>
  // )

  // Conditional CSS or className

  // const color = "red"

  // return (
  //   <div>
  //     <button className={`${color === "red" ? "bg-red-400" :" bg-blue-400"}`}>Submit</button>
  //   </div>
  // )

  // Conditional Rendering with State
  // const [toggle, setToggle] = useState(false);

  // return (
  //   <div>
  //     {
  //       toggle 
  //       ? 
  //           (
  //             <h1>Toggle pe click hua - true hai abhi</h1>
  //           )
  //       :
  //           (
  //               <h1>Toggle pe click karo - false hai abhi</h1>
  //           )
  //     }

  //     <button onClick={()=>{setToggle(!toggle)}} className="bg-blue-400 p-4 rounded-lg border-2">Toggle</button>
  //   </div>
  // )

  // Conditional Components
  // const option = "b"
  // const Component = option === "a" ? ComponentA : ComponentB;

  // return (
  //   <div>
  //     <Component/>
  //   </div>
  // )

  // Switch Statements

  // const option = "a";

  // switch(option){
  //   case "a": return <ComponentA/>
  //   case "b": return <ComponentB/>
  //   case "c": return <ComponentC/>
  //   default: return null;
  // }

  // Using mapping(object lookup)

  const statusOption = "success";
  const status = {
      "error" : "Error aa gaya!",
      "success" : "Successful!",
      "loading" : "Loading..."
  }

  console.log(status);

  return (
    <div>
      {status[statusOption]}
    </div>
  )
}

export default App
