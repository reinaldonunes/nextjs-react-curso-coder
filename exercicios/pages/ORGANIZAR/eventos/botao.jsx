function acao01(){
    console.log("Ação 01")
}

export default function botao(){
    function acao02(){
        console.log("Ação 02")
    }

    function acao5(e){
        console.log(e)
    }

    return(
        <div>
            <button onClick={acao01}>Clique-me!</button>
            <button onClick={acao02}>Clique-me!</button>
            <button onClick={e => acao5(e)}>Clique-me!</button>

            <input type="text" onChange={e => console.log(e.target.value)} />
        </div>
    )
}