import { Form } from 'react-router-dom';
import styled from 'styled-components';

import PcVer2 from '../../assets/ForgotPassword/PcVer2.png';
import ForgetBg from '../../assets/ForgotPassword/forgetBg.png';
import Wrap from '../../assets/Wrap.png';
import ScreenWrapper from '../../components/Wrapper';
import { BoxWrapper } from '../ForgotPassword';
import { BackgroundTmp, TitleStyled, SubtitleStyled } from '../Register/style2d';
import ResetForm from './component/ResetForm';

import Stack from 'react-bootstrap/Stack';

const ResetPassword = () => {
    return (
        <BackgroundTmp url={ForgetBg} url2={PcVer2}>
            <ScreenWrapper>
                <BoxWrapper url={Wrap}>
                    <Stack gap={2}>
                        <Stack className="text-center" gap={2}>
                            <TitleStyled className="">Thèm</TitleStyled>
                            <SubtitleStyled>Reset password</SubtitleStyled>
                        </Stack>
                        <ResetForm />
                    </Stack>
                </BoxWrapper>
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
