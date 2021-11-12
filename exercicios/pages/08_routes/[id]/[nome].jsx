import { useRouter } from "next/router"

export default function roteamentoDinamico(){
    const router = useRouter()
    const pathUrl = router.asPath
    const idPage = router.query.id 
    const name = router.query.nome


    
    return (
        <div>
            <span><strong>Rota: </strong>{pathUrl}</span>
            <br />
            <br />
            <span><strong>Código da Página: </strong>{idPage}</span>
            <br />
            <br />
            <span><strong>Nome Arquivo: </strong>{name}</span>
        </div>   
    )
}