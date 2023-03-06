import image_left from '../../assets/login/image_left.jpg';
import LoginBg from '../../assets/login/loginBg.png';
import ScreenWrapper from '../../components/Wrapper';
import LoginForm from './LoginForm';
import { LoginStyle } from './css';

export default function Login() {
    // <img src={LoginBg} alt="Left" className="d-sm-block d-none w-50"></img>
    return (
        <LoginStyle url={LoginBg}>
            <div className="position-absolute d-flex justify-content-around align-items-center  w-100 h-100 text-light">
                <div className=" d-flex flex-column justify-content-center align-items-center text-light">
                    <h1 className="login-logo">Thèm</h1>
                    <span className="login-title mb-3 fs-1 text-light">Login</span>
                    <LoginForm />
                </div>
            </div>
        </LoginStyle>
    );
}
