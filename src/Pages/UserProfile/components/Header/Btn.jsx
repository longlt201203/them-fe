import React from 'react';

import { Button } from 'react-bootstrap';

const Btn = ({ content, variant, className }) => {
    return (
        <Button variant={variant} className={className}>
            {content}
        </Button>
    );
};

export default Btn;
