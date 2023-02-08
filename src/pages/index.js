import Head from "next/head";
import Link from "next/link";
import { appName } from "../constants/index";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{appName}</title>
        <link rel="icon" href="" />
      </Head>

      <main>
        <h1 className={styles.title}>Welcome to {appName}</h1>

        <p className={styles.description}>site description</p>
        <Link href="/login">login page</Link>
        <Link href="/dashboard">dashboard</Link>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Header &rarr;</h3>
            <p>paragraph</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Header &rarr;</h3>
            <p>paragraph</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Header &rarr;</h3>
            <p>paragraph</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Header &rarr;</h3>
            <p>paragraph</p>
          </a>
        </div>
      </main>

      <footer>
        <a href="" target="_blank" rel="noopener noreferrer">
          Footer <img src="" alt="" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
