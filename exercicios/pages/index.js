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
          <a href="01_jsx" className={styles.card}>
            <h2>Usando JSX</h2>
            <p>Fundamentos do JSX</p>
          </a>

          <a href="02_lists" className={styles.card}>
            <h2>Exibindo listas</h2>
            <p>Métodos de exibição</p>
          </a>

          <a href="03_components" className={styles.card}>
            <h2>Componetização</h2>
            <p>Utilizando componentes</p>
          </a>

          <a href="04_interacao_css" className={styles.card}>
            <h2>Integrando o CSS</h2>
            <p>Métodos de utilização e importação</p>
          </a>

          <a href="05_renderizacoes" className={styles.card}>
            <h2>Renderizando dados</h2>
            <p>Populando dados dinamicamente</p>
          </a>

          <a href="06_fluxo_dados" className={styles.card}>
            <h2>Fluxo de dados</h2>
            <p>Passagem de parâmetros, eventos e estados</p>
          </a>

          <a href="07_oop_tipagem" className={styles.card}>
            <h2>Classes e Typescript</h2>
            <p>Aplicando a POO e Tipagem de dados</p>
          </a>

          <a href="08_routes" className={styles.card}>
            <h2>Rotas</h2>
            <p>Configurando rotas de arquivos</p>
          </a>

          <a href="09_apis" className={styles.card}>
            <h2>API's</h2>
            <p>Configurando suas API's</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by&nbsp;<strong>Reinaldo J. Nunes</strong>
        </a>
      </footer>
    </div>
  )
}
