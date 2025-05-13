import { useState } from 'react'
import { generateMnemonic } from "bip39";
import './App.css'

function App() {
    const [mnemonic, setMnemonic] = useState("");
  return (
    <>
    <button onClick={async function(){
      const mn = await generateMnemonic();
      setMnemonic(mn)
      console.log(mn)
    }}>Click to generate seed phrase</button>
    </>
  )
}

export default App
