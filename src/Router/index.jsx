import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from '../Pages/404Page';
import Home from '../Pages/Home';
import HomeChild from '../Pages/HomeChild/HomeChild';
import Login from '../Pages/Login';
import Register from '../Pages/Register.jsx';
import UserProfile from '../Pages/UserProfile';
import Loading from '../components/Loading';
import RoleAccess from './RoleAccess';

const RouterComponent = () => {
    const router = createBrowserRouter([
        { exact: true, path: '/', element: <Navigate to="home" /> },
        { exact: true, path: 'login', loader: Loading, element: <Login /> },
        { exact: true, path: 'register', loader: Loading, element: <Register /> },
        { exact: true, path: 'loading', loader: Loading, element: <Loading /> },
        {
            path: '/',
            exact: true,
            element: <RoleAccess role={['user', 'customer']} />,
            children: [
                {
                    exact: true,
                    path: 'home',
                    loader: Loading,
                    element: <Home />,
                    children: [{ path: 'homeChild', loader: Loading, element: <HomeChild /> }],
                },
            ],
        },
        {
            exact: true,
            element: <RoleAccess role={['user']} />,
            children: [
                {
                    exact: true,
                    path: 'user',
                    loader: Loading,
                    element: <UserProfile />,
                },
            ],
        },
        { path: '*', element: <ErrorPage /> },
    ]);
    return <RouterProvider fallbackElement={<Loading />} router={router} />;
};
export default RouterComponent;
