import { useEffect, useState } from 'react';
import { fetchInfo } from '../helpers/fetchInfo';

const useShopify = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        // Loading
        fetchInfo().then(product => {
            setIsLoading(false);
            setProduct(product)
        });
    }, [])

    return {
        product
    }
}

export default useShopify