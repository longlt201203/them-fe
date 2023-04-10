import image_left from '../../assets/login/image_left.jpg';
import LoginBg from '../../assets/login/loginBg.png';
import ScreenWrapper from '../../components/Wrapper';
import LoginForm from './LoginForm';
import { LoginStyle, StyledCol, StyledCol2 } from './css';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

const Login = () => {
    // <img src={LoginBg} alt="Left" className="d-sm-block d-none w-50"></img>
    return (
        <div className="d-flex align-items-center justify-content-center">
            <StyledCol2>
                <StyledCol>
                    <div className="advertise text-center rounded">
                        <h3> this is section for advertise</h3>
                    </div>
                </StyledCol>
            </StyledCol2>
            <Col className="">
                <LoginStyle className="p-5" url={LoginBg}>
                    <div className="w-md-50">
                        <Stack>
                            <div className="text-center text-light">
                                <h1 className="login-logo">Thèm</h1>
                                <span className="login-title mb-3 fs-1 text-light">Login</span>
                            </div>
                            <LoginForm />
                        </Stack>
                    </div>
                </LoginStyle>
            </Col>
        </div>
    );
};
export default Login;
