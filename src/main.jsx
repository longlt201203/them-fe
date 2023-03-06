import React from 'react';

import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import Toast from './components/ToastNotification';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import { themes } from './themes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={themes}>
            <AuthProvider>
                <App />
                <Toast />
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);
