import { useState } from 'react';

import LoginBg from '../../assets/Background/LoginBg.png';
import ScreenWrapper from '../../components/Wrapper';
import RegisterForm from './component/RegisterForm';
import { TitleStyled, SubtitleStyled, BackgroundTmp } from './styled';

import Stack from 'react-bootstrap/Stack';

const Register = () => {
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

                        {err?.map((item, id) => (
                            <div key={id}> {item.message}</div>
                        ))}
                    </div>

                    <RegisterForm setErr={setErr} />
                </Stack>
            </ScreenWrapper>
        </BackgroundTmp>
    );
};

export default Register;
