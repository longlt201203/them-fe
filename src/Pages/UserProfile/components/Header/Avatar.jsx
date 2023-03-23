import React from 'react';

const avatarName = ({ user }) => {
    var name = '';
    var fname = user.name.charAt(0).toUpperCase();
    var lname = user.name.charAt(user.name.lastIndexOf(' ') + 1).toUpperCase();
    name = fname + lname;
    return name;
};
const Avatar = ({ user, className }) => {
    return <div className={className}>{avatarName({ user })}</div>;
};

export default Avatar;
