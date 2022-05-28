import { Link } from 'react-router-dom';

const Item = ({ title, image, id, price, categoria, descripcion }) => {
    return (
        <>
        <div>
            <div>
                <img src={image} alt="Imagen del producto" />
            </div>
            <div>
                <h1>{title}</h1>
                <p>{categoria}</p>
                <p>${price}</p>
                <div>
                    <Link to={`/product/${id}`}>ver detalle</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Item;