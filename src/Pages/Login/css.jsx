import styled from 'styled-components';

import Col from 'react-bootstrap/Col';

export const LoginStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: ${({ url }) => (url ? `url(${url})` : null)};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    /* padding: 5rem 10rem; */
    .form-control {
        padding: 0.5em;
        width: 100%;
        font-size: 1em;
    }
    .btn-login {
        background: #007dff;
        border-radius: 3em;
        border: none;
        padding: 0.4em 4em;
        transition: all 0.2s ease;
        opacity: 1;
    }
    .btn-login:hover {
        transform: scale(1.025);
        opacity: 0.8;
    }
    .login-logo {
        color: #00bafd;
        text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.25);
        font-size: 3.8em;
        font-weight: 800;
        letter-spacing: 0.02em;
    }
    .bg-primary {
        background: linear-gradient(
            180deg,
            rgba(47, 81, 169, 1) 0%,
            rgba(5, 26, 90, 1) 52%,
            rgba(0, 5, 59, 1) 100%
        );
    }
    .color-link {
        color: #00bafd;
    }
    .line-custom {
        width: 36%;
    }
`;
export const StyledCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: #02134f;
    padding: 0;
    .advertise {
        width: 400px;
        height: 400px;
        padding: 50px;
        background: #d4d44d;
    }
    @media (max-width: 576px) {
        display: none;
    }
`;
export const StyledCol2 = styled(Col)`
    @media (max-width: 576px) {
        display: none;
    }
`;
