import { Form } from 'react-router-dom';
import styled from 'styled-components';

import PcForgot from '../../assets/ForgotPassword/PcForgot.png';
import PcVer2 from '../../assets/ForgotPassword/PcVer2.png';
import ForgetBg from '../../assets/ForgotPassword/forgetBg.png';
import Wrap from '../../assets/Wrap.png';
import ScreenWrapper from '../../components/Wrapper';
import { BackgroundTmp, TitleStyled, SubtitleStyled } from '../Register/styled';
import ForgetForm from './components/ForgetForm';

import Stack from 'react-bootstrap/Stack';

const ForgotPassword = () => {
    return (
        <BackgroundTmp url={ForgetBg} url2={PcVer2}>
            <ScreenWrapper>
                <BoxWrapper url={Wrap}>
                    <Stack gap={2}>
                        <Stack className="text-center" gap={2}>
                            <TitleStyled>Thèm</TitleStyled>
                            <SubtitleStyled>Forgot password</SubtitleStyled>
                            <Subtitle>
                                Enter your email and phone number and we’ll send you a link to reset
                                your password
                            </Subtitle>
                        </Stack>
                        <ForgetForm />
                    </Stack>
                </BoxWrapper>
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
export const BoxWrapper = styled.div`
    @media (min-width: 576px) {
        max-width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 10px 60px;
        transform: translate(-50%, -50%);
        background: ${({ url }) => (url ? `url(${url})` : null)};
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`;
