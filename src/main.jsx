import React from 'react';

import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import './index.css';
import { themes } from './themes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={themes}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
