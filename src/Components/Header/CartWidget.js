import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return (
        <div>
            <button>
                <FontAwesomeIcon icon={faDumbbell} />
            </button>
        </div>
    );
}

export default CartWidget;


