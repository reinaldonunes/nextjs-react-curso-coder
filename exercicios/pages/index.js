import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
           Índice de exercícios em NextJS
        </h1>

        <div className={styles.grid}>
          <a href="basicos/jsx1" className={styles.card}>
            <h2>JSX #1</h2>
            <p>Fundamentos do JSX</p>
          </a>

          <a href="basicos/jsx2" className={styles.card}>
            <h2>JSX #2</h2>
            <p>Fundamentos do JSX</p>
          </a>

          <a href="basicos/jsx3" className={styles.card}>
            <h2>JSX #3</h2>
            <p>Fundamentos do JSX</p>
          </a>

          <a href="basicos/jsx4" className={styles.card}>
            <h2>JSX #4</h2>
            <p>Fundamentos do JSX</p>
          </a>

          <a href="basicos2/usandoTitulo" className={styles.card}>
            <h2>Usando Título</h2>
            <p>Passando valores via componentes</p>
          </a>

          <a href="basicos2/propsSomenteLeitura" className={styles.card}>
            <h2>Props somente leitura</h2>
            <p>Passando valores via componentes</p>
          </a>

          <a href="basicos2/mostraLista" className={styles.card}>
            <h2>Exibindo Lista</h2>
            <p>Montando uma lista com props e components</p>
          </a>

          <a href="basicos2/componenteFilhos" className={styles.card}>
            <h2>Componente Filho</h2>
            <p>Componente recebendo e passando valor</p>
          </a>

          <a href="comunicacao/direta" className={styles.card}>
            <h2>Comunicação Direta</h2>
            <p>Passagem de valores de modo direto via componente</p>
          </a>

          <a href="comunicacao/indireta" className={styles.card}>
            <h2>Comunicação Indireta</h2>
            <p>Passagem de valores de modo indireto via componente</p>
          </a>

          <a href="css/integracaoCss" className={styles.card}>
            <h2>Integração com CSS</h2>
            <p>Formas de passar o CSS para um componente ou elemento em tela</p>
          </a>

          <a href="estado/mouse" className={styles.card}>
            <h2>Estados de um Elemento</h2>
            <p>Mudando e alterando estados de um objeto em tela</p>
          </a>

          <a href="eventos/botao" className={styles.card}>
            <h2>Eventos de um elemento</h2>
            <p>Trabalhando com eventos de um botão</p>
          </a>

          <a href="estado/formulario" className={styles.card}>
            <h2>Componentes Controlados</h2>
            <p>Controlando dados de um formulário</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
