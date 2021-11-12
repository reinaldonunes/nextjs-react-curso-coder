import { useState } from "react"

export default function form(){
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [users,setUsers] = useState([])

    async function saveUser(){
        await fetch('../api/form',{
            method: 'POST',
            body: JSON.stringify({
                nome, idade
            })
        })

        const resp = await fetch('../api/form')
        const users = await resp.json()
        setUsers(users)
    }

    function renderUsers(){
        return users.map((user, i) => {
            return <li key={i}>O {user.nome} tem {user.idade}</li>
        })
    }

    return(
        <div>
            <h1>Integração com API #02</h1>
            <input type="text" value={nome}
                onChange={e => setNome(e.target.value)} />
            <input type="number" value={idade}
                onChange={e => setIdade(+e.target.value)} />
            <button onClick={saveUser}>Enviar</button>

            <ul>
                {renderUsers()}
            </ul>
        </div>
    )
}