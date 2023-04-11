import { useNavigate } from 'react-router-dom';

import ButtonStyled from '../../components/Button';
import { toastError } from '../../components/ToastNotification';
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

    const VerifyEmail = async () => {
        let res = await authApi.VerifyEmail();
        console.log(res);
        if (res.data.status === 200) {
            navigate('/verify_email', { state: res.data.data });
        } else {
            toastError(res.data.err);
        }
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
            <ButtonStyled className="mb-3" onClick={VerifyEmail}>
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
