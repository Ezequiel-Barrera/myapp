import { Link } from 'react-router-dom';

const Item = ({ title, image, id, price, categoria }) => {
    return (
        <div className="producto">
            <div className='producto__img'>
                <img className='product-img' src={image} alt="Imagen del producto" />
            </div>
            <div className='producto__footer'>
                <h1>{title}</h1>
                <p>{categoria}</p>
                <p className='price'>${price}</p>
                <div className='buttom'>
                    <Link to={`/product/${id}`}>ver detalle</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;