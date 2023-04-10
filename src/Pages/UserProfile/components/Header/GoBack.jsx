import React from 'react';

import { Button } from 'react-bootstrap';

const GoBack = ({ href }) => {
    return (
        <Button className="border-0 bg-unset bi-hover" href={href}>
            <i className="bi bi-arrow-left-circle-fill fs-2 color-primary"></i>
        </Button>
    );
};

export default GoBack;
