import Link from 'next/link'

export default function(){

    return(
        <div className="contentPaths">
            <h1>RENDERIZAÇÕES DE DADOS</h1>
            <Link href="05_renderizacoes/01_condicional"><span className="box-list-link">Condicional simples</span></Link>
            <Link href="05_renderizacoes/02_condicional"><span className="box-list-link">Condicional modular</span></Link>
            <Link href="05_renderizacoes/03_repeat"><span className="box-list-link">Map function</span></Link>
            <Link href="05_renderizacoes/04_repeat"><span className="box-list-link">Arrow Map</span></Link>
        </div>
    )
}