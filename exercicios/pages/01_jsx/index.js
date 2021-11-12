import Link from 'next/link'

export default function(){

    return(
        <div style={{
            display:"flex",
            flexDirection: "column",
            alignItems:"center"
        }}>
            <h1>GUIA DOS ARQUIVOS JSX</h1>
            <Link href="01_jsx/1_jsx_none"><span className="box-list-link">JSX #01</span></Link>
            <Link href="01_jsx/2_jsx_simple"><span className="box-list-link">JSX #02</span></Link>
            <Link href="01_jsx/3_jsx_return"><span className="box-list-link">JSX #03</span></Link>
            <Link href="01_jsx/4_jsx_simple_2"><span className="box-list-link">JSX #04</span></Link>
            <Link href="01_jsx/5_jsx_const"><span className="box-list-link">JSX #05</span></Link>
        </div>
    )
}