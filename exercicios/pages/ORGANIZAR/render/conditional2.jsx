import If from "../../components/If";

export default function conditional2(){
    const numero = 5
    return(
        <div>
            <If teste={numero % 2 === 0}>
                O número é par
            </If>
            <If teste={numero % 2 === 1}>
                O número é impar
            </If>
        </div>
    )
}