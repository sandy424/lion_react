import { useParams } from "react-router-dom";
import useFetchItem from "../hooks/useFetchItem";
import useFetchReviews from "../hooks/useFetchReviews";
import styles from '../style/ProductDetail.module.css';

function Product() {
    const {productId} = useParams();

    console.log(productId);

    const { product, itemLoading, itemError } = useFetchItem(productId);
    const { reviews, reviewLoading, reviewError } = useFetchReviews(productId);

    if(itemLoading || reviewLoading) {
        return <div>상품 정보를 불러오고 있습니다 ...</div>
    }
    if(itemError || reviewError) {
        return <div>상품 정보를 불러오는 중에 에러가 발생했습니다.</div>
    }

    return(
        <div>
            <div className={styles.productDetail}>
                <img src={product.image}/>
                <div className={styles.productInfo}>
                    <div className={styles.productCategory}>{product.category}</div>
                    <h2>{product.name}</h2>
                    <div className={styles.productPrice}>{product.price.toLocaleString()}원</div>
                    <button>구매하기</button>
                </div>
            </div>
            <hr/>

            <p className={styles.productDocs}>
                {product.description}
            </p>
            <h3>리뷰 ({reviews.length})</h3>
            <hr/>
            {reviews.length > 0 ? (
                reviews.map((review) => {
                    return(
                        <div key={review.id} className={styles.item}>
                            <div className={styles.review}>
                                <div>{review.username}</div>
                                <div className={styles.rating}>{review.rating}/5</div>
                            </div>
                            <div className={styles.reviewtext}>
                                {review.text}
                            </div>
                        </div>
                    )
                })
            )
            : <div className={styles.reviewZero}>리뷰가 없습니다.</div>} 
            
        </div>
    )
}
export default Product;