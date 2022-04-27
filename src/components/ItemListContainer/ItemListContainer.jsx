import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = (greeting) => {
  return (
    <>
      {greeting.text}
      <ItemCount stock={10} initial={1}/>
    </>
  )
}

export default ItemListContainer