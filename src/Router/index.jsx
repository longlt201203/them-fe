import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';

import LayoutComponent from '../components/Layout/index';
import Loading from '../components/Loading';
import RequireAuth from '../components/RequiredAuth';
import ErrorPage from '../pages/404Page/index';
import Admin from '../pages/AdminPage/index';
import CreatePost from '../pages/CreatePost/index';
import { loaderInfoUser } from '../pages/EditAccount/components/EditAccountForm';
import EditAccount from '../pages/EditAccount/index';
import ForgotPassword from '../pages/ForgotPassword/index';
import Home from '../pages/Home/index';
import HomeChild from '../pages/HomeChild/HomeChild';
import Login from '../pages/Login/index';
import RegisterInfo from '../pages/Register copy/index';
import { loaderInfoGG } from '../pages/Register copy/index';
import Register from '../pages/Register/index';
import ResetPassword from '../pages/ResetPassword/index';
import UserProfile from '../pages/UserProfile/index';
import VerificationEmail from '../pages/VerficationPage copy/index';
import Verification from '../pages/VerficationPage/index';

// import RoleAccess from './RoleAccess';

const ROLES = {
    User: 2001,
    Admin: 1984,
};

const RouterComponent = () => {
    const router = createBrowserRouter([
        { exact: true, path: '/', element: <Navigate to="home" /> },
        { exact: true, path: 'login', loader: Loading, element: <Login /> },
        { exact: true, path: 'register', loader: Loading, element: <Register /> },
        { exact: true, path: 'forgotPassword', element: <ForgotPassword /> },
        { exact: true, path: 'resetPassword', element: <ResetPassword /> },
        { exact: true, path: 'verification', element: <Verification /> },
        { exact: true, path: 'verify_email', element: <VerificationEmail /> },

        { exact: true, path: 'edit_account', loader: loaderInfoUser, element: <EditAccount /> },
        { exact: true, path: 'registerGoogle', loader: loaderInfoGG, element: <RegisterInfo /> },
        {
            exact: true,
            path: 'create_post',
            element: (
                <LayoutComponent>
                    <CreatePost />
                </LayoutComponent>
            ),
        },

        { exact: true, path: 'loading', loader: Loading, element: <Loading /> },
        {
            path: '/',
            exact: true,
            element: <Home />,
            children: [
                {
                    exact: true,
                    path: 'home',
                    loader: Loading,
                    element: <Home />,
                    children: [{ path: 'homechild', loader: Loading, element: <HomeChild /> }],
                },
            ],
        },
        {
            exact: true,
            element: <RequireAuth allowedRoles={ROLES.User} />,
            children: [
                {
                    exact: true,
                    path: 'user',
                    loader: Loading,
                    element: <UserProfile />,
                },
            ],
        },
        {
            exact: true,
            element: <RequireAuth allowedRoles={ROLES.Admin} />,
            children: [
                {
                    exact: true,
                    path: 'admin',
                    loader: Loading,
                    element: <Admin />,
                },
            ],
        },
        { path: '*', element: <ErrorPage /> },
    ]);
    return <RouterProvider fallbackElement={<Loading />} router={router} />;
};
export default RouterComponent;
