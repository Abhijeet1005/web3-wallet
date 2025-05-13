import { useState } from 'react'
import { generateMnemonic } from "bip39";
import './App.css'

function App() {
    const [mnemonic, setMnemonic] = useState("");
  return (
    <>
    <button className='card' onClick={async function(){
      const mn = await generateMnemonic();
      setMnemonic(mn)
      console.log(mnemonic);
    }}>Click to generate seed phrase</button>

    <p className="read-the-docs">{mnemonic}
      <br />
    <button className='small-faded'
      onClick={() => {
        navigator.clipboard.writeText(mnemonic);
        alert("Copied to clipboard!");
      }}
      >
        Copy
    </button>
    </p>
    </>
  )
}

export default App
