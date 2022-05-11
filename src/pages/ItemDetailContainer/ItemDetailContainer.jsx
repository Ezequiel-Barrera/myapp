import ItemDetail from "../../components/ItemDetail/ItemDetail"
import getData from "../../services/getData"
import { useState, useEffect } from "react"

const ItemListContainer = () => {

    const [product, setProduct] = useState([])
    
    useEffect(() => {
        getData
        .then((response) => setProduct(response[6]))
        .catch((error) => console.log("error: ", error));
    }, [])

    return (
        <>
            <ItemDetail product={product} />
        </>
    )
}

export default ItemListContainer