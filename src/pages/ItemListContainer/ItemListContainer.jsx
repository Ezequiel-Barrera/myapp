import ItemList from "../../components/ItemList/ItemList"
import { getAllItems as getData, getItemsByCategory } from "../../database/firebase";
import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoriaid} = useParams()
    useEffect(() => {
      if(categoriaid === undefined) {
        getData().then((response) => setProducts(response))
      } else {
        getItemsByCategory(categoriaid).then((response) => setProducts(response))
      }
    }, [categoriaid])

    return (
      <>
        <h1 className="title">Categoria de {!categoriaid ? "todos los productos" : categoriaid}</h1>
        <div>
          <ItemList products={products} />
        </div>
      </>
    )
}

export default ItemListContainer