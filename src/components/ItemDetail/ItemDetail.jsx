import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount'
import useCartContext from '../../store/CartContext';
import '../Item/Item.css'

const ItemDetail = ({ product }) => {

    const [isInCart, setIsInCart] = useState(false)
    const { addToCart } = useCartContext()

    function onAdd(count){
        setIsInCart(true)
        addToCart(product, count)
        console.log("agregado al cart: ", product, count)
    }

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
            {isInCart ? 
                <Button variant="danger">
                    <Link to={`/cart`}>
                        Ir al carrito
                    </Link>
                </Button>
            :
                <ItemCount onAdd={onAdd} stock={product.stock} initial={1} />
            }
        </div>
    );
};

export default ItemDetail;