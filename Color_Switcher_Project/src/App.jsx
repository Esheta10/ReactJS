import React, {useState} from 'react'
import Button from './components/Button'
import ColorBox from './components/ColorBox';

const App = () => {

  const colors = ["pink", "blue", "red", "orange", "purple", "green"];

  const [selectedColor, setSelectedColor] = useState("transparent");
  return (
    <div>
      <h1 className="bg-gray-400 text-4xl flex items-center justify-center p-4">Color Switcher 🎨</h1>
      <div className="flex flex-row flex-wrap gap-4 justify-center ">    
        {
          colors.map((color, index) => (
            <Button key={index} color={color} setSelectedColor={setSelectedColor}>
              {color}
            </Button>
          ))
        }
      </div>
      <div className="flex items-center justify-center">
         <ColorBox color={selectedColor}/>
      </div>
    </div>
  )
}

export default App
