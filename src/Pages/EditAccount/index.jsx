import { useState, useRef } from 'react';

import { useLoaderData } from 'react-router-dom';

import LoginBg from '../../assets/Background/LoginBg.png';
import Placeholder from '../../assets/Background/placeholder.png';
import localFileApi from '../../utils/api/localFIleApi';
import EditAccountForm from './components/EditAccountForm';
import { BackgroundUser, ImageUpload, AvaUnknown, ALignAvatar } from './styled';

const EditAccount = () => {
    const fileRef = useRef(null);
    const reader = new FileReader();
    const data = useLoaderData();
    const [files, setFiles] = useState();
    const [ava, setAva] = useState();
    function handleChange(e) {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
        reader.onload = function (e) {
            setAva(e.target.result);
        };
        selectedFiles.forEach((file) => reader.readAsDataURL(file));
    }
    console.log(data?.data.data.avt);
    return (
        <div>
            <BackgroundUser url={Placeholder} className="position-relative mb-5">
                <ALignAvatar>
                    {ava && !data?.data.data.avt ? (
                        <AvaUnknown className="rounded-circle position-absolute top-100 start-50 translate-middle">
                            <i className="bi bi-camera"></i>
                        </AvaUnknown>
                    ) : (
                        <img
                            src={!ava ? `${localFileApi.getImg(data?.data.data.avt)}` : ava}
                            className="rounded-circle position-absolute top-100 start-50 translate-middle"
                            alt="..."
                            width="100"
                            height="100"
                        />
                    )}

                    <ImageUpload type="button" onClick={() => fileRef.current.click()}>
                        <i class="bi bi-pencil"></i>
                        <input ref={fileRef} hidden type="file" onChange={handleChange}></input>
                    </ImageUpload>
                </ALignAvatar>
            </BackgroundUser>

            <EditAccountForm file={files} data={data?.data.data} />
        </div>
    );
};

export default EditAccount;
