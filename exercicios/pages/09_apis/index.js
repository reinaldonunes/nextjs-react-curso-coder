import Link from 'next/link'

export default function trabalhandoApis(){

    return(
        <div className="contentPaths">
            <h1>TRABALHANDO COM API's</h1>
            <Link href="api/hello"><span className="box-list-link">API Next</span></Link>
            <Link href="api/get"><span className="box-list-link">API via GET</span></Link>
            <Link href="api/question/01"><span className="box-list-link">API If/Else</span></Link>
            <Link href="09_apis/question"><span className="box-list-link">Consumindo a API</span></Link>
            <Link href="09_apis/form"><span className="box-list-link">API Dinâmica</span></Link>
            <Link href="api/params/qualquer-coisa/outra-coisa/vai-longe"><span className="box-list-link">API Parâmetros</span></Link>
        </div>
    )
}
