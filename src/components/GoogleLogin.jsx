import { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { GOOGLE_CLIENT_ID } from '../config';
import Localstorage from '../utils/Localstorage';
import authApi from '../utils/api/authApi';

function GoogleSignInButton() {
    const [gapiLoaded, setGapiLoaded] = useState(false);
    const refBtn = useRef();
    const navigate = useNavigate();
    const handleCredentialResponse = (response) => {
        console.log(`Encoded JWT ID token: ${response.credential}`);
        authApi.loginGG(response.credential).then((res) => {
            console.log(res);
            if (res.data.status === 400) {
                Localstorage.setItem('credential', response.credential);
                navigate('/registerInfo');
            } else {
                Localstorage.setItem('accessToken', res.data.data.access_token);
                Localstorage.setItem('refreshToken', res.data.data.refresh_token);
                navigate('/home', { state: res.credential });
            }
        });
        // authApi.register(response.credential).then((response) => {
        //     console.log(response);x
        // });
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        setGapiLoaded(true);
        script.onload = () => {
            google.accounts.id.initialize({
                client_id: `${GOOGLE_CLIENT_ID}`,
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

    return gapiLoaded ? <button type="button" ref={refBtn}></button> : null;
}

export default GoogleSignInButton;
