import React from 'react';

import Comment from './Comment';
import Like from './Like';
import Send from './Send';
import Share from './Share';

const Footer = () => {
    return (
        <div className="d-flex px-3 justify-content-between mb-3">
            <Like />
            <Comment />
            <Share />
            {/* <Send /> */}
        </div>
    );
};

export default Footer;
