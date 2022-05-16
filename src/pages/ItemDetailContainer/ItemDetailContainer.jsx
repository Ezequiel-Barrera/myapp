import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getItem as getData } from "../../database/firebase"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productid } = useParams()
    
    useEffect(() => {
        getData(productid).then((response) => {setProduct(response)})
    }, [productid])

    return (
        <>
            <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailContainer