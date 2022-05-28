import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../store/CartContext';
import ItemCount from '../ItemCount/ItemCount'

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
            <div class='container-fluid'>

                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>

                <div class="card" aria-hidden="true">
                    <img src="" class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                        </p>
                        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                    </div>
                </div>
                
            </div>
            </>
        )
    } else {
        return (<>
                <div>
                    <h2>{product.title}</h2>
                </div>
                <div>
                    <div>
                        <div>
                            <img src={product.image} alt="Imagen del producto" />
                        </div>
                    </div>
                    <div>
                        <h3>{product.categoria}</h3>
                        <p>{product.descripcion}</p>
                        <h2>${product.price}</h2>
                        {isInCart ?
                            <>
                            <Link to="/cart"><button>Ir al carrito</button></Link>
                            <Link to="/">Seguir comprando</Link>
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