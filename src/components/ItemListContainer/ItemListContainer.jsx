import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import getData from "../../services/getData"
import { useState, useEffect } from "react"

const ItemListContainer = (greeting) => {

  const [products, setProducts] = useState([])
  console.log("Products before promise", products);

  useEffect(() => {
    getData
      .then((response) => setProducts(response))
      .catch((error) => console.log("error: ", error));
  }, [])

  return (
    <>
      {greeting.text}
      <ItemCount stock={10} initial={1} />
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer