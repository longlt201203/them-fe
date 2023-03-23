import React from 'react';

import Action from './Action';

const shares = {
    numbers: '1234',
};
const Share = () => {
    return (
        <div>
            <Action numbers={shares.numbers} className="bi bi-share" />
        </div>
    );
};

export default Share;
