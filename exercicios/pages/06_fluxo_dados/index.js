import Link from 'next/link'

export default function(){

    return(
        <div className="contentPaths">
            <h1>PASSAGEM DE DADOS, EVENTOS E ESTADOS DO COMPONENTE</h1>
            <Link href="06_fluxo_dados/01_direta"><span className="box-list-link">Parâmetros direto</span></Link>
            <Link href="06_fluxo_dados/02_indireta"><span className="box-list-link">Parâmetros indiretos</span></Link>
            <Link href="06_fluxo_dados/03_eventos"><span className="box-list-link">Eventos</span></Link>
            <Link href="06_fluxo_dados/04_estadoInput"><span className="box-list-link">Estado Input</span></Link>
            <Link href="06_fluxo_dados/05_estadoMouse"><span className="box-list-link">Estado Mouse</span></Link>
        </div>
    )
}