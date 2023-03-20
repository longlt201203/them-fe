import { Stack } from 'react-bootstrap';

import Placeholder from '../../../assets/Background/placeholder.png';
import { TextStyled } from '../styled';

const InfoUser = () => {
    return (
        <Stack direction="horizontal" gap={2}>
            <img
                className="object-fit-contain shadow bg-body-tertiary rounded"
                src={Placeholder}
                alt="avatar user"
                style={{ objectFit: 'cover' }}
                width="50"
                height="50"
            />

            <TextStyled> Name</TextStyled>
        </Stack>
    );
};

export default InfoUser;
