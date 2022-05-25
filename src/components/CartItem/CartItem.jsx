//import CartView from "../CartView/CartView"; id,

const CartItem = ({ title, image, price, cantidad }) => {
    return (
        <>
            <img className='product-img' src={image} alt="Imagen del producto" />
            <p>{title}</p>
            <p>${price}</p>
            <p>{cantidad * price}</p>
            {/*<button onClick={onDelete(id)}>Eliminar</button>*/}
        </>
    );
};

export default CartItem;