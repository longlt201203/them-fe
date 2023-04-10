import { Field } from 'formik';

import { StyledInput } from '../styled';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const InputVariants = ({ ...rest }) => {
    return (
        <Row>
            <label for="html">HTML</label>
            <StyledInput type="text" id="html" name="fav_language" value="HTML" />
        </Row>
    );
};

export default InputVariants;
