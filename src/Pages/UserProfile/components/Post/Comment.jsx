import React from 'react';

import Action from './Action';

const comments = {
    numbers: 1234,
};
const Comment = () => {
    return (
        <div>
            <Action numbers={comments.numbers} className="bi bi-chat" />
            {/* <div className="modal-dialog modal-dialog-centered"></div> */}
        </div>
    );
};

export default Comment;
