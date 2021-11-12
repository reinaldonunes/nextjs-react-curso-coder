import Link from 'next/link'

export default function trabalhandoApis(){

    return(
        <div className="contentPaths">
            <h1>TRABALHANDO COM API's</h1>
            <Link href="api/hello"><span className="box-list-link">API Next</span></Link>
        </div>
    )
}