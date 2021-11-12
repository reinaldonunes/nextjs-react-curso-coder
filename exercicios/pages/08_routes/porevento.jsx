import router, {useRouter} from 'next/router'
export default function routerEvent(){

    function routerFunc(url){
        router.push({
            pathname: "/08_routes/parametros",
            query: {
                id: 123,
                nome: "Testando roteameto por função"
            }
        })
    }
    return(
        <div>
            <h1>Passando uma rota por evento ou função</h1>
            <button onClick={() => router.push("/08_routes/roteamentoSimples")}>Testar evento</button>
            <br />
            <button onClick={routerFunc}>Testar função</button>
        </div>
    )
}