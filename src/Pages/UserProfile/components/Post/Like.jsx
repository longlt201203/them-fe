import React from 'react';

import Action from './Action';

const likes = {
    numbers: 1234,
};
const Like = () => {
    return (
        <div>
            <Action numbers={likes.numbers} className="bi bi-heart" />
        </div>
    );
};

export default Like;
