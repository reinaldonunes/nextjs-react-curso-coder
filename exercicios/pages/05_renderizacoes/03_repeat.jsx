export default function Repeat1(){
    const listaAprovados = [
        'João',
        'Maria',
        'Antônoio',
        'Hendy'
    ]
    function renderList(){
        return listaAprovados.map(function(nome,i){
            return <li key={i}>{nome}</li>
        })

        /* Também podemos usar o map com arrow function
            listaAprovados.map((nome,i) => <li key={i}>{nome})
        */
    }

    return(
        <ul>
            {renderList()}
        </ul>
    )
}

/*   function renderList(){
        const itens = []
        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li key={i}>{listaAprovados[i]}</li>)
        }
        return itens
    }
*/