import { useState } from 'react';

import LoginBg from '../../assets/Background/LoginBg.png';
import ScreenWrapper from '../../components/Wrapper';
import RegisterForm from './component/RegisterForm';
import { TitleStyled, SubtitleStyled, BackgroundTmp } from './styled';

import Stack from 'react-bootstrap/Stack';

const Register = () => {
    return (
        <BackgroundTmp url={LoginBg}>
            <ScreenWrapper>
                {/* Box */}
                <Stack>
                    <div className="text-center">
                        {/* Register title */}
                        <TitleStyled className="">Thèm</TitleStyled>
                        <SubtitleStyled> Register</SubtitleStyled>
                    </div>

                    <RegisterForm />
                </Stack>
            </ScreenWrapper>
        </BackgroundTmp>
    );
};

export default Register;
