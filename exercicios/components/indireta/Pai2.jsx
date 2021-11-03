import Filho2 from "./Filho2";

export default function Pai2(props){

    function falarComigo(){
        alert('Falando com o pai')
    }

    return(
        <div>
            <Filho2 funcao={falarComigo} />
            <Filho2 funcao={falarComigo} />
            <Filho2 funcao={falarComigo} />
        </div>

    )
}