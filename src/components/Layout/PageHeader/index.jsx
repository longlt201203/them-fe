import { useState, useRef, useEffect } from 'react';

import { Stack } from 'react-bootstrap';

import useScrollListener from '../../../hooks/useScrollListener';
import ButtonStyled from '../../Button';
import { StyledHeader } from '../styled';

const PageHeader = () => {
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();

    // update classList of nav on scroll
    useEffect(() => {
        const _classList = [];

        if (scroll.y > 150 && scroll.y - scroll.lastY > 0) _classList.push('nav-bar--hidden');

        setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);
    const menu = useRef();
    return (
        <StyledHeader ref={menu} className={`p-3 border-bottom ${navClassList.join(' ')}`}>
            <Stack direction="horizontal" className="justify-content-between">
                <Stack
                    direction="horizontal"
                    gap={3}
                    className="justify-content-between align-items-center"
                >
                    <i
                        class="bi bi-arrow-left-circle-fill d-flex align-items-center "
                        style={{ fontSize: '40px', color: '#00BAFD' }}
                    ></i>
                    <div>Create post</div>
                </Stack>
                <ButtonStyled buttonType="fw">Post</ButtonStyled>
            </Stack>
        </StyledHeader>
    );
};

export default PageHeader;
