import Link from 'next/link'

export default function(){

    return(
        <div className="contentPaths">
            <h1>INTERAÇÕES COM CSS</h1>
            <Link href="04_interacao_css/01_className"><span className="box-list-link">Css padrão</span></Link>
            <Link href="04_interacao_css/02_classNameImport"><span className="box-list-link">Css import</span></Link>
            <Link href="04_interacao_css/03_cssInline"><span className="box-list-link">Css Inline</span></Link>
            <Link href="04_interacao_css/04_cssComponents"><span className="box-list-link">Css Components</span></Link>
        </div>
    )
}