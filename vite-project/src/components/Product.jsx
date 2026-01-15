import styles from "./Product.module.css";

function Product(props) {
    return(
        <div className={styles.card}>
            <h3>
                {props.name}
            </h3>
            <div>
                {props.price}
            </div>
        </div>
    )
}

export default Product;