import React from 'react';

import { Button } from 'react-bootstrap';

const AddBtn = ({ href }) => {
    return (
        <Button className="mt-5" href={href}>
            <i className="bi bi-plus-circle-fill fs-1 color-primary position-fixed b-1 r-1 bi-hover"></i>
        </Button>
    );
};

export default AddBtn;
