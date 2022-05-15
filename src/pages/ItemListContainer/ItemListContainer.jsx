import ItemList from "../../components/ItemList/ItemList"
//import data from "../../services/getData"
import { getAllItems as getData, getItemsByCategory } from "../../database/firebase";
import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

/*
function getData(categoriaid) {
  return new Promise((resolve) => {
      setTimeout(() => {
          if (categoriaid) {
              const productoFiltrado = data.filter( product => {
                  return data.categoria === categoriaid
              })
              resolve(productoFiltrado)
          } else {
              resolve(data);
          }
      }, 700);
  })
}
*/

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  
  const {categoriaid} = useParams()
  //console.log('ID: '+ categoriaid)

  useEffect(() => {
    if(categoriaid === undefined) {
      getData().then((response) => setProducts(response))
    } else {
      getItemsByCategory(categoriaid).then((response) => setProducts(response))
    }
  }, [categoriaid])

  return (
    <>
      <h1>Categoria de {!categoriaid ? "todos los productos" : categoriaid}</h1>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer