import styled from 'styled-components';

export const Container = styled.div``;
export const LoginStyle = styled.div`
    .form-control {
        padding: 0.5em;
        width: 100%;
        font-size: 1em;
    }
    .btn-login {
        color: #ffffff;
        background: linear-gradient(169.52deg, #fd9843 7.81%, #e35d6a 95.08%);
        border-radius: 3em;
        border: none;
        padding: 0.4em 4em;
        transition: all 0.2s ease;
        opacity: 0.9;
    }
    .btn-login:hover {
        color: #fff;
        transform: scale(1.025);
        opacity: 1;
    }
    .login-logo {
        font-style: normal;
        font-size: 4em;
        letter-spacing: 0.4em;
        background: linear-gradient(180deg, #343434 37.5%, rgba(0, 0, 0, 0.36) 81.77%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
        text-align: center;
    }
    .login-title {
        font-weight: 500;
        font-size: 3.8em;
        background: linear-gradient(169.52deg, #fd9843 7.81%, #e35d6a 95.08%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
    }
`;
