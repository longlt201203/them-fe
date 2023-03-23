import React from 'react';

const Action = ({ className, numbers }) => {
    return (
        <>
            <button className="border-0 bg-unset">
                <i className={className}></i>
            </button>
            <span className="px-2">{numbers}</span>
        </>
    );
};

export default Action;
