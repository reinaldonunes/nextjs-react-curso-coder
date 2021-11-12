import { useRouter } from 'next/router'

export default function params(){
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome
    
    return(
        <div>
            <h1>Rotas com parâmetros</h1>
            <span>O código da página é {id} e o nome é {nome}</span> 
        </div>
    )
}