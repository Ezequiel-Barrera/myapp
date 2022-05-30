import Item from "../Item/Item"

const ItemList = ({products}) => {
    
    return (
        <>
            {products.map((product) => {
                return (
                    <Item 
                        key={product.id} 
                        id={product.id}
                        title={product.title} 
                        price={product.price} 
                        image={product.image} 
                        categoria={product.categoria} 
                        descripcion={product.descripcion} 
                        stock={product.stock}
                        />
                );
            })}
        </>
    )
}

export default ItemList