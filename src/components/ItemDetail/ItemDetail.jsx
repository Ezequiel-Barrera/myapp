import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../store/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetailContainer.css'

const ItemDetail = ({ product }) => {
    const [isInCart, setIsInCart] = useState(false)
    const {addToCart} = useCartContext()
    
    function onAdd(count){
        setIsInCart(true)
        addToCart(product, count)
        console.log("agregado al cart: ", product, count)
    }

    if(!product) {
        return (
            <>
                <div className='producto__detail__fluid'>
                    <div class='container-fluid'>
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='producto__detail'>
                    <div className='producto__d__img'>
                        <img src={product.image} alt="Imagen del producto" />
                    </div>
                    <div className='producto__d__footer'>
                        <h3>{product.title}</h3>
                        <h4>{product.categoria}</h4>
                        <p>{product.descripcion}</p>
                        <p className='price'>${product.price}</p>
                        
                            {isInCart ?
                                <>
                                <div className="productoCount__buttom">
                                    <div className='producto__btn__princial'>
                                        <Link className='producto__btn' to="/cart">Ir al carrito</Link>
                                    </div>
                                    <div className='producto__btn__secundario'>
                                        <Link className='producto__btn' to="/">Seguir comprando</Link>
                                    </div>
                                </div>
                                </>
                                :
                                <ItemCount onAdd={onAdd} stock={product.stock} initial={1} />
                            }
                        
                    </div>
                </div>
            </>
        );
    }

};

export default ItemDetail;