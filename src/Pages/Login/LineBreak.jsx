const LineBreak = () => {
    return (
        <div className="d-flex justify-content-between ">
            <div className="line-custom text-light">
                <hr className="line-custom  w-100" />
            </div>
            <span className="opacity-50 text-light">Or</span>
            <div className="line-custom text-light">
                <hr />
            </div>
        </div>
    );
};
export default LineBreak;
