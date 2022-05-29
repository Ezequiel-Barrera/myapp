import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ title, image, id, price, categoria }) => {
    return (
        <>
        <div className="productoList">
            <div className='producto__img'>
                <img src={image} alt="Imagen del producto" />
            </div>
            <div className='producto__footer'>
                <h3>{title}</h3>
                <p>{categoria}</p>
                <p className='producto__price'>${price}</p>
                <div className='producto__buttom'>
                    <Link className='producto__btn' to={`/product/${id}`}>Ver Detalle</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Item;