import { Button } from 'react-bootstrap';

import Spinner from 'react-bootstrap/Spinner';

function Loading() {
    return (
        <Button variant="info" disabled>
            <Spinner
                animation="border"
                as="span"
                size="sm"
                variant="primary"
                role="status"
                aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
        </Button>
    );
}
export default Loading;
