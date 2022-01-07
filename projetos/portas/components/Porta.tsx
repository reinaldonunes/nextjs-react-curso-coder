import styles from "../styles/Porta.module.css"
import Door from "../model/door"

interface PortaProps{
    value: Door
    onChange                                                    
}

export default function Porta(props: PortaProps){

    const porta = props.value
    const selected = porta.selected ? styles.selecionada : ''

    return(
        <div className={styles.area}>
            <div className={`${styles.estrutura} ${selected}`}>
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.number}</div>

                    <div className={styles.macaneta}></div>
                </div>
            </div>

            <div className={styles.chao}></div>
        </div>
    )
}