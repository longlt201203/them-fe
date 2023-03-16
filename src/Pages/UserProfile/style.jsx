import styled from 'styled-components';

import { themes } from '../../themes';

export const ProfileStyle = styled.div`
    .bg-primary {
        background: ${(props) => props.theme.colors.primary};
    }
    .w-2 {
        width: 2em;
    }
    .h-2 {
        height: 2em;
    }
`;
