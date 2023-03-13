import { useState } from 'react';

import LoginBg from '../../assets/Background/LoginBg.png';
import ScreenWrapper from '../../components/Wrapper';
import Localstorage from '../../utils/Localstorage';
import authApi from '../../utils/api/authApi';
import RegisterForm from './component/RegisterForm';
import { TitleStyled, SubtitleStyled, BackgroundTmp } from './styled';

import Stack from 'react-bootstrap/Stack';

const RegisterInfo = () => {
    const [err, setErr] = useState();

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

                    <RegisterForm setErr={setErr} />
                </Stack>
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
