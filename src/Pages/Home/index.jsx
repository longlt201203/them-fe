import { useNavigate } from 'react-router-dom';

import ButtonStyled from '../../components/Button';
import Localstorage from '../../utils/Localstorage';

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div>This is Home Page</div>
            <ButtonStyled className="mb-3" onClick={() => navigate('/login')}>
                Login
            </ButtonStyled>
            <ButtonStyled className="mb-3" onClick={() => navigate('/edit_account')}>
                EditAccount
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
