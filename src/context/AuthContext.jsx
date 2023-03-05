import { createContext, useState } from 'react';

const AuthContext = createContext({
    auth: null,
    setAuth: () => null,
});
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
export default AuthContext;
