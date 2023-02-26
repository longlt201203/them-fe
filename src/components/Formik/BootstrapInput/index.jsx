import Form from 'react-bootstrap/Form';

export const BootstrapInput = ({ label, type, placeholder, controlId, message, name, ...rest }) => {
    console.log(rest);
    return (
        <>
            <Form.Group className="mb-3" controlId={controlId}>
                {label && <Form.Label>{label}</Form.Label>}
                <Form.Control type={type} placeholder={placeholder} name={name} {...rest} />
                <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>
            </Form.Group>
        </>
    );
};
