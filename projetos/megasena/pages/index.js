import { useEffect, useState } from 'react'
import NumeroDisplay from '../components/NumeroDisplay'
import { mega } from "../functions/mega"
import styles from '../styles/Home.module.css'

export default function Home() {
  const [numeros, setNumeros] = useState(mega())

  useEffect(() => {
    setNumeros(mega())
  }, [])

  function renderNumeros(){
    return numeros.map(
      numero => <NumeroDisplay key={numero} numero={numero} />
    )
  }

  return (
    <div className={styles.container}>
      <h1 style={{justifyContent: "center",display:"flex"}}>Números Mega-Sena</h1>
      <div style={{
        display: "flex",
        justifyContent: 'space-evenly',
        flexDirection: "row"
      }}>
        {renderNumeros()}
      </div>
      <div style={{
        display: "flex",
        justifyContent: 'space-evenly',
        flexDirection: "row"
      }}>
      <button
        onClick={() => setNumeros(mega())}
        style={{
          marginTop: "20px",
          backgroundColor: "#ddd",
          borderRadius: "6px",
          color: "#555",
          border: "0px",
          padding: "15px 45px",
          fontSize: "15px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >Gerar aposta</button>
      </div>
    </div>
  )
}
