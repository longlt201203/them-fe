import { useState } from 'react';

import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import PcVer2 from '../../assets/ForgotPassword/PcVer2.png';
import ForgetBg from '../../assets/ForgotPassword/forgetBg.png';
import Wrap from '../../assets/Wrap.png';
import ModalComponent from '../../components/Modal/Modal';
import ScreenWrapper from '../../components/Wrapper';
import { BoxWrapper } from '../ForgotPassword';
import { BackgroundTmp, TitleStyled, SubtitleStyled } from '../Register/style2d';
import VerificationForm from './components/VerificationForm';

import Stack from 'react-bootstrap/Stack';

const Verification = () => {
    const location = useLocation();

    const [err, setError] = useState();
    return (
        <>
            <BackgroundTmp url={ForgetBg} url2={PcVer2}>
                <ScreenWrapper>
                    <BoxWrapper url={Wrap}>
                        <Stack gap={2}>
                            <Stack className="text-center" gap={2}>
                                <TitleStyled>Thèm</TitleStyled>
                                <SubtitleStyled className="mb-4">verification</SubtitleStyled>
                                <Subtitle>
                                    We’ve sent you an verification code to {location?.state.email}
                                </Subtitle>
                            </Stack>
                            {err && <p className="text-danger mx-auto"> {err}</p>}
                            <VerificationForm action={setError} />
                        </Stack>
                    </BoxWrapper>
                </ScreenWrapper>
            </BackgroundTmp>
        </>
    );
};

export default Verification;
export const Subtitle = styled.p`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
`;
