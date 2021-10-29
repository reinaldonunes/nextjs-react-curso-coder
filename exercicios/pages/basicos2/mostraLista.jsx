import Listagem from "../../components/listas/Listagem";

export default function mostraLista(){
    return(
        <div>
            <Listagem typelist="ol">
                <li>aaaa</li>
                <Listagem typelist="ul">
                    <li>aaaa</li>
                </Listagem>
            </Listagem>
            <Listagem typelist="ul">
                <li>aaaa</li>
            </Listagem>
            <Listagem typelist="ol">
                <li>aaaa</li>
            </Listagem>
        </div>
    )
}