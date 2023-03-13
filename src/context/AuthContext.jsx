import { createContext, useState, useEffect } from 'react';

import { decodeToken, isExpired } from 'react-jwt';

// import { useNavigate } from 'react-router-dom';
import Localstorage from '../utils/Localstorage';
import authApi from '../utils/api/authApi';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() =>
        Localstorage.getAuthTokens() ? JSON.parse(Localstorage.getAuthTokens()) : null
    );
    let [user, setUser] = useState(() =>
        Localstorage.getToken() ? decodeToken(Localstorage.getToken()) : null
    );
    let [loading, setLoading] = useState(true);

    let logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        Localstorage.deleteAuthTokens();
        // navigate('/login');
    };

    let updateToken = async () => {
        let res = await authApi.GetRefreshToken(authTokens?.refresh_token);

        console.log(res);
        if (res.data.status === 200) {
            setAuthTokens(res.data.data);
            setUser(decodeToken(res.data.data.access_token));
            localStorage.setItem('authTokens', JSON.stringify(res.data.data));
        } else {
            logoutUser();
        }

        if (loading) {
            setLoading(false);
        }
    };

    let contextData = {
        user: user,
        authTokens: authTokens,
        logoutUser: logoutUser,
    };

    useEffect(() => {
        if (loading) {
            updateToken();
        }

        let fourMinutes = 1000 * 60 * 4;

        let interval = setInterval(() => {
            if (authTokens) {
                updateToken();
            }
        }, fourMinutes);
        return () => clearInterval(interval);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>
    );
};
