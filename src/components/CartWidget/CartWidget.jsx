import useCartContext from '../../store/CartContext'
import { Link } from 'react-router-dom';


function CartWidget() {
  const { cantInCart } = useCartContext()

  return (
    <>
      <div className='cart'>
        <box-icon name="cart"></box-icon>
        <Link to='/cart'>
          <span>{cantInCart()}</span>
        </Link>
      </div>
    </>
  );
}

export default CartWidget