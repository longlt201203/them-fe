import React from 'react';

import Action from './Action';

const comments = {
    numbers: 1234,
};
const Comment = () => {
    return (
        <div>
            <Action numbers={comments.numbers} className="bi bi-chat" />
        </div>
    );
};

export default Comment;
