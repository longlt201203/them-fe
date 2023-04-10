import React from 'react';

import Avatar from './Avatar';
import Btn from './Btn';
import Cover from './Cover';
import GoBack from './GoBack';

const user = {
    name: 'Leslie Flores',
    bio: 'Mauris ornare egestas iaculis leo. Lacus commodo non ac vulputate dignissim.',
};
const Header = () => {
    return (
        <div>
            <Cover className="bg-secondary size-cover top-0 img-fluid" />
            <div className="px-3">
                <div className="d-flex justify-content-between ">
                    <div>
                        <Avatar
                            user={user}
                            className="img-thumbnail bg-primary size-avatar rounded text-light d-flex align-items-center justify-content-center fw-bold position-absolute top-13"
                        />
                    </div>
                    <Btn
                        content="Edit Profile"
                        variant="outline"
                        className="br-1 pr-1 color-secondary fw-bold border-primary-1 btn-hover mt-2"
                        href="edit"
                    />
                </div>
                <div className="mt-3">
                    <h2 className="fw-bold">{user.name}</h2>
                    <div className="color-third fs-7">{user.bio}</div>
                </div>
            </div>
            <div className="position-fixed top-0 w-100 navbar">
                <div className="px-2">
                    <GoBack />
                </div>
            </div>
        </div>
    );
};

export default Header;
