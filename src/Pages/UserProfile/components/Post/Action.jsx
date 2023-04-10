import React from 'react';

const Action = ({ className, numbers, onClick, variant }) => {
    return (
        <>
            <button className="border-0 bg-unset" onClick={onClick} variant={variant}>
                <i className={className}></i>
            </button>
            <span className="px-2">{numbers}</span>
        </>
    );
};

export default Action;
