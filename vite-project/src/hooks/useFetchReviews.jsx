import { useEffect, useState } from "react";

function useFetchReviews(productId) {
    const [reviews, setReviews] = useState([]);
    const [reviewLoading, setReviewLoading] = useState(true);
    const [reviewError, setReviewError] = useState(false);

    useEffect(() => {
        async function fetchReview() {
            try {
                setReviewLoading(true);

                const response = await fetch(`http://localhost:3000/reviews?productId=${productId}`);

                if(!response.ok) {
                    throw new Error;
                }

                const json = await response.json();
                setReviews(json);
                setReviewLoading(false);
            } catch{
                setReviewError(true);
                setReviewLoading(false);
            }
        }
        fetchReview();
    }, [productId]);

    return {
        reviews,
        reviewLoading,
        reviewError,
    }
}
export default useFetchReviews;