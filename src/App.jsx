import { useState } from 'react'
import { generateMnemonic } from "bip39";
import './App.css'
import SolanaWallet from './SolanaWallet';

function App() {
    const [mnemonic, setMnemonic] = useState("");

  return (
    <>
    <button className='card' onClick={async function(){
      const mn = await generateMnemonic();
      setMnemonic(mn)
    }}>Click to generate seed phrase</button>

    <p className="read-the-docs blur-text">{mnemonic}  </p>
      <br />
    <button className='small-faded'
      onClick={() => {
        navigator.clipboard.writeText(mnemonic);
        alert("Copied to clipboard!");
      }}
      >
        Copy Mnemonic to clipboard
    </button>
    <SolanaWallet mnemonic={mnemonic} />
    </>
  )
}

export default App
