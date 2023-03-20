const LineBreak = () => {
    return (
        <div className="d-flex justify-content-between ">
            <div className="line-custom bg-secondary ">
                <hr className="line-custom bg-secondary w-100" />
            </div>
            <span className="opacity-50">Or</span>
            <div className="line-custom">
                <hr />
            </div>
        </div>
    );
};
export default LineBreak;
