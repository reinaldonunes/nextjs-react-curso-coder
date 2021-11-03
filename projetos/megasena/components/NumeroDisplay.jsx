export default function NumeroDisplay(props){
    const screen ={
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        display: "flex",
        marginBottom: "15px",
        color: "#FFF",
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "22px",
        backgroundColor: "#333"
    }
    return(
        <div style={screen}>{props.numero}</div>
    )
}