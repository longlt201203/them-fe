import React, { useEffect, useState } from 'react';

import Action from './Action';

const likes = {
    numbers: 1234,
};
const Like = () => {
    const [quantity, setQuantity] = useState(likes.numbers);
    const [iconStyle, setIconStyle] = useState('bi-heart btn-dislike');
    const handleQuantityChange = () => {
        iconStyle == 'bi-heart-fill btn-like'
            ? setIconStyle('bi-heart btn-dislike')
            : setIconStyle('bi-heart-fill btn-like');
        iconStyle == 'bi-heart-fill btn-like'
            ? setQuantity(likes.numbers)
            : setQuantity(likes.numbers + 1);
    };
    return (
        <div>
            <Action
                numbers={quantity}
                className={`bi ${iconStyle}`}
                onClick={handleQuantityChange}
            />
        </div>
    );
};

export default Like;
