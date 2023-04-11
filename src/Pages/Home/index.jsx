import { useNavigate } from 'react-router-dom';

import ButtonStyled from '../../components/Button';
import useAuth from '../../hooks/useAuth';
import Localstorage from '../../utils/Localstorage';
import authApi from '../../utils/api/authApi';

export default function Home() {
    const navigate = useNavigate();
    const { user } = useAuth();

    console.log(user);
    const RequestChangePassword = async () => {
        await authApi.getUser().then((user) => {
            console.log(user);
            if (user.data.status === 200) {
                authApi.SendEmail(user.data.data.email).then((response) => {
                    console.log(response);
                    if (response.data.status === 400) {
                        console.log('error');
                    }
                    if (response.data.status === 200) {
                        console.log(response.data.message);
                        navigate('/verification', { state: user.data.data.email });
                    }
                });
            }
        });

        // if (user2.status === 200) {
        //     await authApi.SendEmail(user2.data.email).then((response) => {
        //         console.log(response);
        //         if (response.data.status === 400) {
        //             console.log('error');
        //         }
        //         if (response.data.status === 200) {
        //             console.log(response.data.message);
        //             navigate('/verification', { state: user2.data.email });
        //         }
        //     });
        // }
    };
    return (
        <>
            <div>This is Home Page</div>
            <ButtonStyled className="mb-3" onClick={() => navigate('/login')}>
                Login
            </ButtonStyled>
            <ButtonStyled className="mb-3" onClick={() => navigate('/edit_account')}>
                EditAccount
            </ButtonStyled>
            <ButtonStyled className="mb-3" onClick={RequestChangePassword}>
                Change Password
            </ButtonStyled>
            <ButtonStyled className="mb-3" onClick={() => navigate('/verify_email')}>
                Verify email
            </ButtonStyled>
            <ButtonStyled
                className="mb-3"
                onClick={() => {
                    Localstorage.deleteCredential();
                    Localstorage.deleteUser();
                    navigate('/login');
                }}
            >
                Log Out
            </ButtonStyled>
        </>
    );
}
