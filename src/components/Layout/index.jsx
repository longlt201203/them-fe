import { Container } from 'react-bootstrap';

import PageHeader from './PageHeader';

const LayoutComponent = ({ children }) => {
    return (
        <>
            <PageHeader />
            <Container fluid={'xxl'} style={{ marginTop: '100px' }}>
                {children}
            </Container>
        </>
    );
};

// <hr />
export default LayoutComponent;
