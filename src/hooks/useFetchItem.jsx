import {useEffect, useState} from 'react';

function useFetchItem(productId) {
    const [product, setProduct] = useState(null);
    const [itemLoading, setItemLoading] = useState(true);
    const [itemError, setItemError] = useState(false);

    useEffect(() => {
        async function fetchItem() {
            try {
                setItemLoading(true);
                const response =  await fetch(`http://localhost:3000/products/${productId}`);

                if(!response.ok) {
                    throw new Error;
                }

                const json = await response.json();
                
                setProduct(json);
                setItemLoading(false);
            }catch{
                setItemError(true);
                setItemLoading(false);
            }
        }
        fetchItem();
    }, [productId]);

    return{
        product,
        itemLoading,
        itemError,
    }
}
export default useFetchItem;