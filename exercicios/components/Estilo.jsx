export default function Estilo(props){
    return(
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
                color: props.color,
                textAlign: props.textAlign
            }}>Texto</h1>
            <h2 className="bgRed">Texto #02</h2>
        </div>
    )
}