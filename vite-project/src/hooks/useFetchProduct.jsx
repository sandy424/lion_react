import {useState, useEffect} from 'react';


function useFetchProduct() {

    const [products, setProducts] = useState([]);
    const [productLoading, setProductLoading] = useState(true);
    const [productError, setProductError] = useState(false);

    useEffect(() => {
        async function fetchProduct() {
            try {
                setProductLoading(true);

                const response = await fetch('http://localhost:3000/products');
                console.log(response);

                if(!response.ok) {
                    throw new Error();
                }
                const json = await response.json();
                setProducts(json);

                setProductLoading(false);
            } catch {
                setProductError(true);
                setProductLoading(false);
            }
            
        }
        fetchProduct();
    }, []);

    return{
        products,
        productLoading,
        productError,
    }
}
export default useFetchProduct;