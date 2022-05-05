import './Item.css'

const Item = ({ title, price, image }) => {
    return (
        <div className='card'>
            <div className='header'>
                <h1>{title}</h1>
            </div>
            <div className='content'>
                <div className='img-container'>
                <img className='product-img' src={image} alt="Imagen del producto" />
                </div>
                <button>Ver Detalle</button>
            </div>
            <div className='footer'>
                <h2>${price}</h2>
            </div>
        </div>
    );
};

export default Item;