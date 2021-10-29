export default function Lista(props){
    const tipo = props.typelist === 'ul'

    return(
        <>
        {tipo ? 
            <ul>{props.children}</ul> :
            <ol>{props.children}</ol>
        }
        </>
    )
}