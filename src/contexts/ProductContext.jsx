import { createContext, useContext, useState } from "react"
import { useParams } from "react-router-dom";

const ProductContext = createContext();

export const ProductProvider = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { category } = useParams();

    const getProducts = async (category) => {
        try {
            setLoading(true)
            let url = 'https://fakestoreapi.com/products';
            if (category) {
                url += `/category/${category}/?limit=4`;
            } else {
                url += `?limit=4`
            }
            const response = await fetch(url);
            if (response.ok) {
                setLoading(false)
                setProducts(data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts(category)
    }, [category])

    return (
        <ProductContext.Provider value={{ products, loading }}>
            ProductContext
        </ProductContext.Provider>)
}

export const useProduct = () => useContext(ProductContext)

