import { useState } from "react";

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
        <div>
            <div>
                <button onClick={onDecrease}>-</button>{" "}
                <h4>{count}</h4>
                <button onClick={onIncrease}>+</button>{" "}
            </div>
            <button onClick={handleClick}>Agregar al Carrito</button>{" "}
        </div>
    );
};
export default ItemCount;