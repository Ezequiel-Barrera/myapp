import useCartContext from '../../store/CartContext'
import './CartWidget';
import carrito from '../../assets/image/carrito.png'
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cantInCart } = useCartContext()

  return (
    <div>
      {cantInCart()}
      <Link to='/cart'>
        <img width="80" src={carrito} alt="Logo Carrito" />
      </Link>
    </div>
  );
}

export default CartWidget