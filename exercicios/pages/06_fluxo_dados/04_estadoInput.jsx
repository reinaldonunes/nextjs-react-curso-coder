import { useState } from "react"

export default function formulario(){
    const [valor, setValor] = useState("inicial")

    function changeInput(){
        setValor(valor + "!")
    }
    
    return(
        <form action="javascript:;">
            <input type="text" value={valor} onChange={e => setValor(e.target.value)}/>
            <button onClick={changeInput}>Mudar</button>
        </form>
    )
}  