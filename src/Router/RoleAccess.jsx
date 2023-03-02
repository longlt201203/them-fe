import { Outlet, Navigate } from 'react-router-dom';

const RoleAccess = ({ roles = [] }) => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    return !roles.length || roles.includes(user?.role) ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace />
    );
};
export default RoleAccess;
