// import { useState } from 'react';
import LoginBg from '../../assets/Background/LoginBg.png';
import PcVer2 from '../../assets/ForgotPassword/PcVer2.png';
// import Wrap from '../../assets/Wrap.png';
import Wrapp2 from '../../assets/wrapper2.png';
import ScreenWrapper from '../../components/Wrapper';
import { BoxWrapper } from '../ForgotPassword';
import RegisterForm from './component/RegisterForm';
import { TitleStyled, SubtitleStyled, BackgroundTmp } from './style2d';

import Stack from 'react-bootstrap/Stack';

const Register = () => {
    return (
        <BackgroundTmp url={LoginBg} url2={PcVer2}>
            <ScreenWrapper>
                {/* Box */}
                <BoxWrapper url={Wrapp2}>
                    <Stack>
                        <div className="text-center">
                            {/* Register title */}
                            <TitleStyled className="">Thèm</TitleStyled>
                            <SubtitleStyled> Register</SubtitleStyled>
                        </div>

                        <RegisterForm />
                    </Stack>
                </BoxWrapper>
            </ScreenWrapper>
        </BackgroundTmp>
    );
};

export default Register;
