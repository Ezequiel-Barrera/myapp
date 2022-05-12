import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import useCartContext from '../../store/CartContext'
import './CartWidget';

function CartWidget() {
  const { cantInCart } = useCartContext()
  return (
    <div>
      {cantInCart()}
      <FontAwesomeIcon 
        icon={faCartShopping} 
        className='cart-widget' />
    </div>
  );
}

export default CartWidget