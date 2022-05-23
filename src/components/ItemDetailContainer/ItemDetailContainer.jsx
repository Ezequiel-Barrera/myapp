import { getItem as getData } from "../../database/firebase"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { productid } = useParams()
    
    useEffect(() => {
        getData(productid).then((response) => {setProduct(response)})
    }, [productid])

    return (
        <>
            <NavBar />
            <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailContainer