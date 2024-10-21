import { createContext, useContext, useState } from "react"
import { useParams } from "react-router-dom";

const ProductContext = createContext();

export const ProductProvider = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const { category } = useParams();

    const getProducts = async () => {
        try {
            let url='#'
        } catch (error) {
            
        }
    }

    return
    <ProductContext.Provider value={{}}>
        ProductContext
    </ProductContext.Provider>
}

export const useProduct = () => useContext(ProductContext)

