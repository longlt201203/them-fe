import ScreenWrapper from '../../components/Wrapper';
import RegisterForm from './component/RegisterForm';
import { TitleStyled, SubtitleStyled } from './styled';

import Stack from 'react-bootstrap/Stack';

const Register = () => {
    return (
        <ScreenWrapper>
            {/* Box */}
            <Stack>
                <div className="text-center">
                    {/* Register title */}
                    <TitleStyled className=""> Thèm</TitleStyled>
                    <SubtitleStyled> Register</SubtitleStyled>
                </div>
                <RegisterForm />
            </Stack>
        </ScreenWrapper>
    );
};

export default Register;
