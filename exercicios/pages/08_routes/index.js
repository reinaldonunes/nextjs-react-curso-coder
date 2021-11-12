import Link from 'next/link'

export default function roteamentoSimples(){

    return(
        <div className="contentPaths">
            <h1>ROTEAMENTO DE LINKS</h1>
            <Link href="08_routes/roteamentoSimples"><span className="box-list-link">Simples</span></Link>
            <Link href="08_routes/02/roteamentoDinamico"><span className="box-list-link">Dinâmico</span></Link>
            <Link href="08_routes/02/este-nome-e-dinamico"><span className="box-list-link">Dinâmico 2</span></Link>
            <Link href="08_routes/parametros?id=5&nome=nova-pagina"><span className="box-list-link">Com parâmetros</span></Link>
            <Link href="08_routes/porevento"><span className="box-list-link">Por evento</span></Link>
        </div>
    )
}