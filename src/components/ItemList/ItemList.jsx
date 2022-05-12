import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({products}) => {
    
    return (
        <div className='item-list'>
            {products.map((product) => {
                console.log(product);
                return (
                    <Item 
                        key={product.id} 
                        title={product.title} 
                        price={product.price} 
                        image={product.image} 
                        categoria={product.categoria} 
                        descripcion={product.descripcion} 
                        stock={product.stock}
                        />
                );
            })}   
        </div>
    )
}

export default ItemList