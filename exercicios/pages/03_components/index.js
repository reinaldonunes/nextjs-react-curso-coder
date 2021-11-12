import Link from 'next/link'

export default function(){

    return(
        <div className="contentPaths">
            <h1>TRABALHANDO COM COMPONENTES</h1>
            <Link href="03_components/01_Titulos"><span className="box-list-link">Títulos</span></Link>
            <Link href="03_components/02_SomenteLeitura"><span className="box-list-link">Somente Leitura</span></Link>
            <Link href="03_components/03_MostraLista"><span className="box-list-link">Lista</span></Link>
            <Link href="03_components/04_Filhos"><span className="box-list-link">Filhos</span></Link>
        </div>
    )
}