import { useState } from "react";

export default function mouse(props){
    /* método mais verborroso 
    const arrayX = useState(0)
    let valX = arrayX[0]
    const alterarX = arrayX[1]

    const arrayY = useState(0)
    let valY = arrayY[0]
    const alterarY = arrayY[1] 
    */
    
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function quandoMover(ev){
        setX(ev.clientX)
        setY(ev.clientY)
    }
    return(
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}