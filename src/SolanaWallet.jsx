import { useState } from "react"
import bs58 from "bs58"
import { mnemonicToSeed } from "bip39"
import { derivePath } from "ed25519-hd-key"
import { Keypair } from "@solana/web3.js"
import nacl from "tweetnacl"


function SolanaWallet({ mnemonic }) {
  const [privkey, setPrivkey] = useState("")
  const [pubkey, setPubkey] = useState("")
  return (
    <>
      <button
        className="small-faded"
        onClick={async function () {
          if (!mnemonic) {
            alert("Mnemonic not found! Generate it first.")
            return
          }
          const seed = await mnemonicToSeed(mnemonic)
          const path = `m/44'/501'/0'/0'`
          const derivedSeed = derivePath(path, seed.toString("hex")).key
          const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
          const keypair = Keypair.fromSecretKey(secret)
          setPrivkey(bs58.encode(keypair.secretKey))
          setPubkey(keypair.publicKey.toBase58())
        }}
      >
        Generate Solana Wallet
      </button>
      {privkey ? (
        <button className="small-faded"
          onClick={function () {
            navigator.clipboard.writeText(privkey)
            alert("Private Key copied to clipboard")
          }}
        >
          Copy Private Key
        </button>
      ) : (
        <></>
      )}
      <br />
      {
        pubkey ? (
          <p>Wallet public key: {pubkey}</p>
        ): (<></>)
      }
    </>
  )
}

export default SolanaWallet;
