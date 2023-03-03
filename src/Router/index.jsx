import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Register from '../Pages/Register';
import Loading from '../components/Loading';

const RouterComponent = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Register />,
        },
    ]);

    return <RouterProvider fallbackElement={<Loading />} router={router} />;
};

export default RouterComponent;
