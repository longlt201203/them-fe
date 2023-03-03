import { useState, useEffect, useRef, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import Localstorage from '../utils/Localstorage';
import authApi from '../utils/api/authApi';

function GoogleSignInButton() {
    const [gapiLoaded, setGapiLoaded] = useState(false);
    const refBtn = useRef();
    const navigate = useNavigate();
    const handleCredentialResponse = (response) => {
        console.log(`Encoded JWT ID token: ${response.credential}`);
        authApi.login(response.credential).then((response) => {
            console.log(response);
            Localstorage.setItem('token', response.data.data);
            navigate('/');
        });
        authApi.register(response.credential).then((response) => {
            console.log(response);
        });
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        setGapiLoaded(true);
        script.onload = () => {
            google.accounts.id.initialize({
                client_id:
                    '970833900937-v2ssoqdoticb9em0hl48fdpe2ebg2n81.apps.googleusercontent.com',
                callback: handleCredentialResponse,
            });
            google.accounts.id.renderButton(
                refBtn.current,
                { theme: 'outline', size: 'large' } // customization attributes
            );
            google.accounts.id.prompt();
            // google.accounts.id.disableAutoSelect();
        };

        document.body.appendChild(script);
        return () => {
            setGapiLoaded(false);
            document.body.removeChild(script);
        };
    }, []);

    return gapiLoaded ? <div type="button" ref={refBtn} /> : null;
}

export default GoogleSignInButton;
