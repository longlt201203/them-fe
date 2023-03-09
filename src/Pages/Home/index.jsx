import { useNavigate } from 'react-router-dom';

import ButtonStyled from '../../components/Button';

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div>This is Home Page</div>
            <ButtonStyled onClick={() => navigate('/edit_account')}>EditAccount</ButtonStyled>
            <ButtonStyled onClick={() => navigate('/login')}>Log Out</ButtonStyled>
        </>
    );
}
