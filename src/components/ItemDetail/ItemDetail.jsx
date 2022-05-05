import ItemCount from '../ItemCount/ItemCount'
import '../Item/Item.css'

const ItemDetail = ({ product }) => {
    return (
        <div className='card'>
            <div className='header'>
                <h1>{product.title}</h1>
            </div>
            <div className='content'>
                <div className='img-container'>
                    <img className='product-img' src={product.image} alt="Imagen del producto" />
                </div>
                <div>
                    {product.categoria}
                </div>
                <div>
                    {product.descripcion}
                </div>
            </div>
            <div className='footer'>
                <h2>${product.price}</h2>
            </div>
            <ItemCount stock={product.stock} initial={1} />
        </div>
    );
};

export default ItemDetail;