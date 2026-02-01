import {Link} from 'react-router-dom';
import {useState} from 'react';
import styles from '../style/Home.module.css';
import useFetchProduct from '../hooks/useFetchProduct';

function Home() {
    const {products, productLoading, productError} = useFetchProduct();
    const [selected, setSelected] = useState("전체");

    const filteredProduct = products.filter(({category}) => {
        if(selected === "전체") {
            return true;
        }
        return selected === category;
    })

    if(productLoading) {
        return <div>상품 준비 중입니다 ...</div>
    }

    if(productError) {
        return <div>상품 목록을 가져오는 중에 에러가 발생했습니다.</div>
    }

    return(
        <div>
            <ul className={styles.categoryList}>
                {["전체","상의","하의","신발","가방","악세사리"].map((category) => {
                    return(
                        <li key={category} 
                        className={selected === category ? styles.selected : null}
                        onClick={() => {
                            setSelected(category);
                        }}>{category}</li>
                    )
                })}
            </ul>

            <h3>상품 목록 ({filteredProduct.length})</h3>

            <div className={styles.productList}>
                {filteredProduct.map(({id, category, image, name, price}) => {
                    return(
                        <Link key={id} to={`/product/${id}`} className={styles.productListItem}>
                            <img src={image} />
                            <div className={styles.productInfo}>
                                <div className={styles.productCategory}>{category}</div>
                                <div className={styles.productName}>{name}</div>
                                <div className={styles.productPrice}>{price.toLocaleString()}원</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;