export default function Section(props){
    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        flexDirection: "column"
    }
    
    return(
        <section style={containerStyle}>
            {props.children}
        </section>
    )
}