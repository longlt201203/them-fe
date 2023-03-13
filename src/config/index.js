/* eslint-disable prettier/prettier */
const publicRuntimeConfig = {
    NODE_ENV: import.meta.env.NODE_ENV || 'production',
    API_URL: import.meta.env.VITE_REACT_APP_BASE_URL,
    LOCAL_STORAGE_TOKEN: import.meta.env.VITE_REACT_APP_TOKEN_NAME,
    LOCAL_STORAGE_AUTH_TOKENS: import.meta.env.VITE_REACT_APP_AUTH_TOKENS_NAME,

    GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
};

export const {
    NODE_ENV,
    API_URL,
    LOCAL_STORAGE_TOKEN,
    GOOGLE_CLIENT_ID,
    LOCAL_STORAGE_AUTH_TOKENS,
} = publicRuntimeConfig;

export default publicRuntimeConfig.NODE_ENV;
