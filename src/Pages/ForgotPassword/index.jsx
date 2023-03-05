import { Form } from 'react-router-dom';
import styled from 'styled-components';

import ForgetBg from '../../assets/ForgotPassword/forgetBg.png';
import ScreenWrapper from '../../components/Wrapper';
import { BackgroundTmp, TitleStyled, SubtitleStyled } from '../Register/styled';
import ForgetForm from './components/ForgetForm';

import Stack from 'react-bootstrap/Stack';

const ForgotPassword = () => {
    return (
        <BackgroundTmp url={ForgetBg}>
            <ScreenWrapper>
                <Stack gap={2}>
                    <Stack className="text-center" gap={2}>
                        <TitleStyled className="">Thèm</TitleStyled>
                        <SubtitleStyled>Forgot password</SubtitleStyled>
                        <Subtitle>
                            Enter your email and phone number and we’ll send you a link to reset
                            your password
                        </Subtitle>
                    </Stack>
                    <ForgetForm />
                </Stack>
            </ScreenWrapper>
        </BackgroundTmp>
    );
};

export default ForgotPassword;
export const Subtitle = styled.p`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
`;
