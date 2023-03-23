import React from 'react';

import { More } from '../Btn';
import Avatar from '../Header/Avatar';

const user = {
    name: 'Leslie Flores',
    bio: 'Mauris ornare egestas iaculis leo. Lacus commodo non ac vulputate dignissim.',
    timePost: '12 hours ago',
    status: 'Open',
};
const Header = () => {
    return (
        <div className="d-flex justify-content-between px-3 align-items-center">
            <div className="d-flex align-items-center">
                <Avatar
                    user={user}
                    className="size-avatar-small bg-primary col-2 py-3 rounded text-center text-light fw-bold d-flex justify-content-center align-items-center img-thumbnail"
                />
                <div className="mx-2">
                    <div className="fw-bold fs-6">{user.name}</div>
                    <div className="d-flex">
                        <div>{user.timePost}</div>
                        <div className="px-3">{user.status}</div>
                    </div>
                </div>
            </div>
            <More />
        </div>
    );
};

export default Header;
