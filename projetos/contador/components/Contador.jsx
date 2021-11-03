import { useState } from "react"

export default function Contador(){
    // estilos
    const container = {
        margin: "0 auto",
        width: "100%",
        maxWidth: "300px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        spaceBetween: "justify-content",
        padding: "30px",
        borderRadius: "8px",
        backgroundColor: "white"
    }
    const button = {
        border: "0px",
        backgroundColor: "#333",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "20px",
        padding: "8px 15px",
        borderRadius: "6px",
        minWidth: "50px",
        cursor: "pointer",
        marginBottom: "5px"
    }

    const screen ={
        border: "1px solid #ddd",
        height: "40px",
        width: "150px",
        display: "flex",
        borderRadius: "6px",
        width: "100%",
        marginBottom: "15px",
        color: "#555",
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "22px"

    }
    // constantes e variáveis
    const [cont, setCont] = useState(0)
    const add = () => setCont(cont+1)
    const min = () => setCont(cont - 1)
    
    /* outra forma 
        function addCont(e){
            setCont(cont+1)
        }
        function minCont(e){
            setCont(cont-1)
        }
    */

    // jsx
    return(
        <div style={container}>
            <div style={screen}>{cont}</div>
            <button style={button} onClick={add}>+</button>
            <button style={button} onClick={min}>-</button>
        </div>
    )
}