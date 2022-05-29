import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    
    const onIncrease = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
            setCount(newValue);
        }
    };
    
    const onDecrease = () => {
        const newValue = count - 1;
        if (newValue >= initial) {
            setCount(newValue);
        }
    };
    
    const handleClick = () => {
        onAdd(count)
    }
    
    return (
        <>
        <div className="productoCount__buttom">
            <div className='producto__btn__princial'>
                <button className='producto__btn' onClick={onDecrease}>-</button>{" "}
                <h4>{count}</h4>
                <button className="producto__btn" onClick={onIncrease}>+</button>{" "}
            </div>
            <div className='producto__btn__secundario'>
                <button className="producto__btn" onClick={handleClick}>Agregar al Carrito</button>{" "}
            </div>
        </div>
        </>
    );
};
export default ItemCount;