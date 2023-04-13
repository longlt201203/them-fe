import { useState } from 'react';

import LoginBg from '../../assets/Background/LoginBg.png';
import PcVer2 from '../../assets/ForgotPassword/PcVer2.png';
import Wrap from '../../assets/Wrap.png';
import Wrapp2 from '../../assets/wrapper2.png';
import ScreenWrapper from '../../components/Wrapper';
import Localstorage from '../../utils/Localstorage';
import authApi from '../../utils/api/authApi';
import { BoxWrapper } from '../ForgotPassword';
import RegisterForm from './component/RegisterForm';
import { TitleStyled, SubtitleStyled, BackgroundTmp } from './styled';

import Stack from 'react-bootstrap/Stack';

const RegisterInfo = () => {
    const [err, setErr] = useState();

    return (
        <BackgroundTmp url={LoginBg} url2={PcVer2}>
            <ScreenWrapper>
                {/* Box */}
                <BoxWrapper url={Wrapp2}>
                    <Stack>
                        <div className="text-center">
                            {/* Register title */}
                            <TitleStyled className="">Thèm</TitleStyled>
                            <SubtitleStyled>Register</SubtitleStyled>
                        </div>

                        <RegisterForm setErr={setErr} />
                    </Stack>
                </BoxWrapper>
            </ScreenWrapper>
        </BackgroundTmp>
    );
};

export default RegisterInfo;
export async function loaderInfoGG() {
    const credential = Localstorage.getCredential();
    const info = await authApi.getInfoFromGG(credential);
    return info.data.data;
}
