import styles from '../styles/Linha.module.css'
import Subdivisao from './Subdivisao'

export default function Linha(props){
    return(
        <div
            className={styles.linha}
            style={{
                flexDirection: props.reverse ? "row-reverse" : "row"
            }}
        >
            <Subdivisao />
            <Subdivisao color />
            <Subdivisao />
            <Subdivisao color />
            <Subdivisao />
            <Subdivisao color />
            <Subdivisao />
            <Subdivisao color />
        </div>
    )
}