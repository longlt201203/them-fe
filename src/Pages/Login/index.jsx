import image_left from '../../assets/login/image_left.jpg';
import LoginBg from '../../assets/login/loginBg.png';
import ScreenWrapper from '../../components/Wrapper';
import { SubtitleStyled, TitleStyled } from '../Register/styled';
import LoginForm from './LoginForm';
import { LoginStyle, StyledCol, StyledCol2 } from './css';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

const Login = () => {
    // <img src={LoginBg} alt="Left" className="d-sm-block d-none w-50"></img>
    return (
        <Container fluid>
            <Row className="p-0">
                <StyledCol>
                    <div>
                        <div className="advertise text-center rounded">
                            <h3> this is section for advertise</h3>
                        </div>
                    </div>
                </StyledCol>
                <Col className="p-0">
                    <LoginStyle className="p-5" url={LoginBg}>
                        <div className="w-md-50">
                            <Stack>
                                <div className="text-center text-light">
                                    <TitleStyled>Thèm</TitleStyled>
                                    <SubtitleStyled>Login</SubtitleStyled>
                                </div>
                                <LoginForm />
                            </Stack>
                        </div>
                    </LoginStyle>
                </Col>
            </Row>
        </Container>
    );
};
export default Login;
