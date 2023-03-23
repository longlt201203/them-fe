import React from 'react';

const trackings = [
    { id: 1, number: '8', label: 'Post' },
    { id: 2, number: '198', label: 'Follower' },
    { id: 3, number: '10', label: 'Following' },
];
const Tracking = () => {
    return (
        <div className="d-flex justify-content-around my-2">
            {trackings.map((item) => {
                return (
                    <div key={item.id} className="d-flex flex-column align-items-center">
                        <div>{item.number}</div>
                        <div>{item.label}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Tracking;
