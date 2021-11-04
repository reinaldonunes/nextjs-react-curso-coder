import Pessoa from "../../modulo/Pessoa";

export default function exemplo(){
    return(
        <div>
            <Pessoa nome="João" idade={28} />
            <Pessoa nome="Maria" />
            <Pessoa nome="Davi" idade={0} />
        </div>
    )
}