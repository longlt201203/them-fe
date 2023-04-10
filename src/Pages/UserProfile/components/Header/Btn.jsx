import React from 'react';

import { Button } from 'react-bootstrap';

const Btn = ({ content, variant, className, href }) => {
    return (
        <Button variant={variant} className={className} href={href}>
            {content}
        </Button>
    );
};

export default Btn;
