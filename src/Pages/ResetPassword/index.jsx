import { Form } from 'react-router-dom';
import styled from 'styled-components';

import ForgetBg from '../../assets/ForgotPassword/forgetBg.png';
import ScreenWrapper from '../../components/Wrapper';
import { BackgroundTmp, TitleStyled, SubtitleStyled } from '../Register/styled';
import ResetForm from './component/ResetForm';

import Stack from 'react-bootstrap/Stack';

const ResetPassword = () => {
    return (
        <BackgroundTmp url={ForgetBg}>
            <ScreenWrapper>
                <Stack gap={2}>
                    <Stack className="text-center" gap={2}>
                        <TitleStyled className="">Thèm</TitleStyled>
                        <SubtitleStyled>Reset password</SubtitleStyled>
                    </Stack>
                    <ResetForm />
                </Stack>
            </ScreenWrapper>
        </BackgroundTmp>
    );
};

export default ResetPassword;
export const Subtitle = styled.p`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
`;
// <Subtitle>Reset your password</Subtitle>
