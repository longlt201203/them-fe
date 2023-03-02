import { Col, Container, Row } from 'react-bootstrap';

const ScreenWrapper = ({ children }) => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={8} lg={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};
export default ScreenWrapper;
