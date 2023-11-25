import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from "../Context/CartContext";
import "./StylesH.css";

const CartWidget = () => {
    const { totalProducts } = useCartContext();

    return (
        <div>
            <button type="button" className="btn colorCartButton position-relative">
                <FontAwesomeIcon icon={faDumbbell} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalProducts()}
                </span>
            </button>
        </div>
    );
}

export default CartWidget;
