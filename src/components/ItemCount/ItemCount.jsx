import { useState } from "react";
import { Button } from "react-bootstrap";
import './ItemCount.css'

const ItemCount = ({ stock, initial }) => {

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

    const onAdd = () => {
        const message = `Agregaste ${count} producto`;
        count === 1 ? alert(message) : alert(`${message}s`);
    };


    return (
        <div className="item-count-container">
            <div>
                <Button variant="primary" onClick={onDecrease}>-</Button>{" "}
                <h3>{count}</h3>
                <Button variant="primary" onClick={onIncrease}>+</Button>{" "}
            </div>
            <Button variant="danger" onClick={onAdd}>Agregar al Carrito</Button>{" "}
        </div>
    );
};
export default ItemCount;