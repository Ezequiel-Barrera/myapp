import { getAllItems as getData, getItemsByCategory } from "../../database/firebase";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'

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
        <div className='titleList'>
          <h1>Todos los productos {!categoriaid ? " de la tienda " : "de " + categoriaid}</h1>
        </div>
        <div className='productosList'>
            <ItemList products={products} />
            {/*<button onClick={dataToFirebase}>Add to Firestore</button>*/}
        </div>
      </>
    )
}

export default ItemListContainer