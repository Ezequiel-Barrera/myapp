import ItemList from "../../components/ItemList/ItemList"
import getData from "../../services/getData"
import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  
  const {categoryid} = useParams()

  useEffect(() => {
    getData(categoryid)
      .then((response) => setProducts(response))
      .catch((error) => console.log("error: ", error));
  }, [categoryid])

  return (
    <>
      <h1>Categoria de Productos</h1>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer