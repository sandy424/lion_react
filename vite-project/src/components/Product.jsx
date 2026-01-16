import styles from "../style/Product.module.css";

function Product(props) {
    return(
        <div className={styles.card}>
            <div className={styles.pic}></div>
            <h3 className={styles.title}>{props.name}</h3>
            <div>{props.price}</div>
        </div>
    )
}

export default Product;