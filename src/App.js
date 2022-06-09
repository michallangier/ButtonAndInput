import { useState } from 'react'
import './App.css';
import Button from './components/Button'
import Input from './components/Input'

function App() {
  const [inpInput, setInpInput] = useState('')
  const [btnColor, setBtnColor] = useState('')

  function btn() {
    setBtnColor(inpInput)
    return btnColor;
  }

  function inp(messageFromInput) {
    setInpInput(messageFromInput)
  }

  return (
    <div className="App">
      <div>
        <Button btn={btn} />
        <Input inp={inp} />
      </div>
    </div>
  );
}

export default App;
