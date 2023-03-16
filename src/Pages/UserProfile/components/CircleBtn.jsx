import React from 'react';

const CircleBtn = ({ circleStyle, theme, iconStyle }) => {
    return (
        <div className={circleStyle} theme={theme}>
            <i className={iconStyle}></i>
        </div>
    );
};

export default CircleBtn;
