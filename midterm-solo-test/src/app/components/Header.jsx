import styles from "./Header.module.css";

export default function Header({ loading, fetchData }) {
    return (
        <header className={styles.headerContainer} >
            <h1>Dogs are cute!</h1>
            <button className={styles.button} disabled={loading} onClick={fetchData}>
                {loading ? "Loading..." : "Click for cute dogs"}
            </button>
        </header>
    );
  }