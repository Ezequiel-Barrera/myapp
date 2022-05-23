import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
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
        return <h4>Cargando...</h4>
    } else {
        return (<>
                <div className="producto">
                    <div className="title">
                        <h2>{product.title}</h2>
                    </div>
                    <div>
                        <div className="img">
                            <img src={product.image} alt="Imagen del producto" />
                        </div>
                    </div>
                    <div>
                        <h3>{product.categoria}</h3>
                        <p>{product.descripcion}</p>
                        <h2>${product.price}</h2>
                        {isInCart ?
                            <>
                            <Link to="/cart"><Button variant="primary">Ir al carrito</Button></Link>
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