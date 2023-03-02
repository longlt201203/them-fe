import image_left from '../../assets/login/image_left.jpg';
import ScreenWrapper from '../../components/Wrapper';
import LoginForm from './LoginForm';
import { LoginStyle } from './css';

const LOGIN_URL = '';
export default function Login() {
    return (
        <LoginStyle>
            <div className="position-absolute d-flex justify-content-around align-items-center bg-primary w-100 h-100 text-light">
                <img src={image_left} alt="Left" className="d-sm-block d-none w-50"></img>
                <div className=" d-flex flex-column justify-content-center align-items-center text-light">
                    <h1 className="login-logo">Thèm</h1>
                    <span className="login-title mb-3 fs-1 text-light">Login</span>
                    <LoginForm />
                </div>
            </div>
        </LoginStyle>
    );
}
