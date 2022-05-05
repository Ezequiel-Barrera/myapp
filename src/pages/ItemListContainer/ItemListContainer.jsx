import ItemCount from "../../components/ItemCount/ItemCount"
import ItemList from "../../components/ItemList/ItemList"
import getData from "../../services/getData"
import { useState, useEffect } from "react"

const ItemListContainer = (greeting) => {

  const [products, setProducts] = useState([])
  

  useEffect(() => {
    getData
      .then((response) => setProducts(response))
      .catch((error) => console.log("error: ", error));
  }, [])

  return (
    <>
      {greeting.text}
      {/* <ItemCount stock={10} initial={1} /> */}
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer