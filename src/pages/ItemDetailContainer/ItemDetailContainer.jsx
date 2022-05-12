import ItemDetail from "../../components/ItemDetail/ItemDetail"
import data from "../../services/getData"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function getData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productoFiltrado = data.filter( product => {
                return data.id === parseInt(id)
            })
            resolve(productoFiltrado)
        }, 700);
    })
}

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const { productid } = useParams()

    useEffect(() => {
        getData(productid)
        .then((response) => setProduct(response))
        .catch((error) => console.log("error: ", error));
    }, [productid])

    return (
        <>
            <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailContainer