import { Field } from 'formik';

import Form from 'react-bootstrap/Form';

export const BootstrapInput = ({
    label,
    type,
    placeholder,
    controlId,
    message,
    name,
    className,
    ...rest
}) => {
    return (
        <>
            <Form.Group className="mb-2" controlId={controlId}>
                {label && <Form.Label className={className}>{label}</Form.Label>}
                <Form.Control
                    as={Field}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    {...rest}
                />
                <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>
            </Form.Group>
        </>
    );
};
