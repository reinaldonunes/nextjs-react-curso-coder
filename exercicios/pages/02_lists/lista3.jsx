function listagem(){
    const list = []

    for(let i= 1; i <= 10; i++){
        list.push(<span>{i},</span>)
    }
    return list
}

export default function(){
    return(
        <div className="contentPaths">
            <h1>Renderizando listas com <i>FOR</i> e <i>PUSH</i></h1>
            {listagem()}
        </div>
    )
}