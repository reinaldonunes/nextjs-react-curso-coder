import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteFilhos(){
    return(
        <div>
            <Lista>
                <Item conteudo="Item 12" />
                <Item conteudo="Item 15" />
                <Item conteudo="Item 22" />
            </Lista>
        </div>
    )
}