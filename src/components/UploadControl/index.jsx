const UploadControl = ({ children, value, onChange, disabled, accept, className }) => {
    return (
        <label htmlFor="contained-button-file" className={`m-0 w-100 ${className}`}>
            <input
                value={value}
                accept={accept}
                disabled={disabled}
                style={{ display: 'none' }}
                id="contained-button-file"
                multiple
                type="file"
                onChange={disabled ? () => {} : onChange}
            />
            {children}
        </label>
    );
};
export default UploadControl;
