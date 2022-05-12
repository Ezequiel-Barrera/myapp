import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ title, image, id, price, categoria }) => {
    return (
        <div className='card'>
            <div className='header'>
                <h1>{title}</h1>
                <h2>{categoria}</h2>
            </div>
            <div className='content'>
                <div className='img-container'>
                    <img className='product-img' src={image} alt="Imagen del producto" />
                </div>
                    <Link to={`/product/${id}`}>Ver Detalle</Link>
            </div>
            <div className='footer'>
                <h2>${price}</h2>
            </div>
        </div>
    );
};

export default Item;