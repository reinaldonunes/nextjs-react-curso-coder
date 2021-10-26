function listagem(){
    const list = []

    for(let i= 1; i <= 10; i++){
        list.push(<span>{i},</span>)
    }
    return list
}

export default function(){
    return(
        <div>
            {listagem()}
        </div>
    )
}