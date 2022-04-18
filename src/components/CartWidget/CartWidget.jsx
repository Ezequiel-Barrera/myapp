import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import './CartWidget';

function CartWidget() {
  return (
    <div>
      <FontAwesomeIcon 
        icon={faCartShopping} 
        className='cart-widget' />
    </div>
  );
}

export default CartWidget