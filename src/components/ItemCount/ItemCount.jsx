import { useState } from "react";
import { Button } from "react-bootstrap";
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
        <div className="item-count-container">
            <div>
                <Button variant="primary" onClick={onDecrease}>-</Button>{" "}
                <h4>{count}</h4>
                <Button variant="primary" onClick={onIncrease}>+</Button>{" "}
            </div>
            <Button variant="danger" onClick={handleClick}>Agregar al Carrito</Button>{" "}
        </div>
    );
};
export default ItemCount;