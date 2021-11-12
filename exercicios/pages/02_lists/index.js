import Link from 'next/link'

export default function(){

    return(
        <div className="contentPaths">
            <h1>TRABALHANDO COM LISTAS</h1>
            <Link href="02_lists/lista1"><span className="box-list-link">Lista #01</span></Link>
            <Link href="02_lists/lista2"><span className="box-list-link">Lista #02</span></Link>
            <Link href="02_lists/lista3"><span className="box-list-link">Lista #03</span></Link>
        </div>
    )
}