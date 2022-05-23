import { getAllItems as getData, getItemsByCategory } from "../../database/firebase";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"

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
        <div>
          <h1 className="titleILC">Todos los productos {!categoriaid ? " de la tienda " : "de " + categoriaid}</h1>
          <ItemList products={products} />
          {/*<button onClick={dataToFirebase}>Add to Firestore</button>*/}
        </div>
      </>
    )
}

export default ItemListContainer