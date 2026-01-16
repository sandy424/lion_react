import styles from "../style/Product.module.css";

function Product(props) {
    return(
        <div className={styles.card}>
            <div className={styles.pic}></div>
            <div className={styles.price}>{props.price}</div>
            <h3 className={styles.title}>{props.name}</h3>
        </div>
    )
}

export default Product;