import styles from "../style/Main.module.css";

function Main({children}){
    return(
        <div className={styles.card}>
            {children}
        </div>
    )
}

export default Main;